<template>
  <PageHeader id="page-header"></PageHeader>
  <PageNavigation id="page-navigation"></PageNavigation>
  <div id="page-content-wrapper">
    <slot id="page-content"></slot>
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
  url('../assets/font/SourceHanSansCN-Light.otf');
  font-weight: 300;
}
@font-face {
  font-family: 'Source Han Sans CN Normal';
  src: local('Source Han Sans CN'),
  url('../assets/font/SourceHanSansCN-Normal.otf');
  font-weight: normal;
}
@font-face {
  font-family: 'Source Han Sans CN Regular';
  src: local('Source Han Sans CN'),
  url('../assets/font/SourceHanSansCN-Regular.otf');
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('../assets/font/SourceHanSansCN-Medium.otf');
  font-weight: 500;
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('../assets/font/SourceHanSansCN-Bold.otf');
  font-weight: bold;
}
@font-face {
  font-family: 'M FLi Hei_ Noncommercial';
  src: local('M FLi Hei_ Noncommercial'),
  url('../assets/font/LiHei-Regular.otf');
}
body {
  margin: 0;
  padding: 0;
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
}
</style>
