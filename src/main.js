import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
//pinia
const pinia = createPinia();
setActivePinia(pinia);
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");

