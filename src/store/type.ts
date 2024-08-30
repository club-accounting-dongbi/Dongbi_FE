export interface StoreState {
  clubId: number | undefined;
  setClubId: (clubId: number) => void; // 클럽 ID 설정 함수
  clubGeneration: number | undefined;
  setClubGeneration: (clubGeneration: number) => void;
  memberList: string[] | undefined;
  setMemberList: (memberList: string[] | undefined) => void;
  startDate: string[] | undefined;
  setStartDate: (startDate: string[] | undefined) => void;
  endDate: string[] | undefined;
  setEndDate: (endDate: string[] | undefined) => void;
}
