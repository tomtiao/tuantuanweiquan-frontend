<template>
  <PageTemplate>
    <div class="content-wrapper">
      <div class="note">
        <img src="../../assets/tick.png" alt="对勾" class="note-img">
        <p class="note-content">您的创建申请已提交，请耐心等候</p>
      </div>
      <div class="promote">
        <a href="#" class="link">转发</a>
        <p class="promote-content">让更多人看见</p>
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTemplate from '../PageTemplate.vue';

export default defineComponent({
  name: 'CreateTuan',
  components: {
    PageTemplate
  }
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
.promote {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}
.link {
  position: relative;
  text-decoration: none;
}
.link:link, .link:visited, .link:hover, .link:active {
  color: #ffce4b;
  line-height: 37px;
}
.link::before {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  width: 2em;
  height: 2px;
  background-color: #ffce4b;
}
.link::after {
  content: "！";
}
</style>
