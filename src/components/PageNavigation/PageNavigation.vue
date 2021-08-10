<template>
  <div class="nav-wrapper">
    <nav class="nav">
      <div class="logo-section">
        <div class="logo">
          <img src="../../assets/logo.png" alt="团团维权图标" class="logo-img">
        </div>
        <div class="title">
          <h1>团团维权</h1>
          <h2>TUANTUANWEIQUAN</h2>
        </div>
      </div>
      <PageNavigationList></PageNavigationList>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageNavigationList from './PageNavigationList.vue';

export default defineComponent({
  name: 'PageNavigation',
  components: {
    PageNavigationList
  }
});
</script>

<style scoped>
.nav-wrapper {
  width: 100vw;
  color: #888888;
  font-size: 18px;
}
.nav {
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
}
.logo-section {
  display: flex;
}
.logo {
  width: 3em;
  height: 3em;
}
.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  text-align: center;
}
h1, h2 {
  margin: 0;
}
h1 {
  font-size: 25px;
  letter-spacing: 0.5em;
  /* 补偿 letter-spacing 添加的额外末尾间隔 https://github.com/w3c/csswg-drafts/issues/1518 */
  padding-left: 0.5em;
  color: #6c6c6c;
}
h2 {
  font-size: 10px;
  color: #989898;
}
</style>
