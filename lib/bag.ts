'use client';

import { useSyncExternalStore } from 'react';

type BagLine = { id: string; qty: number };
const bagEvent = 'kickverse-bag';
const empty = '[]';
const keyFor = (storeId: string) => 'kickverse-cart:' + storeId;

function snapshot(storeId: string) {
  try { return localStorage.getItem(keyFor(storeId)) ?? empty; }
  catch { return empty; }
}

function parse(raw: string): BagLine[] {
  try {
    const lines: unknown = JSON.parse(raw);
    return Array.isArray(lines)
      ? lines.filter(line => typeof line?.id === 'string' && Number.isSafeInteger(line.qty) && line.qty > 0)
      : [];
  } catch { return []; }
}

function subscribe(update: () => void) {
  window.addEventListener('storage', update);
  window.addEventListener(bagEvent, update);
  return () => {
    window.removeEventListener('storage', update);
    window.removeEventListener(bagEvent, update);
  };
}

export function useBag(storeId: string) {
  const raw = useSyncExternalStore(subscribe, () => snapshot(storeId), () => null);
  return { ready: raw !== null, lines: parse(raw ?? empty) };
}

export function changeQuantity(storeId: string, id: string, stock: number, delta: number | null) {
  const current = parse(snapshot(storeId));
  const previous = current.find(line => line.id === id);
  const qty = delta === null ? 0 : Math.max(0, Math.min(stock, Math.min(previous?.qty ?? 0, stock) + delta));
  const lines = previous
    ? current.flatMap(line => line.id !== id ? [line] : qty ? [{ id, qty }] : [])
    : qty ? [...current, { id, qty }] : current;
  try {
    localStorage.setItem(keyFor(storeId), JSON.stringify(lines));
    window.dispatchEvent(new Event(bagEvent));
    return true;
  } catch { return false; }
}
