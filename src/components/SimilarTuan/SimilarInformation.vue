<template>
  <div class="info-section">
    <ul class="info-list">
        <li class="member-item"  v-for="member of members"  :key="member.name">
        <div class="info">
            <img :src="member.image"  :alt="member.name" class="member-img" >
            <div class="member-info">
                <p class="member-name">{{ member.name }}</p>
                <p class="date">{{ member.date }}</p>
            </div>
            <div class="info-describe">
                <p class="place">{{ member.title }}</p>
                <p class="describe">{{ member.describe }}</p>
            </div>
            <div class="more-info">
                <p>[投诉对象]{{ member.obj }}</p>
                <p>[投诉要求]{{ member.req }}</p>
            </div>
            <a href="#" class="button-like link">查看详情</a>
        </div>      
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SimilarInformation',
  props: {
    members: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
.info {
    margin-top: 50px;
    margin-right: 50px;
    background-color: rgb(246, 246,246);
    width: 600px;
    height: 400px;
}
.info-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.info-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  flex-grow: 1;
}
.member-item {
  flex-basis: calc(100% / 2);
  display: flex;
  align-items: center;
  width: 200px;
  text-align: left;
}
.member-item .member-img {
  margin-right: 2em;
}
.member-img {
  margin: 15px 5px 10px 30px;
  display: inline-block;
  width: 53px;
  height: 55px;
  border-radius: 27px;
  vertical-align: middle;
  background-color: #efefef;
}
.member-info {
    display: inline-block;
    margin-top: 15px;
    vertical-align: middle;
}
.more-info {
    margin-bottom: 20px;
    display: inline-block;
}
.member-info>p  {
  margin: 0;
}
.info-describe>p {
    margin: 10px 30px;
}
.more-info>p {
    margin: 2px 30px;
}
.member-name {
  color: rgb(138, 138, 138);
  font-size: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "M FLi Hei_ Noncommercial";
}
.place {
  color: rgb(101, 101, 101);
  font-size: 28px;
  margin: 15px 5px 10px 300px;
}
.describe {
  color: rgb(138, 138, 138);
  font-size: 17px;
}
.date {
  font-size: 16px;
  color: #bbbbbb;
  font-family: "Source Han Sans CN Regular";
}
.button-like {
  box-sizing: border-box;
  display: inline-block;
  margin: 50px 5px 5px 120px;
  width: 160px;
  height: 35px;
  padding: 0 2em;
  background-color: #ffce4b;
}
.button-like.link {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  font-family: "Source Han Sans CN";
}
</style>
