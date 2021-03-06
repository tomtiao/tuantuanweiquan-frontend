<template>
  <div class="content-wrapper">
    <div class="paper">
      <h2 class="title">委托书</h2>
      <div class="personal-info">
        <h3 class="title">委托人</h3>
        <div class="content">
          <h4 class="subtitle">姓名</h4>
          <p class="name">{{ personalInfo.client.name }}</p>
          <h4 class="subtitle">性别</h4>
          <p class="gender">{{ personalInfo.client.gender }}</p>
          <h4 class="subtitle">身份证号码</h4>
          <p class="number">{{ personalInfo.client.number }}</p>
        </div>
      </div>
      <div class="personal-info">
        <h3 class="title">受托人</h3>
        <div class="content">
          <h4 class="subtitle">姓名</h4>
          <p class="name">{{ personalInfo.trustee.name }}</p>
          <h4 class="subtitle">性别</h4>
          <p class="gender">{{ personalInfo.trustee.gender }}</p>
          <h4 class="subtitle">身份证号码</h4>
          <p class="number">{{ personalInfo.trustee.number }}</p>
        </div>
      </div>
      <div class="signature push">
        <span class="note">签名</span>
        <img src="/static/delegate/signature.png" alt="签名">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';

type InfoType = 'client' | 'trustee';
type PersonalInfo = { name: string; gender: string; number: string }
export default defineComponent({
  name: 'Delegate',
  setup() {
    const fetchPersonalInfo = async (type: InfoType) => {
      return type === 'client' ?
      { name: '宋先生', gender: '男', number: '123123123123123123'}
      : { name: '陈先生', gender: '男', number: '123123123123123123'};
    };

    const personalInfo = reactive<{ client: PersonalInfo; trustee: PersonalInfo }>({
      client: { name: '', gender: '', number: ''},
      trustee: { name: '', gender: '', number: ''}
    });

    const getPersonalInfo = async () => {
      personalInfo.client = await fetchPersonalInfo('client');
      personalInfo.trustee = await fetchPersonalInfo('trustee');
    };

    onMounted(getPersonalInfo);

    return {
      personalInfo
    };
  }
});
</script>

<style scoped>
h2, h3, h4, p {
  margin: 0;
}
.content-wrapper {
  width: 1200px;
  padding: 2em 5em;
}
.paper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  border: 1px solid #656565;
  padding: 0 4em;
  padding-bottom: 3em;
  font-weight: inherit;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Source Han Serif CN';
}
.personal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
}
.content {
  display: flex;
}
.title, .subtitle {
  font-weight: inherit;
}
.personal-info .title::after, .personal-info .subtitle::after {
  content: "：";
}
h2.title {
  margin: 1em 0;
  font-size: 36px;
  font-weight: bold;
}
h3.title {
  margin: 0.5em 0;
  font-weight: bold;
}
.subtitle:not(:first-child) {
  margin-left: 1.5em;
}
.push {
  margin-top: auto
}
.signature {
  align-self: flex-end;
  display: flex;
  align-items: center;
}
.note::after {
  content: "：";
}
</style>
