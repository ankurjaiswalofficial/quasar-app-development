import DeletedPage from 'src/pages/DeletedPage.vue';
import HistoryPage from 'src/pages/HistoryPage.vue';
import IndexPage from 'src/pages/IndexPage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage },
      { path: '/history', component: HistoryPage},
      { path: '/deleted', component: DeletedPage}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
