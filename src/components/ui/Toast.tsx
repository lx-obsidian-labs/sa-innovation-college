"use client";

import { createContext, useCallback, useContext, useState, useEffect, useRef, type ReactNode } from "react";
import Icon from "@/components/ui/Icon";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
  progress: number;
}

interface ToastContextValue {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let nextId = 0;

function ToastItem({ t, onClose }: { t: Toast; onClose: (id: number) => void }) {
  const [exiting, setExiting] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "100%";
    requestAnimationFrame(() => {
      bar.style.transition = "width 4s linear";
      bar.style.width = "0%";
    });
  }, []);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => onClose(t.id), 300);
  };

  const icon = {
    success: <Icon name="check-circle" size={5} />,
    error: <Icon name="exclamation-circle" size={5} />,
    info: <Icon name="information-circle" size={5} />,
  }[t.type];

  const colors = {
    success: "bg-emerald-600/95 border-emerald-500",
    error: "bg-red-600/95 border-red-500",
    info: "bg-[var(--color-primary)]/95 border-[var(--color-primary)]",
  }[t.type];

  const progressColors = {
    success: "bg-emerald-400/60",
    error: "bg-red-400/60",
    info: "bg-white/30",
  }[t.type];

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 rounded-xl px-4 py-3.5 text-sm font-medium shadow-2xl border backdrop-blur-sm transition-all duration-300 ${
        exiting ? "opacity-0 translate-x-8 scale-95" : "opacity-100 translate-x-0 scale-100"
      } ${colors}`}
      role="alert"
    >
      <span className="mt-0.5">{icon}</span>
      <span className="flex-1 text-white">{t.message}</span>
      <button onClick={handleClose} className="shrink-0 text-white/60 hover:text-white transition-colors" aria-label="Dismiss">
        <Icon name="x-mark" size={4} />
      </button>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/10 rounded-b-xl overflow-hidden">
        <div ref={barRef} className={`h-full rounded-full ${progressColors}`} />
      </div>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, type, message, progress: 100 }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-24 right-6 z-[9999] flex flex-col gap-3 w-full max-w-sm" aria-live="polite" aria-label="Notifications">
        {toasts.map((t) => (
          <ToastItem key={t.id} t={t} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
