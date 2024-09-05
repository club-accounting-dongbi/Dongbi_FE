import { create } from 'zustand';
import { StoreState } from './type';

// Zustand 스토어 생성
export const useStore = create<StoreState>((set) => ({
  memberList: undefined,
  setMemberList: (memberList) => set({ memberList }),
  startDate: undefined,
  setStartDate: (startDate) => set({ startDate }),
  endDate: undefined,
  setEndDate: (endDate) => set({ endDate }),
}));
