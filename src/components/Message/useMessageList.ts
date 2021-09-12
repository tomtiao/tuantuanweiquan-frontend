import { onMounted, reactive } from "vue";
import fetchMessageList from "@/api/messageList";

export type ItemType = { name: string; avatar: string; id: number; }
export function useMessageList(type: 'agency' | 'staff'): { items: ItemType[] } {
  const items = reactive<ItemType[]>([]);

  const getMessageList = async (type: 'agency' | 'staff') => {
    items.length = 0;
    items.push(...await fetchMessageList(type));
  };

  onMounted(() => getMessageList(type));

  return {
    items
  };
}