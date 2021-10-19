<template>
    <div class="content-wrapper">
        <div id="note" class="title">
            <img src="../../assets/look.png" alt="搜索镜" class="note-img">
            <p>以下团团与您类似，可选择加入或<a href="/createTuan/success">继续创建团团</a></p>
        </div>
        <SimilarInformation class="tuan-member-section"  :members="members" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SimilarInformation from './SimilarInformation.vue'

type MemberInfo = Record<'name' | 'date' | 'image', string>;
const fetchMembers = async () => {
  return [
    { name: '雪夜', date: '2021-02-04', 
      image: '/static/member/avatar.png', 
      title: '广州龙洞步行街华为店欺骗消费者',
      describe: '在龙洞步行街的一家华为门店门口被店员拉住说填一个调查表，填完后那人说什么支付宝积分可以免费领取充电宝，蓝牙耳机什么的，只要保证未来两年继续用这个号码就可以了，原本无意参与，后在工作人员百般劝说之下，有点心动，然后在了解情况中说了不想弄了，然后店员说已经帮我填好资料什么的，不能...',
      obj: '华为终端客服',
      req: '退款'
    },
    { name: '飞翔的企鹅', date: '2021-07-04', 
      image: '/static/member/avatar.png', 
      title: '天河区龙洞华为手机店', 
      describe:'在广州龙洞步行街想要找晚饭吃的时候，路过一华为手机店，一销售人员就说帮他填个调查问卷，当时看题不多就想帮一下吧，填写时，销售人员就问我手机号码用了多久啊什么的，然后就说帮我查手机号码信用分看可不可以参与他们店内活动，查了之后他就说符合条件，只要保证手机号两年内继续使用，不换号....' ,
      obj: '华为终端客服',
      req: '话费返回欺诈'
   },
  ];
} 

export default defineComponent({
  name: 'SimilarTuan',
  components: {
      SimilarInformation
  },
  setup() {
    const members = ref<MemberInfo[]>([]);
    const getMembers = async () => {
      const memberInfo = await fetchMembers();
      members.value = memberInfo;
    };
    onMounted(getMembers);
    return {
      members
    };
  }
});

</script>

<style scoped>
a {
  color:rgba(255, 206, 75);
  font-family: "M FLi Hei_ Noncommercial";
}
.content-wrapper {
  box-sizing: border-box;
  width: 1200px;
  padding-top: 2%;
  font-family: "Source Han Sans CN Regular";
}
#note {
  color: #6c6c6c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.note-img {
  width: 4em;
  height: 4em;
  margin-right: 0.75em;
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
  margin-right: 65%;
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
  width: 80%;
  height: 2px;
  background-color: #cdcdcd;
  position: absolute;
  bottom: 0;
  z-index: 0;
}
.tuan-member-section {
  width: 1200px;
}
</style>