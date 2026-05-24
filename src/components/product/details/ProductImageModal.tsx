"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
};

export default function ProductImageModal({
  isOpen,
  image,
  title,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 z-[120]
              bg-black/90
              backdrop-blur-xl
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed inset-0 z-[130]
              flex items-center
              justify-center p-4
            "
          >
            <button
              onClick={onClose}
              className="
                absolute right-6 top-6
                flex h-12 w-12
                items-center justify-center
                rounded-full border
                border-white/10
                bg-white/[0.06]
                text-white transition
                hover:bg-white/10
              "
            >
              <X size={20} />
            </button>

            <div
              className="
                relative aspect-[4/5]
                w-full max-w-3xl
                overflow-hidden rounded-[2rem]
                border border-white/10
                bg-[#0B1120]
              "
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}