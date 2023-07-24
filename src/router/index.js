import { createRouter, createWebHistory } from 'vue-router'

/*import App from "@/App.vue";*/
import NyxaneHomePage from "@/views/NyxaneHomePage.vue";
import GamesPage from "@/views/GamesPage.vue";
import VoidPage from "@/views/VoidPage.vue";
import AnimePage from "@/views/AnimePage.vue";
import MusicPage from "@/views/MusicPage.vue";
import ExtrasPage from "@/views/ExtrasPage.vue";
import GithubPage from "@/views/GithubPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NyxaneHomePage
    },
    {
      path: '/games',
      name: 'games-page',
      component: GamesPage
    },
    {
      path: '/void',
      name: 'void-page',
      component: VoidPage
    },
    {
      path: '/anime',
      name: 'anime-page',
      component: AnimePage
    },
    {
      path: '/music',
      name: 'music-page',
      component: MusicPage
    },
    {
      path: '/extras',
      name: 'extras-page',
      component: ExtrasPage
    },
    {
      path: '/github',
      name: 'github-page',
      component: GithubPage
    },
  ]
})

export default router
