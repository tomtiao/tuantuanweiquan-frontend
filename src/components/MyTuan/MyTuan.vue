<template>
  <div class="content-wrapper">
    <PageSubtitle
      class="page-title"
      title="我的团团"
    ></PageSubtitle>
    <MyTuanCounter
      class="tuan-counter"
      :totalPeople="totalPeople"
      :totalAmount="totalAmount"
    />
    <MyTuanMember
      class="tuan-member-section"
      :members="members"
    />
    <a href="#" class="button-like link">您的团团已符合标准，点击立刻维权</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PageSubtitle from '../PageSubtitle.vue';
import MyTuanCounter from './MyTuanCounter.vue';
import MyTuanMember from './MyTuanMember.vue';

const fetchTotalInfo = async () => {
  return { totalPeople: 23, totalAmount: 42089 };
};

type MemberInfo = Record<'name' | 'date' | 'image', string>;
const fetchMembers = async () => {
  return [
    { name: '匿名', date: '2021-04-29', image: '/static/member/avatar.png' },
    { name: '飞翔的企鹅', date: '2021-04-29', image: '/static/member/avatar.png' },
    { name: '匿名', date: '2021-04-29', image: '/static/member/avatar.png' },
    { name: '匿名', date: '2021-04-29', image: '/static/member/avatar.png' },
    { name: '匿名', date: '2021-04-29', image: '/static/member/avatar.png' },
    { name: '匿名', date: '2021-04-29', image: '/static/member/avatar.png' }
  ];
}

export default defineComponent({
  name: 'MyTuan',
  components: {
    PageSubtitle,
    MyTuanCounter,
    MyTuanMember
  },
  setup() {
    const totalPeople = ref(0);
    const totalAmount = ref(0);

    const getTotalInfo = async () => {
      const { totalPeople: peopleCount, totalAmount: amount } = await fetchTotalInfo();
      totalPeople.value = peopleCount;
      totalAmount.value = amount;
    };

    onMounted(getTotalInfo);

    const members = ref<MemberInfo[]>([]);
    const getMembers = async () => {
      const memberInfo = await fetchMembers();
      members.value = memberInfo;
    };
    onMounted(getMembers);
    return {
      totalPeople,
      totalAmount,
      members
    };
  }
});
</script>

<style scoped>
a {
  text-decoration: inherit;
}
a:link, a:visited, a:hover, a:active {
  color: inherit;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  padding: 2em 0;
}
.page-title {
  align-self: flex-start;
}
.tuan-counter {
  box-sizing: border-box;
  height: 100px;
  margin: 3em 0 1.5em 0;
}
.tuan-member-section {
  width: 1000px;
}
.button-like {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 70px;
  padding: 0 2em;
  background-color: #ffce4b;
}
.button-like.link {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  font-family: "Source Han Sans CN";
}
</style>
