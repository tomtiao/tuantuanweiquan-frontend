<template>
  <div class="box1">
    <div class="box2">
        <div class="content">
          <div class="title">
            <span class="login-ch">登录 </span>
            <span class="login-eg">Login in</span>
          </div>
          <div class="login-form">
          <input type="text" placeholder="请输入手机号" class="phone">
          <input type="text" placeholder="请输入验证码" class="code">
          <button class="code-btn">获取验证码</button>
          <button class="login-btn" @click="handleLogin" :disabled="isClick">登录</button>
          </div>
        </div>
    </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
});
</script>

<style scoped>
.box1 {
    width: 100%;
    height: 770px;
    padding-bottom: 0px;
    position:relative;
    background: -webkit-linear-gradient(bottom,rgb(255, 228, 157),rgb(255, 240, 217),rgb(255, 252, 245)) 
    no-repeat;
}
.box2 {
    width: 650px;
    height: 500px;
    background: white;
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.content {
  position: absolute;
  width: 500px;
  height: 360px;
  margin: 60px 120px;
}
.login-ch {
  font-size: 32px;
  color: rgb(255, 206, 75);
}
.login-eg {
  color: #CFCFCF;
  font-size: 20px;
  font-family: 'Source Han Sans CN';
}
.phone {
  width: 380px;
  height: 50px;
  margin: 40px 3px 20px 3px;
  background-color: rgb(242, 242, 242);
  border: none;
  font-size: 18px;
  text-align: left;
  padding: 10px 20px;
}
.code {
  width: 170px;
  height: 50px;
  margin: 0 3px;
  background-color: rgb(242, 242, 242);
  border: none;
  font-size: 18px;
  text-align: left;
  padding: 10px 20px;
  display: inline-block;
}
.code-btn {
  width: 185px;
  height: 72px;
  margin: 10px 20px;
  color: #ffffff;
  background-color: rgb(255, 206, 75);
  border: none;
  font-size: 18px;
  text-align: center;
  padding: 10px 20px;
  display: inline-block;
}
.login-btn {
  color: #ffffff;
  box-sizing: border-box;
  width: 418px;
  height: 150px;
  border: unset;
  background-color: #ffce4b;
  font-size: 26px;
  padding: 10px 20px;
  height: 50px;
  margin: 20px 3px 20px 3px;
  font-family: "Source Han Sans CN Regular";
}
</style>