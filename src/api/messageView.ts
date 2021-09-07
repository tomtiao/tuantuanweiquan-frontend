import { ItemDetail } from "@/components/Message/useMessageView"

export default async function fetchMessageView(hostId: number, guestId: number): Promise<ItemDetail> {
  return {
    host: {
      avatar: '/static/message/police.png',
      name: '龙洞派出所警方',
      key: 1,
      contents: [
        {
          content: '立案回执90909090',
          timestamp: 0
        }
      ]
    },
    guest: {
      avatar: '/static/message/police.png',
      name: '小明',
      key: 233,
      contents: [
        {
          content: '5555',
          timestamp: 0
        }
      ]
    }
  }
}