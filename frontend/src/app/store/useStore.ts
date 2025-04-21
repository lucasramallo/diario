import { create } from 'zustand';

interface StoreState {
  successSubmit: boolean;
  setSuccess: () => void;
}

export const useStore = create<StoreState>((set) => ({
  successSubmit: false,
  setSuccess: () => {
    set({ successSubmit: true });

    setTimeout(() => {
      set({ successSubmit: false });
    }, 1000);
  },
}));
