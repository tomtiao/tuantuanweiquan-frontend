import { Article } from "@/components/FrontPage/usePopularArticles";

export default async function fetchPopularArticles(): Promise<Article[]> {
  return [
    { title: '龙洞飞通手机店虚假宣传欺骗消费者', imageLink: '/popular/shouji.png', articleLink: '#' },
    { title: '靓点美容院恶意欺骗消费者开会员', imageLink: '/popular/meirong.png', articleLink: '#' },
    { title: '广州魔乐科技有限公司虚假刷单', imageLink: '/popular/pian.png', articleLink: '#' },
    { title: '融鑫支付冒名拉卡拉,私自扣费', imageLink: '/popular/zhifu.png', articleLink: '#' }
  ];
}