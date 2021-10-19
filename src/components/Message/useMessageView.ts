import { reactive } from "vue";
import fetchMessageView from "@/api/messageView";

type Content = { content: string, timestamp: number }
export type MessageDetail = { id: number; } & Content
export function useMessageView(): { details: MessageDetail[], getMessageView: (id: number) => void } {
  const items = reactive<MessageDetail[]>([]);

  const getMessageView = async (targetId: number) => {
    items.length = 0;
    items.push(...await fetchMessageView(targetId));
  };

  return {
    details: items,

    getMessageView,
  };
}