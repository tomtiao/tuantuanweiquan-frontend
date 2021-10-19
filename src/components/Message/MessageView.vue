<template>
  <div class="container">
    <template v-if="currentItem.id === -1">
      <div class="note-wrapper">
        <p class="note">团团维权</p>
        <p class="subnote">点击消息列表中的项目</p>
      </div>
    </template>
    <template v-else>
      <header class="header">
        <button class="back-btn header-btn" @click="onClickGoBack">返回</button>
        <h2 class="container-title">{{ currentItem.name }}</h2>
        <button class="add-btn header-btn">添加</button>
      </header>
      <div class="list-container"> <!-- FIXME: 聊天记录会影响父元素高度 -->
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
      <div class="func-list">
        <button class="func func-button voice">语音</button>
        <input type="text" class="func func-input">
        <button class="func func-button sticker">表情</button>
        <button class="func func-button more">更多</button>
      </div>
    </template>
    
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import { ItemType } from "./useMessageList";
import { MessageDetail } from "./useMessageView";

export default defineComponent({
  name: "MessageView",
  emits: ['goBack'],
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
  setup(props, context) {
    const { details: items } = toRefs(props);
    const sortByTimestamp = () => [...items.value].sort((a, b) => a.timestamp - b.timestamp);
    const sorted = computed(sortByTimestamp);

    const onClickGoBack = () => {
      context.emit('goBack');
    };

    return {
      items: sorted,

      onClickGoBack
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
  --message-toolbar-bg-color: #f2f2f2;
  --message-input-bg-color: #fff;

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
.header-btn {
  color: transparent;
  position: absolute;
  border: 0;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
}
.back-btn {
  left: 1em;
  width: 1.5em;
  height: 1.5em;
  background: center / contain no-repeat url("../../assets/right_arrow.png");
  transform: rotate(180deg);
}
.add-btn {
  right: 1.5em;
  width: 2em;
  height: 2em;
  background: center / contain no-repeat url("../../assets/ellipsis.png");
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
  flex-direction: column;
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
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 2em;
  font-family: "Source Han Sans CN";
}
.subnote {
  margin: 0.5em 0;
  font-size: 1em;
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
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 70px;
  background-color: var(--message-toolbar-bg-color);
  font-size: 20px;
  font-family: "Source Han Sans CN Regular";
}
.func-button {
  flex: 0 0 auto;
  color: transparent;
  box-sizing: border-box;
  border: 0;
  padding: 0;
  width: 2.25em;
  height: 2.25em;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 16px;
}
.voice {
  background-image: url('../../assets/voice.png');
  margin: 0 1.5em;
}
.sticker {
  background-image: url('../../assets/sticker.png');
  margin-left: 1.5em;
}
.more {
  background-image: url('../../assets/plus.png');
  width: 2.75em;
  height: 2.75em;
  margin-right: 0.5em;
}
.func-input {
  flex: 0 0 auto;
  box-sizing: border-box;
  width: 644px;
  height: 48px;
  border: 0;
  padding: 1em;
  border-radius: 24px;
  background-color: var(--message-input-bg-color);
  font-size: 18px;
  outline: none;
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
