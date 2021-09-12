import { MessageDetail } from "@/components/Message/useMessageView"

export default async function fetchMessageView(targetId: number): Promise<MessageDetail[]> {
  if (targetId === 10086) {
    return [
      {
        id: 10086,
        content: '立案回执90909090，警⽅正在全⼒破案',
        timestamp: Date.now() - 100,
      },
      {
        id: 10000,
        content: '233',
        timestamp: Date.now(),
      },
      // {
      //   id: 10086,
      //   content: '立案回执90909090，警⽅正在全⼒破案',
      //   timestamp: Date.now() - 100,
      // },
      // {
      //   id: 10000,
      //   content: '233',
      //   timestamp: Date.now(),
      // },
      // {
      //   id: 10086,
      //   content: '立案回执90909090，警⽅正在全⼒破案',
      //   timestamp: Date.now() - 100,
      // },
      // {
      //   id: 10000,
      //   content: '233',
      //   timestamp: Date.now(),
      // },
      // {
      //   id: 10086,
      //   content: '立案回执90909090，警⽅正在全⼒破案',
      //   timestamp: Date.now() - 100,
      // },
      // {
      //   id: 10000,
      //   content: '233',
      //   timestamp: Date.now(),
      // }
    ];
  }
  return [];
}