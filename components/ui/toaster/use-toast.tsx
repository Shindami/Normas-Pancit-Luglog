import * as React from 'react';

export type ToastVariant = 'default' | 'destructive';

export interface ToastData {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
  dismiss: () => void;
}

interface ToastState {
  toasts: ToastData[];
}

const TOAST_LIMIT = 1;
let count = 0;

function generateId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

/* ---------------- Store ---------------- */

const toastStore = {
  state: { toasts: [] as ToastData[] },
  listeners: [] as Array<(state: ToastState) => void>,

  getState: () => toastStore.state,

  setState: (next: ToastState | ((state: ToastState) => ToastState)) => {
    toastStore.state =
      typeof next === 'function' ? next(toastStore.state) : next;

    toastStore.listeners.forEach((l) => l(toastStore.state));
  },

  subscribe: (listener: (state: ToastState) => void) => {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

/* ---------------- API ---------------- */

export function toast(props: Omit<ToastData, 'id' | 'dismiss'>) {
  const id = generateId();

  const dismiss = () =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id, dismiss }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return { id, dismiss };
}

/* ---------------- Hook ---------------- */

export function useToast() {
  const [state, setState] = React.useState<ToastState>(toastStore.getState());

  React.useEffect(() => toastStore.subscribe(setState), []);

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) return;

      const timeout = setTimeout(toast.dismiss, toast.duration ?? 5000);

      return () => clearTimeout(timeout);
    });
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
