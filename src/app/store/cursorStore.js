import create from "zustand";

// Create Zustand store for cursor state
const useCursorStore = create((set) => ({
  position: { x: 0, y: 0 },
  isHovered: false,
  updateCursorPosition: (x, y) => set({ position: { x, y } }),
  setHoverState: (isHovered) => set({ isHovered }),
}));

export default useCursorStore;
