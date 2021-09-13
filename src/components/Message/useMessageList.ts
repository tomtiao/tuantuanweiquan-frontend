import { reactive } from "vue";
import fetchMessageList from "@/api/messageList";

export type ItemType = { name: string; avatar: string; id: number; }
export function useMessageList(): { items: ItemType[], getMessageList: (type: 'agency' | 'staff') => void } {
  const items = reactive<ItemType[]>([]);

  const getMessageList = async (type: 'agency' | 'staff') => {
    items.length = 0;
    items.push(...await fetchMessageList(type));
  };

  return {
    items,

    getMessageList
  };
}