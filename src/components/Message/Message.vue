<template>
  <div class="wrapper">
    <PageSubTitle title="我的消息" class="page-subtitle"></PageSubTitle>
    <div class="content-container">
      <MessageList :items="items" class="message-list" @click-item="onClickItem"></MessageList>
      <MessageView :details="details" :current-item="currentItem" class="message-view"></MessageView>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import PageSubTitle from '@/components/PageSubtitle.vue';
import MessageList from './MessageList.vue';
import MessageView from './MessageView.vue';
import { ItemType, useMessageList } from './useMessageList';
import { useMessageView } from './useMessageView';

export default defineComponent({
  name: 'Message',
  components: {
    PageSubTitle,
    MessageList,
    MessageView,
  },
  methods: {
    
  },
  setup() {
    const { items } = useMessageList('agency');

    const { details, getMessageView } = useMessageView();

    const currentItem = reactive<ItemType>({ id: -1, name: '', avatar: '', });
    const onClickItem = (item: ItemType) => {
      if (currentItem.id === item.id) return;
      console.debug(`clicked: ${item.id}`);
      Object.assign(currentItem, item);
      getMessageView(item.id);
    };
    
    return {
      items,
      details,
      currentItem,

      onClickItem,
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
