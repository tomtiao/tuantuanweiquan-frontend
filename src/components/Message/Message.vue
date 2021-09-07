<template>
  <div class="wrapper">
    <PageSubTitle title="我的消息" class="page-subtitle"></PageSubTitle>
    <div class="content-container">
      <MessageList :items="items" class="message-list"></MessageList>
      <MessageView :items="items" class="message-view"></MessageView>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageSubTitle from '@/components/PageSubtitle.vue';
import MessageList from './MessageList.vue';
import MessageView from './MessageView.vue';
import { useMessageList } from './useMessageList';

export default defineComponent({
  name: 'Message',
  components: {
    PageSubTitle,
    MessageList,
    MessageView,
  },
  setup() {
    const { items } = useMessageList('agency');
    
    return {
      items
    }
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 1200px;
}
.page-subtitle {
  margin: 1em 0 0.5em 0;
  padding-left: 0.5em;
}
.content-container {
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 2em;
}
.message-list {
  width: 350px;
}
.message-view {
  width: 845px;
}
</style>
