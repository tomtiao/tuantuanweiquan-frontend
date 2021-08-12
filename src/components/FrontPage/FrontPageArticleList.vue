<template>
  <ul class="article-list">
    <FrontPageArticleItem
      v-for="article of articles"
      :key="article.key"
      :article="article"
      class="article-item"
    >
    </FrontPageArticleItem>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Article } from './usePopularArticles';
import FrontPageArticleItem from './FrontPageArticleItem.vue';

export default defineComponent({
  name: 'FrontPageArticleList',
  components: {
    FrontPageArticleItem
  },
  props: {
    articleList: {
      type: Array as PropType<Article[]>,
      required: true
    }
  },
  setup(props) {
    const { articleList: articles } = toRefs(props);

    return {
      articles
    }
  }
});
</script>

<style scoped>
.article-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 0;
  padding: 0;
}
.article-item {
  flex-basis: 400px;
  height: 150px;
}
</style>
