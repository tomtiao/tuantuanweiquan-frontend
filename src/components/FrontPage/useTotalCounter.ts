import fetchTotalCounter from "@/api/totalCounter";
import { onMounted, reactive } from "vue";

export interface TotalInfo {
  tuantuanTotal: number;
  solvedTotal: number;
}

export default function useTotalCounter(): { totalO: TotalInfo } {
  const totalO = reactive<TotalInfo>({ tuantuanTotal: 0, solvedTotal: 0 });

  const useCounter = async () => {
    const newTotal = await fetchTotalCounter();
    totalO.solvedTotal = newTotal.solvedTotal;
    totalO.tuantuanTotal = newTotal.tuantuanTotal;
  };

  onMounted(useCounter);

  return {
    totalO
  };
}