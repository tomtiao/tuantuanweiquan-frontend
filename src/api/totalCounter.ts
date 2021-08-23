import { TotalInfo } from "@/components/FrontPage/useTotalCounter";

export default async function fetchTotalCounter(): Promise<TotalInfo> {
  return {
    tuantuanTotal: 864,
    solvedTotal: 288
  };
}