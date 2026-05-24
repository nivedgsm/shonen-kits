"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Props = {
  show: boolean;
  title: string;
  description?: string;
};

export default function Toast({
  show,
  title,
  description
}: Props) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.96
          }}
          transition={{
            duration: 0.25
          }}
          className="
            fixed bottom-6 left-1/2 z-[120]
            w-[calc(100%-32px)] max-w-md
            -translate-x-1/2 overflow-hidden
            rounded-3xl border border-blue-500/20
            bg-[#071120]/95 p-5
            shadow-2xl shadow-blue-900/20
            backdrop-blur-2xl
          "
        >
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_70%)]
            "
          />

          <div className="relative flex items-start gap-4">
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-2xl bg-blue-500/15
                text-blue-300
              "
            >
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h3 className="text-sm font-black text-white">
                {title}
              </h3>

              {description ? (
                <p className="mt-1 text-sm text-slate-400">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}