import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from './components/FrontPage/FrontPageContent.vue';
import CreateTuan from './components/CreateTuan/CreateTuanContent.vue';
import CreateSuccess from './components/CreateSuccess/CreateSuccess.vue';
import Delegate from './components/Delegate/Delegate.vue';
import MyTuan from './components/MyTuan/MyTuan.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', component: FrontPage },
  { path: '/mytuan', component: MyTuan },
  { path: '/createTuan', component: CreateTuan },
  { path: '/createTuan/success', component: CreateSuccess },
  { path: '/delegate', component: Delegate },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;