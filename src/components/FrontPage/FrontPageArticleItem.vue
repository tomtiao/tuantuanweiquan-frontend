<template>
  <li class="article-item">
    <img
      :src="articleO.imageLink"
      :alt="articleO.title"
      class="article-cover"
    >
    <div class="legend">
      <h2 class="title">{{ articleO.title }}</h2>
      <a
        :href="articleO.articleLink"
        class="link push"
      >点击了解</a>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Article } from './FrontPageArticleList.vue';

export default defineComponent({
  name: 'FrontPageArticleItem',
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  },
  setup(props) {
    const { article: articleO } = toRefs(props);

    return {
      articleO
    };
  }
});
</script>

<style scoped>
.article-item {
  position: relative;
  background-color: #dadada;
}
.article-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.legend {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 0 1em;
  padding-left: 0.5em;
  background-color: rgba(0, 0, 0, 0.39);
}
.title {
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  max-width: 70%;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
.link {
  font-size: 12px;
  color: #656565;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 21px;
  border-radius: 1em;
  background-color: #ffce4b;
}
.push {
  margin-left: auto;
}
</style>
