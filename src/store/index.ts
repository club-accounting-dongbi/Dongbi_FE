import { create } from 'zustand';
import { StoreState } from './type';

// Zustand 스토어 생성
export const useStore = create<StoreState>((set) => ({
  clubId: undefined, // 초기 상태 설정
  setClubId: (clubId) => set({ clubId }), // 클럽 ID 업데이트
  memberList: undefined,
  setMemberList: (memberList) => set({ memberList }),
  startDate: undefined,
  setStartDate: (startDate) => set({ startDate }),
  endDate: undefined,
  setEndDate: (endDate) => set({ endDate }),
}));
