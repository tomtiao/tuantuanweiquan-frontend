<template>
  <ul class="nav-list">
    <li
      v-for="item of listItems"
      :key="item.link"
      class="nav-list-item"
      :class="{ indicator: currentPath === item.link }"
    >
      <a :href="item.link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageNavigationList",
  setup() {
    const items = ref([
      { title: "首页", link: "/" },
      { title: "维权大厅", link: "#" },
      { title: "友方合作", link: "#" },
      { title: "新闻中心", link: "#" },
      { title: "使用引导", link: "#" },
      { title: "联系我们", link: "#" }
    ]);

    const currentPath = window.location.pathname;

    return {
      listItems: items,
      currentPath
    };
  },
});
</script>

<style scoped>
.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 740px;
  margin: 1.5em 0;
  margin-left: 5em;
  padding-left: 0;
  font-size: 18px;
  font-weight: 500;
  color: #888888;
  flex-grow: 1;
}
.nav-list-item {
  position: relative;
}
.indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.indicator::after {
  content: "";
  display: block;
  position: absolute;
  /* 修我：可以改成相对值 */
  bottom: -2px;
  /* 修我：可以改成相对值 */
  width: 32px;
  /* 修我：可以改成相对值 */
  height: 2px;
  opacity: 0.6;
  background-color: #ffcd4b;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>
