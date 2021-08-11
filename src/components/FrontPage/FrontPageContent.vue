<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="infos">
        <ToolTip id="tool-tip"></ToolTip>
        <PageSubtitle
          :title="mainContentTitle"
          id="front-page-subtitle"
        ></PageSubtitle>
        <FrontPageArticleList
          :articleList="articles"
          id="front-page-articles"
        ></FrontPageArticleList>
      </div>
      <div class="actions"></div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ToolTip from './ToolTip.vue';
import PageSubtitle from '../PageSubtitle.vue';
import FrontPageArticleList, { Article } from './FrontPageArticleList.vue';

export default defineComponent({
  name: 'FrontPageContent',
  components: {
    ToolTip,
    PageSubtitle,
    FrontPageArticleList
  },
  setup() {
    const mainContentTitle = '团团热榜';

    let articles = ref<Article[]>([]);

    // 待办：实现获取文章列表过程
    const fetchPopularArticles = async () => {
      return [
        { title: '龙洞飞通手机店虚假宣传欺骗消费者', imageLink: '/popular/shouji.png', articleLink: '#' },
        { title: '靓点美容院恶意欺骗消费者开会员', imageLink: '/popular/meirong.png', articleLink: '#' },
        { title: '广州魔乐科技有限公司虚假刷单', imageLink: '/popular/pian.png', articleLink: '#' },
        { title: '融鑫支付冒名拉卡拉,私自扣费', imageLink: '/popular/zhifu.png', articleLink: '#' }
      ];
    };

    const getPopular = async () => {
      articles.value = await fetchPopularArticles();
    };

    onMounted(getPopular);

    return {
      mainContentTitle,
      articles
    };
  }
});
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  height: 410px;
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 830px;
}
#front-page-subtitle {
  margin-top: 18px;
  margin-bottom: 6px;
}
#front-page-articles {
  flex-grow: 1;
}
</style>
