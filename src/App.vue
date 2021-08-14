<template>
  <PageHeader id="page-header"></PageHeader>
  <PageNavigation id="page-navigation"></PageNavigation>
  <div id="page-content-wrapper">
    <router-view></router-view>
  </div>
  <PageFooter id="page-footer"></PageFooter>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from './components/PageHeader.vue';
import PageNavigation from './components/PageNavigation/PageNavigation.vue';
import PageFooter from './components/PageFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    PageNavigation,
    PageFooter
  },
  setup() {
    const router = useRouter();
    const useRouterLink = () => {
      const app = document.getElementById('app');
      if (!app) throw new TypeError('app is not found.');
      
      app.addEventListener('click', (e: Event) => {
        if (e.target instanceof HTMLElement) {
          if (e.target.tagName === 'A') {
            const a = e.target as HTMLAnchorElement;
            e.preventDefault();
            router.push({
              path: a.href
            });
          }
        }
      });
    };

    onMounted(useRouterLink);

    return {};
  }
});
</script>

<style>
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('./assets/fonts/SourceHanSansCN-Light.otf');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN Normal';
  src: local('Source Han Sans CN'),
  url('./assets/fonts/SourceHanSansCN-Normal.otf');
  font-weight: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN Regular';
  src: local('Source Han Sans CN'),
  url('./assets/fonts/SourceHanSansCN-Regular.otf');
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('./assets/fonts/SourceHanSansCN-Medium.otf');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Sans CN';
  src: local('Source Han Sans CN'),
  url('./assets/fonts/SourceHanSansCN-Bold.otf');
  font-weight: bold;
  font-display: swap;
}
@font-face {
  font-family: 'Source Han Serif CN';
  src: local('Source Han Serif CN'),
  url('./assets/fonts/SourceHanSerifCN-Medium.otf');
  font-display: swap;
}
@font-face {
  font-family: 'M FLi Hei_ Noncommercial';
  src: local('M FLi Hei_ Noncommercial'),
  url('./assets/fonts/LiHei-Regular.otf');
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
