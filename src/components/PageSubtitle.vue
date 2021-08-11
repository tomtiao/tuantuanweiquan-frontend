<template>
  <div class="page-subtitle">
    <h2 class="subtitle"><span class="text">{{ text }}</span></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'PageSubtitle',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { title: text } = toRefs(props);

    return {
      text
    };
  }
});
</script>

<style scoped>
.page-subtitle {
  font-size: 30px;
  color: #6c6c6c;
}
.subtitle {
  display: flex;
  align-items: center;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}
.subtitle::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 34px;
  background-color: #ffce4b;
}
.text {
  margin-left: calc(1em / 3);
}
</style>
