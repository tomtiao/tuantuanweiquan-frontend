<template>
  <div class="front-page-counter">
    <div class="tuantuan-total">
      <h2 class="title">团团数量</h2>
      <p class="number">{{ total.tuantuanTotal }}</p>
    </div>
    <div class="solved-total">
      <h2 class="title">累计解决投诉</h2>
      <p class="number">{{ total.solvedTotal }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { TotalInfo } from './useTotalCounter';

export default defineComponent({
  name: 'FrontPageCounter',
  props: {
    totalO: {
      type: Object as PropType<TotalInfo>,
      required: true
    }
  },
  setup(props) {
    const { totalO } = toRefs(props);
    return {
      total: totalO
    };
  }
});
</script>

<style scoped>
.front-page-counter {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #656565;
  line-height: 1.2;
}
.front-page-counter::before {
  content: "";
  display: block;
  position: absolute;
  width: 2px;
  height: 71px;
  background-color: #b3b3b3;
}
.title {
  color: #b3b3b3;
  margin: 0;
  font-size: 16px;
  font-weight: inherit;
  font-family: 'Source Han Sans CN Normal';
}
.number {
  color: #ffce4b;
  margin: 0;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Source Han Sans CN';
}
</style>
