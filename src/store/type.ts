export interface StoreState {
  memberList: string[] | undefined;
  setMemberList: (memberList: string[] | undefined) => void;
  startDate: string[] | undefined;
  setStartDate: (startDate: string[] | undefined) => void;
  endDate: string[] | undefined;
  setEndDate: (endDate: string[] | undefined) => void;
}
