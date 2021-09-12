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
      <div class="actions">
        <a href="/createTuan" class="button-like-link">
          <img src="../../assets/tianxie.png" alt="我要维权">
          <span>我要维权</span>
        </a>
        <a href="/mytuan" class="button-like-link">
          <img src="../../assets/duoren.png" alt="我的团团">
          <span>我的团团</span>
        </a>
        <form
          class="search"
          @submit="searchTuantuan"
        >
          <img src="../../assets/search.png" alt="我的团团">
          <input
            type="search"
            class="search-bar"
            placeholder="输入关键字搜索团团"
          >
        </form>
        <FrontPageCounter
          id="counter"
          class="push"
          :totalO="totalO"
        ></FrontPageCounter>
      </div>
    </div>
    <NCarousel
      id="slider"
      dot-placement="top"
      style="--dot-size: 17px;"
      autoplay
    >
      <a
        class="slider-item"
        v-for="slider of sliders"
        :key="slider"
        :href="slider.link"
      >
        <img
          :src="slider.imageLink"
          :alt="slider.title"
        >
        <h2 class="title">{{ slider.title }}</h2>
      </a>
    </NCarousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolTip from './ToolTip.vue';
import PageSubtitle from '../PageSubtitle.vue';
import FrontPageArticleList from './FrontPageArticleList.vue';
import FrontPageCounter from './FrontPageCounter.vue';
import { NCarousel } from 'naive-ui';
import usePopularArticles from './usePopularArticles';
import useSlider from './useSlider';
import useTotalCounter from './useTotalCounter';

export default defineComponent({
  name: 'FrontPageContent',
  components: {
    ToolTip,
    PageSubtitle,
    FrontPageArticleList,
    FrontPageCounter,
    NCarousel
  },
  setup() {
    const mainContentTitle = '团团热榜';
    const { articles } = usePopularArticles();
    const { sliders } = useSlider();
    const { totalO } = useTotalCounter();

    // 待办：实现搜索功能
    const searchTuantuan = async (evt: Event) => {
      if (evt)
      evt.preventDefault();
      console.log(evt);
    };

    return {
      mainContentTitle,
      articles,
      sliders,
      totalO,
      searchTuantuan
    };
  }
});
</script>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 410px;
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 830px;
  flex-shrink: 0;
}
#front-page-subtitle {
  margin-top: 18px;
  margin-bottom: 6px;
}
#front-page-articles {
  flex-grow: 1;
}
.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding-top: 1em;
  font-family: 'Source Han Sans CN';
}
.button-like-link {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 2em;
  border-radius: 30px;
  letter-spacing: 0.5em;
  font-size: 24px;
  font-weight: 500;
  background-color: #ffce4b;
}
.button-like-link img {
  width: 1.25em;
  height: 1.25em;
  filter: brightness(100);
}
.button-like-link {
  text-decoration: inherit;
}
.search {
  color: #b3b3b3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffce4b;
  height: 60px;
  padding: 0 0.5em 0 2em;
  border-radius: 30px;
  font-size: 24px;
  font-weight: 500;
}
.search img {
  width: 1.25em;
  height: 1.25em;
}
.search-bar {
  color: inherit;
  border: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
  background-color: unset;
  outline: 0;
  max-width: 75%;
  font-family: 'Source Han Sans CN';
}
.search-bar::placeholder {
  opacity: 1;
}
#counter {
  height: 120px;
}
#slider {
  width: 100%;
  height: 300px;
}
#slider :deep(.n-carousel__dots .n-carousel__dot) {
  margin-right: 2em !important;
}
.slider-item {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
.slider-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider-item .title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  color: #d1d1d1;
  padding: 1em 0;
  line-height: 1;
  font-size: 30px;
  font-weight: inherit;
  background-color: rgba(0, 0, 0, 0.45);
  font-family: 'Source Han Sans CN Regular';
}
</style>
