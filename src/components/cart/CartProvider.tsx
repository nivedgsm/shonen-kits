"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  country: string;
  price: number;
  compareAtPrice: number;
  emoji: string;
  gradient: string;
  size: string;
  quantity: number;
};

type AddToCartInput = Omit<CartItem, "quantity"> & {
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: AddToCartInput) => void;
  removeItem: (productId: string, size: string) => void;
  increaseQuantity: (productId: string, size: string) => void;
  decreaseQuantity: (productId: string, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = "shonen-kits-cart";

function getCartItemKey(productId: string, size: string) {
  return `${productId}-${size}`;
}

export default function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];

        if (Array.isArray(parsedCart)) {
          setItems(parsedCart);
        }
      }
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, hasMounted]);

  function addItem(item: AddToCartInput) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) =>
          getCartItemKey(cartItem.productId, cartItem.size) ===
          getCartItemKey(item.productId, item.size)
      );

      if (existingItem) {
        return currentItems.map((cartItem) => {
          if (
            getCartItemKey(cartItem.productId, cartItem.size) ===
            getCartItemKey(item.productId, item.size)
          ) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + (item.quantity ?? 1)
            };
          }

          return cartItem;
        });
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: item.quantity ?? 1
        }
      ];
    });
  }

  function removeItem(productId: string, size: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (cartItem) =>
          getCartItemKey(cartItem.productId, cartItem.size) !==
          getCartItemKey(productId, size)
      )
    );
  }

  function increaseQuantity(productId: string, size: string) {
    setItems((currentItems) =>
      currentItems.map((cartItem) => {
        if (
          getCartItemKey(cartItem.productId, cartItem.size) ===
          getCartItemKey(productId, size)
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        }

        return cartItem;
      })
    );
  }

  function decreaseQuantity(productId: string, size: string) {
    setItems((currentItems) =>
      currentItems
        .map((cartItem) => {
          if (
            getCartItemKey(cartItem.productId, cartItem.size) ===
            getCartItemKey(productId, size)
          ) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1
            };
          }

          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const value: CartContextValue = {
    items,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}