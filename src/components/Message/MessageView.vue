<template>
  <div class="container">
    <header class="header">
      <h2 class="container-title">消息列表</h2>
      <button class="add-btn">添加</button>
    </header>
    <div class="note-wrapper" v-if="currentItem.id === -1">
      <p class="note">团团维权</p>
    </div>
    <div class="list-container" v-else> <!-- FIXME: 聊天记录会影响父元素高度 -->
      <ul class="list">
        <li class="list-item" v-for="message of items" :key="message.id">
          <template v-if="currentItem.id === message.id">
            <div class="img-container">
              <img :src="currentItem.avatar" :alt="currentItem.name" class="img">
            </div>
            <div class="main-content">
              <p class="name">
                {{ currentItem.name }}
              </p>
              <p class="content">{{ message.content }}</p>
            </div>
          </template>
          <template v-else>
            <div class="img-container right">
              <img src="" :alt="message.id+''" class="img">
            </div>
            <div class="main-content right">
              <p class="name">我</p>
              <p class="content">{{ message.content }}</p>
            </div>
          </template>
        </li>
      </ul>
    </div>
    <ul class="func-list">
      <li class="func"><a href="/message">消息</a></li>
      <li class="func"><a href="/contact">通讯录</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import { ItemType } from "./useMessageList";
import { MessageDetail } from "./useMessageView";

export default defineComponent({
  name: "MessageList",
  props: {
    details: {
      type: Array as PropType<MessageDetail[]>,
      required: true,
    },
    currentItem: {
      type: Object as PropType<ItemType>,
      required: true,
    },
  },
  setup(props) {
    const { details: items } = toRefs(props);
    const sortByTimestamp = () => [...items.value].sort((a, b) => a.timestamp - b.timestamp);
    const sorted = computed(sortByTimestamp);

    return {
      items: sorted,
    };
  },
});
</script>

<style scoped>
.container {
  --theme-color: #ffce4b;
  --bg-color: #e4e4e4;
  --item-bg-color: #fff;
  --content-color: #6c6c6c;

  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  flex: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 20px;
  background-color: var(--theme-color);
  font-family: "Source Han Sans CN Regular";
}
.container-title {
  color: #fff;
  font-size: inherit;
  font-weight: inherit;
}
.add-btn {
  color: transparent;
  position: absolute;
  right: 1.5em;
  border: 0;
  width: 30px;
  height: 30px;
  padding: 0;
  background: center / contain no-repeat url("../../assets/plus.png");
  cursor: pointer;
}
.list-container {
  flex-grow: 1;
  background-color: var(--bg-color);
  overflow: hidden;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.list {
  display: flex;
  flex-direction: column;
}
.list-item {
  color: #6c6c6c;
  display: flex;
  margin: 1em 0;
  font-family: "Source Han Sans CN Regular";
}
.list-item:last-of-type {
  margin-bottom: unset;
}
.note-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  color: var(--content-color);
  text-align: left;
  font-family: "Source Han Sans CN Regular";
}
.main-content.right {
  text-align: right;
  margin-left: auto;
}
.main-content.right .content {
  flex-direction: row-reverse;
}
.name {
  margin: 0;
  margin-bottom: 0.25em;
}
.content {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-width: 350px;
  min-height: 50px;
  margin: 0;
  padding: 1em 1em;
  background-color: var(--item-bg-color);
  word-break: break-all;
  overflow-wrap: break-word;
  hyphens: auto;
}
.note {
  font-weight: bold;
  font-size: 2em;
  font-family: "Source Han Sans CN";
}
.img-container {
  width: 45px;
  height: 46px;
  border-radius: 23px;
  background-color: #e3e3e3;
  overflow: hidden;
  margin: 0 1.5em;
}
.img-container.right {
  order: 1;
}
.img {
  width: 100%;
  height: 100%;
}
.func-list {
  color: #fff;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: var(--theme-color);
  font-size: 20px;
  font-family: "Source Han Sans CN Regular";
}
.func:last-of-type {
  margin-left: 4em;
}
a {
  text-decoration: inherit;
}
a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
}
</style>
