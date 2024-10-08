import { create } from "zustand";

interface State {
  ready: boolean;
  setIsReady: () => void;
}

const useStore = create<State>((set) => ({
  ready: false,
  setIsReady: () => set({ ready: true }),
}));

export default useStore;
