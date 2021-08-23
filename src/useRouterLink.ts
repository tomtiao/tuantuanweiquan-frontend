import { Router } from "vue-router";

export default function useRouterLink(router: Router): void {
  const interceptLink = (e: MouseEvent) => {
    // 按下 Ctrl 及 Shift 时保持浏览器默认行为
    if ( !e.ctrlKey && !e.shiftKey && e.target instanceof Element ) {
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
}

function findElementByTagNameUpwards(ele: Element | null, tagName: string): Element | null {
  let parent = ele;
  
  while (parent !== null && parent.tagName !== tagName.toUpperCase()) {
    parent = parent.parentElement;
  }
  
  return parent;
}