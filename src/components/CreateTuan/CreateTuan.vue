<template>
  <PageTemplate>
    <CreateTuanContent></CreateTuanContent>
  </PageTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTemplate from '../PageTemplate.vue';
import CreateTuanContent from './CreateTuanContent.vue';

export default defineComponent({
  name: 'CreateTuan',
  components: {
    PageTemplate,
    CreateTuanContent
  }
});
</script>

<style>
</style>
