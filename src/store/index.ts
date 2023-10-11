import { create } from 'zustand';
import { BearSlice, createBearSlice } from './bear';
import { FishSlice, createFishSlice } from './fish';
import { devtools } from 'zustand/middleware';
import { createSelectors } from '@/utils/createSelectors';

export const useStore = createSelectors(
  create<BearSlice & FishSlice>()(
    devtools(
      (...a) => ({
        ...createBearSlice(...a),
        ...createFishSlice(...a),
      }),
      { enabled: import.meta.env.DEV },
    ),
  ),
);
