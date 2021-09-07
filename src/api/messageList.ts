import { ItemType } from "@/components/Message/useMessageList"

export default async function fetchMessageList(type: 'agency' | 'staff'): Promise<ItemType[]> {
  switch (type) {
    case 'agency': {
      return [
        { avatar: '/static/message/police.png', name: '龙洞派出所警方', key: 1 },
        { avatar: '/static/message/commission.png', name: '广州消费者协会', key: 2 },
      ]
    }
    case 'staff':
      return [
        
      ]
  }
}