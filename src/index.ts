// import { createApp } from "vue";
// import anzButton from "./button";
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton";

import { createApp } from "vue/dist/vue.esm-browser";
import AnZUI from "./entry";
import ButtonDemo from "./button/index.vue";
import AnzLink from "./link/link.vue";
import AnzSwitch from "./switch/switch.vue";
import AnzBadge from "./badge/badge.vue";
import AnzSelect from "./select/select.vue";
import AnzProgress from "./progress/progress.vue";
import AnzTextarea from "./textarea/textarea.vue";

// createApp(anzButton).mount("#app");

// createApp(SFCButton).mount("#app");
// createApp(JSXButton).mount("#app");

// createApp(ButtonDemo).use(AnZUI).mount("#app");
// createApp(AnzLink).use(AnZUI).mount("#app");
// createApp(AnzSwitch).use(AnZUI).mount("#app");
// createApp(AnzBadge).use(AnZUI).mount("#app");
// createApp(AnzSelect).use(AnZUI).mount("#app");
// createApp(AnzProgress).use(AnZUI).mount("#app");
createApp(AnzTextarea).use(AnZUI).mount("#app");
