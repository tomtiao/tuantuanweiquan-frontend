<template>
  <div class="content-wrapper">
    <div class="note">
      <img src="../../assets/tick.png" alt="对勾" class="note-img">
      <p class="note-content">您的团团已经开始维权，请耐心等候并随时准备接收消息，协助机关。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SafeguardingRightsSucces'
});
</script>

<style scoped>
.content-wrapper {
  box-sizing: border-box;
  width: 1200px;
  padding-top: 10%;
  font-family: "Source Han Sans CN Regular";
}
.note {
  color: #6c6c6c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.note-img {
  width: 2em;
  height: 2em;
  margin-right: 1em;
}
</style>
