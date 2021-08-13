<template>
  <PageHeader id="page-header"></PageHeader>
  <PageNavigation id="page-navigation"></PageNavigation>
  <div id="page-content-wrapper">
    <slot></slot>
  </div>
  <PageFooter id="page-footer"></PageFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './PageHeader.vue';
import PageNavigation from './PageNavigation/PageNavigation.vue';
import PageFooter from './PageFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    PageNavigation,
    PageFooter
  }
});
</script>

<style>
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('../assets/fonts/SourceHanSansCN-Light.otf');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN Normal';
  src: local('Source Han Sans CN'),
  url('../assets/fonts/SourceHanSansCN-Normal.otf');
  font-weight: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN Regular';
  src: local('Source Han Sans CN'),
  url('../assets/fonts/SourceHanSansCN-Regular.otf');
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('../assets/fonts/SourceHanSansCN-Medium.otf');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('../assets/fonts/SourceHanSansCN-Bold.otf');
  font-weight: bold;
  font-display: swap;
}
@font-face {
  font-family: 'M FLi Hei_ Noncommercial';
  src: local('M FLi Hei_ Noncommercial'),
  url('../assets/fonts/LiHei-Regular.otf');
  font-display: swap;
}
body {
  margin: 0;
  padding: 0;
  line-height: unset;
}
#app {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#page-header,
#page-navigation,
#page-footer {
  flex-shrink: 0;
}
#page-content-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
