import fetchTotalCounter from "@/api/totalCounter";
import { onMounted, Ref, ref } from "vue";

export interface TotalInfo {
  tuantuanTotal: number;
  solvedTotal: number;
}

export default function useTotalCounter(): { totalO: Ref<TotalInfo> } {
  const totalO = ref<TotalInfo>({ tuantuanTotal: 0, solvedTotal: 0 });

  const useCounter = async () => {
    totalO.value = await fetchTotalCounter();
  };

  onMounted(useCounter);

  return {
    totalO
  };
}