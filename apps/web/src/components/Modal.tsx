"use client";
import { useEffect, useCallback, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Modal({ children }: PropsWithChildren) {
  const router = useRouter();
  const onClose = useCallback(() => router.back(), [router]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border bg-background shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-md border bg-background/80 px-2 py-1 text-sm hover:bg-background"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  );
}
