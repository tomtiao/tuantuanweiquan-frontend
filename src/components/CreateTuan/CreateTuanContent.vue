<template>
  <div class="content-wrapper">
    <PageSubTitle
      title="创建团团"
    ></PageSubTitle>
    <CreateTuanForm id="form" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSubTitle from '../PageSubtitle.vue';
import CreateTuanForm from './CreateTuanForm.vue';

export default defineComponent({
  name: 'CreateTuanContent',
  components: {
    PageSubTitle,
    CreateTuanForm
  }
});
</script>

<style scoped>
.content-wrapper {
  box-sizing: border-box;
  width: 1200px;
  margin: 2em auto;
  padding: 0 1em;
}
#form {
  margin-top: 2em;
}
</style>
