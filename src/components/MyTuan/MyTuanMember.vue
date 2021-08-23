<template>
  <div class="member-section">
      <h2 class="title">团团成员</h2>
      <ul class="member-list">
        <li
          class="member-item"
          v-for="member of members"
          :key="member.name"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="member-img"
          >
          <div class="member-info">
            <p class="member-name">{{ member.name }}</p>
            <p class="date">{{ member.date }}</p>
          </div>
        </li>
      </ul>
      <a href="#" class="link more">查看更多</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyTuanMember',
  props: {
    members: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
.member-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.title {
  position: relative;
  color: #6c6c6c;
  margin: 0;
  padding-bottom: 0.5em;
  font-size: 24px;
  font-weight: inherit;
  text-align: left;
}
.title::before {
  display: block;
  content: "";
  width: 20%;
  height: 3px;
  background-color: #ffce4b;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
.title::after {
  display: block;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #cdcdcd;
  position: absolute;
  bottom: 0;
  z-index: 0;
}
.member-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  flex-grow: 1;
}
.member-item {
  flex-basis: calc(100% / 3);
  display: flex;
  align-items: center;
  width: 200px;
  text-align: left;
}
.member-item .member-img {
  margin-right: 2em;
}
.member-img {
  width: 53px;
  height: 55px;
  border-radius: 27px;
  background-color: #efefef;
}
.member-info>p {
  margin: 0;
}
.member-name {
  color: #8a8a8a;
  font-size: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "M FLi Hei_ Noncommercial";
}
.date {
  font-size: 16px;
  color: #bbbbbb;
  font-family: "Source Han Sans CN Regular";
}
.more {
  color: #a1a1a1;
  align-self: flex-end;
  font-size: 20px;
  font-family: "Source Han Sans CN Regular";
}
.more::after {
  content: ">>";
}
</style>
