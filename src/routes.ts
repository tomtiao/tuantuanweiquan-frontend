import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from './components/FrontPage/FrontPageContent.vue';
import CreateTuan from './components/CreateTuan/CreateTuanContent.vue';
import CreateSuccess from './components/CreateSuccess/CreateSuccess.vue';
import Delegate from './components/Delegate/Delegate.vue';
import MyTuan from './components/MyTuan/MyTuan.vue';
import NotFound from './components/NotFound.vue';
import Login from './components/Login/Login.vue';
import SafeguardingRightsSucces from './components/SafeguardingRightsSucces/SafeguardingRightsSucces.vue'
import SimilarTuan from './components/SimilarTuan/SimilarTuan.vue'

const routes = [
  { 
    path: '/', 
    component: FrontPage
  },
  {
    path: '/login',
    component: Login
  },
  { 
    path: '/mytuan', 
    component: MyTuan 
  },
  { 
    path: '/createTuan', 
    component: CreateTuan 
  },
  { 
    path: '/createTuan/success', 
    component: CreateSuccess 
  },
  { 
    path: '/delegate', 
    component: Delegate 
  },
  {
    path: '/mytuan/safeguardingRightsSucces',
    component: SafeguardingRightsSucces
  },
  {
    path: '/SimilarTuan',
    component: SimilarTuan
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;