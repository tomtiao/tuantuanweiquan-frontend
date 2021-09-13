<template>
  <div class="container">
    <header class="header">
      <h2 class="container-title">消息列表</h2>
      <button class="add-btn">添加</button>
    </header>
    <ul class="list">
      <li class="list-item" v-for="item of items" :key="item.id" @click="onClickItem(item)">
        <div class="img-container">
          <img :src="item.avatar" :alt="item.name" class="img">
        </div>
        <p class="item-content">{{ item.name }}</p>
      </li>
    </ul>
    <ul class="func-list">
      <li class="func"><button class="func-button" type="button" @click="handleSwitchMessage">消息</button></li>
      <li class="func"><a href="/contact">通讯录</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemType } from './useMessageList';

export default defineComponent({
  name: 'MessageView',
  emits: ['clickItem', 'switchMessage'],
  props: {
    items: {
      type: Array as PropType<ItemType[]>,
      required: true
    }
  },
  methods: {
    onClickItem(item: ItemType) {
      this.$emit('clickItem', item);
    },
    handleSwitchMessage() {
      this.$emit('switchMessage');
    }
  }
});
</script>

<style scoped>
.container {
  --theme-color: #ffce4b;
  --bg-color: #e4e4e4;
  --item-bg-color: #fff;

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
  background: center / contain no-repeat url('../../assets/plus.png');
  cursor: pointer;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.list {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}
.list-item {
  color: #6c6c6c;
  display: flex;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  margin-bottom: 5px;
  background-color: var(--item-bg-color);
  font-family: "Source Han Sans CN Regular";
}
.list-item:last-of-type {
  margin-bottom: unset;
}
.img-container {
  width: 45px;
  height: 46px;
  border-radius: 23px;
  background-color: #e3e3e3;
  overflow: hidden;
  margin: 0 2em 0 1.5em;
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
.func-button {
  color: inherit;
  padding: 0;
  border: 0;
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
}
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
</style>
