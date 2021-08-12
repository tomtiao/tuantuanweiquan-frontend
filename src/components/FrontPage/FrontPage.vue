<template>
  <PageTemplate>
    <FrontPageContent id="front-page-content"></FrontPageContent>
  </PageTemplate>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTemplate from '../PageTemplate.vue';
import FrontPageContent from './FrontPageContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageTemplate,
    FrontPageContent
  }
});
</script>

<style>
</style>
