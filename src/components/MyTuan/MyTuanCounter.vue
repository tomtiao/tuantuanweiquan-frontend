<template>
  <div class="counter">
    <div class="count">
      <p>累计人数<span class="number">{{ peopleCount }}</span>人</p>
    </div>
    <div class="sep"></div>
    <div class="count">
      <p>累计金额<span class="number">{{ amount }}</span>元</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'MyTuanCounter',
  props: {
    totalPeople: {
      type: Number,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { totalPeople: peopleCount, totalAmount: amount } = toRefs(props);

    return {
      peopleCount,
      amount
    };
  }
});
</script>

<style scoped>
.counter {
  color: #6c6c6c;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #efefef;
  font-size: 30px;
  font-family: "Source Han Sans CN Regular";
}
.sep {
  width: 2px;
  height: 50%;
  background-color: #808080;
}
.count {
  padding: 0 3em;
}
.number {
  color: #ffce4b;
  font-family: "M FLi Hei_ Noncommercial";
}
</style>
