import { onMounted, reactive } from "vue";
import fetchMessageView from "@/api/messageView";

type Content = { content: string, timestamp: ReturnType<Date["getTime"]> }
export type ItemDetail = { host: { name: string; avatar: string; key: number; contents: Content[]; }, guest: { name: string; avatar: string; key: number; contents: Content[]; } }
export function useMessageList(id: number): { items: ItemDetail[] } {
  const items = reactive<ItemDetail[]>([]);

  const getMessageView = async (id: number) => {
    items.length = 0;
    items.push(...await fetchMessageView(id));
  };

  onMounted(() => getMessageView(id));

  return {
    items
  };
}