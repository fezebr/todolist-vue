import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "./assets/css/style.css";
//font awsome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faComments,
  faTrash,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

//pinia
const pinia = createPinia();
setActivePinia(pinia);
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

//font awsome
library.add(faComments, faTrash, faCheck, faXmark);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
