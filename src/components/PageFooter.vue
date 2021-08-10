<template>
  <div class="footer-wrapper">
    <footer class="footer">
        <p class="copyright">团团维权 版权所有</p>
        <div class="support">
          <h2>技术支持：</h2>
          <ul class="links">
              <li><a href="#">百度统计</a></li>
              <li><a href="#">CNZZ</a></li>
          </ul>
        </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooter'
});
</script>

<style scoped>
.footer-wrapper {
  width: 100vw;
  color: #fffefe;
  background-color: #656565;
  font-size: 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  max-width: 450px;
  margin: 0 auto;
}
.footer>* {
  margin: 1em 0;
}
.support {
  display: flex;
}
.support>* {
  margin: 0;
}
h2 {
  margin-left: auto;
  font-size: inherit;
  font-weight: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
}
.links {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
.links li:not(:first-child) {
  margin-left: 1em;
}
</style>
