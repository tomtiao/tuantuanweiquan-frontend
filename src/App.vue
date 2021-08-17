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
      function findElementByTagNameUpwards(ele: Element | null, tagName: string): Element | null {
        let parent = ele;

        while (parent !== null && parent.tagName !== tagName.toUpperCase()) {
          parent = parent.parentElement;
        }

        return parent;
      }
      
      const interceptLink = (e: MouseEvent) => {
        // 按下 Ctrl 时保持浏览器默认行为
        if ( !e.ctrlKey && e.target instanceof Element ) {
          // 触发事件的可能是 <a> 内部的子元素，需要向上寻找是否有 a 标签
          // 不支持 composedPath 的浏览器使用 findElementByTagNameUpwards
          let ele;
          if (e.composedPath) {
            ele = e.composedPath().find(ele => ele instanceof HTMLAnchorElement);
          } else {
            ele = findElementByTagNameUpwards(e.target, 'a');
          }
          if (ele instanceof HTMLAnchorElement) {
            const a = ele;
            const url = new URL(a.href);
            if (window.location.hostname === url.hostname
            && window.location.port === window.location.port) {
              e.preventDefault();
              router.push({
                path: url.pathname,
                hash: url.hash,
                params: Object.fromEntries(url.searchParams)
              });
            }
          }
        }
      };

      const app = document.getElementById('app');
      if (!app) throw new TypeError('app is not found.');
      
      app.addEventListener('click', interceptLink);
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
