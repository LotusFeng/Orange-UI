import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchPage/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonPage/ButtonDemo.vue";
import DialogDemo from "./components/DialogPage/DialogDemo.vue";
import TabsDemo from "./components/TabsPage/TabsDemo.vue";
// @ts-ignore
import intro from './markdown/intro.md'
// @ts-ignore
import getStarted from './markdown/get-started.md'
// @ts-ignore
import install from './markdown/install.md'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro'},
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
