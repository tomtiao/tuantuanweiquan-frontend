<template>
  <div class="tool-tip">
    <div class="tool-tip-icon">
      <img src="../../assets/horn.png" alt="小喇叭" class="tool-tip-icon-img">
    </div>
    <h2 class="tool-tip-title">系统公告：</h2>
    <p class="tool-tip-content">
      <a :href="note.link">{{ note.content }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'ToolTip',
  setup() {
    const note = ref({ content: '暂无公告', link: '#' })

    // 待办：实现获取公告过程
    const fetchNote = async () => {
      return { content: '对虚假投诉及违规账号处理的公告', link: '/' };
    }

    const getNote = async () => {
      try {
        const { content, link } = await fetchNote();
        note.value.content = content;
        note.value.link = link;
      } catch (e) {
        console.error(e);
      }
    };

    onMounted(getNote);

    return {
      note
    };
  }
});
</script>

<style scoped>
.tool-tip {
  display: flex;
  align-items: center;
  border: 0.5px solid #d4a320;
  padding: 0 0.5em;
  color: #888888;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  background-color: #fff8e5;
  font-family: 'Source Han Sans CN';
}
.tool-tip-icon {
  width: 1.75em;
  height: 1.75em;
}
.tool-tip-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.tool-tip-title,
.tool-tip-content {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}
.tool-tip-title {
  margin-left: 1em;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>
