import { writable } from 'svelte/store';

export type ToastTone = 'success' | 'info' | 'error';

export interface Toast {
  id: number;
  message: string;
  tone: ToastTone;
}

const { subscribe, update } = writable<Toast[]>([]);

let nextId = 0;

export const toasts = { subscribe };

export function showToast(message: string, tone: ToastTone = 'info', duration = 2200) {
  const id = nextId++;
  update((all) => [...all, { id, message, tone }]);
  setTimeout(() => dismissToast(id), duration);
}

export function dismissToast(id: number) {
  update((all) => all.filter((t) => t.id !== id));
}
