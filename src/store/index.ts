import { create } from 'zustand';
import { BearSlice, createBearSlice } from './bear';
import { FishSlice, createFishSlice } from './fish';

export const useStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));
