<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="avatar">
          <img src="../assets/avatar.png" alt="用户头像" class="avatar-img">
      </div>
      <div class="links">
        <a class="link message" href="#">消息</a>
        <a class="link login" href="/login">登录</a>
        <a class="link signup" href="/signup">注册</a>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader'
});
</script>

<style scoped>
.header-wrapper {
  color: #fffefe;
  background-color: #656565;
  font-size: 18px;
  font-family: 'Source Han Sans CN Normal';
}
.header {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em 0;
}
.avatar {
  width: 1.5em;
  height: 1.5em;
  background-color: #ffffff;
  border-radius: 50%;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.links {
  display: flex;
  align-items: center;
}
.link {
  margin-left: 2em;
  vertical-align: middle;
}
.link:first-child {
  margin-left: 1em;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>
