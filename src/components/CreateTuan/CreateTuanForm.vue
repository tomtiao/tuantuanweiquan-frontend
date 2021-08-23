<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form-item">
      <label for="address" class="label">受骗地址</label>
      <input type="text" id="address" class="field">
    </div>
    <div class="form-item">
      <label for="name" class="label">受骗姓名</label>
      <input type="text" id="name" class="field">
      <span class="note">实名认证更有助于追回欠款</span>
    </div>
    <div class="form-item">
      <label for="total" class="label">受骗金额</label>
      <input type="number" id="total" class="field" min="0">
      <span class="unit">元</span>
    </div>
    <div class="form-item">
      <label for="shop-name" class="label">涉案商铺名称</label>
      <input type="text" id="shop-name" class="field">
    </div>
    <div class="form-item">
      <label for="shop-tel" class="label">涉案商铺联系电话</label>
      <input type="tel" id="shop-tel" class="field">
    </div>
    <div class="form-item">
      <CreateTuanFormUpload
        labelContent="涉案商铺门店图片"
      ></CreateTuanFormUpload>
    </div>
    <div class="form-item">
      <CreateTuanFormUpload
        labelContent="受骗证据"
      ></CreateTuanFormUpload>
    </div>
    <div class="buttons">
      <button class="button" type="button">保存</button>
      <button class="button" type="submit">提交</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateTuanFormUpload from './CreateTuanFormUpload.vue';

export default defineComponent({
  name: 'CreateTuanForm',
  components: {
    CreateTuanFormUpload
  },
  setup() {
    const onSubmit = (evt: Event) => {
      const target = evt.target;
      if (!(target instanceof HTMLFormElement)) throw new TypeError(`${evt} is triggered by non-form element.`);
      let formData = new FormData(target);
      console.log(formData);
      fetch('/createTuan', {
        method: 'POST',
        body: formData
      })
      .then(res => console.log(res))
      .catch(console.error);
    };

    return {
      onSubmit
    };
  }
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  color: #8a8a8a;
  font-family: "Source Han Sans CN";
}
.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  font-size: 18px;
  font-weight: 500;
}
.form-item:nth-last-child(2) {
  margin-bottom: 2em;
}
.label {
  width: 9em;
  line-height: 50px;
  text-align: right;
}
.label::after {
  content: "：";
}
.field {
  box-sizing: border-box;
  width: 161px;
  height: 40px;
  padding: 0.5em 1em;
  border: unset;
  background-color: #f2f2f2;
}
.field[type=number] {
  -moz-appearance: textfield;
  padding-right: 3em;
}
.field[type=number]::-webkit-outer-spin-button,
.field[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.unit {
  color: #b0b0b0;
  position: relative;
  right: 2em;
}
.note::before {
  content: "*";
}
.note {
  color: #b8b8b8;
  font-size: 12px;
  margin-left: 1em;
}
#address {
  width: 600px;
}
#shop-name {
  width: 326px;
}
#shop-tel {
  width: 178px;
}
.preview {
  width: 178px;
  height: 97px;
  background: no-repeat center/contain url('../../assets/pic.png'), #f2f2f2;
}
.button-like {
  color: #8a8a8a;
  align-self: flex-start;
  display: block;
  width: 100px;
  height: 25px;
  border: 1px solid #cdcdcd;
  font-size: 12px;
  line-height: 25px;
  background-color: #f2f2f2;
  font-family: "Source Han Sans CN Regular";
}
.button {
  color: #ffffff;
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  border: unset;
  margin-right: 100px;
  padding-left: 1em;
  background-color: #ffce4b;
  font-size: 24px;
  letter-spacing: 1em;
  font-family: "Source Han Sans CN Regular";
}
</style>
