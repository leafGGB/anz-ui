import { App } from "vue";
import anzButton from "./button/index";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
// import { AnzContainer, AnzAside, AnzMain, AnzHeader } from "./layout";
import AnzLink from "./link/index";
import AnzSwitch from "./switch/index";
import AnzBadge from "./badge/index";
import AnzSelect from "./select/index";
import AnzProgress from "./progress/index";
import AnzTextarea from "./textarea/index";

// 导出单独组件
export {
  anzButton,
  SFCButton,
  JSXButton,
  AnzLink,
  AnzSwitch,
  AnzSelect,
  AnzProgress,
  AnzTextarea,
};

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(anzButton.name, anzButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(AnzLink.name, AnzLink);
    app.component(AnzSwitch.name, AnzSwitch);
    app.component(AnzBadge.name, AnzBadge);
    app.component(AnzSelect.name, AnzSelect);
    app.component(AnzProgress.name, AnzProgress);
    app.component(AnzTextarea.name, AnzTextarea);
  },
};
