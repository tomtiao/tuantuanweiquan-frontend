<template>
  <div class="container">
    <h2 class="title">404 Not Found</h2>
    <p class="note">找不到请求的页面 {{ $route.path }}</p>
    <router-link to="/">返回主页</router-link>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>