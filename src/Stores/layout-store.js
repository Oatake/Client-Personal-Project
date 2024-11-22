import { create } from "zustand";

const useLayoutStore = create((set) => ({
  isLBOpen: false,
  setIsLBOpen: () => set(state => ({isLBOpen : !state.isLBOpen})),

  isRBOpen: false,
  setIsRBOpen: () => set(state => ({isRBOpen : !state.isRBOpen})),
  setRBOpen: () => set(state => ({isRBOpen : true})),
  setRBClose: () => set(state => ({isRBOpen : false})),
}));

export default useLayoutStore;