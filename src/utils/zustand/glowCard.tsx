import { create } from "zustand";

interface GlowCard {
  defaultColor: string;
  color: string;
  setColor: (color: string) => void;
}

export const useGlowCard = create<GlowCard>()((set) => ({
  defaultColor: "#83bbff",
  color: "#83bbff",
  setColor: (newColor) => set(() => ({ color: newColor })),
}));
