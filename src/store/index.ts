import { create } from 'zustand';
import { MyStateType } from './type';

// Zustand 스토어의 상태 정의
interface StoreState extends MyStateType {
  setClubId: (clubId: number) => void; // 클럽 ID 설정 함수
}

// Zustand 스토어 생성
export const useStore = create<StoreState>((set) => ({
  clubId: undefined, // 초기 상태 설정
  setClubId: (clubId) => set({ clubId }), // 클럽 ID 업데이트
}));
