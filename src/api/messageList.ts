import { ItemType } from "@/components/Message/useMessageList"

export default async function fetchMessageList(type: 'agency' | 'staff'): Promise<ItemType[]> {
  switch (type) {
    case 'agency': {
      return [
        { avatar: '/static/message/police.png', name: '龙洞派出所警方', id: 10086 },
        { avatar: '/static/message/commission.png', name: '广州消费者协会', id: 2 },
      ]
    }
    case 'staff':
      return [
        
      ]
  }
}