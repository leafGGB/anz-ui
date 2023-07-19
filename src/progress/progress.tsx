import { defineComponent, PropType } from "vue";
import "./progress.css";

export type ProgressColor =
  | "blue"
  | "red"
  | "green"
  | "orange"
  | "gray"
  | "black"
  | "NightFade"
  | "YoungPassion"
  | "SunnyMorning"
  | "FrozenDreams"
  | "DeepBlue"
  | "SharpeyeEagle"
  | "OldHat"
  | "Rainbow"
  | "NewYork"
  | "LoonCrest"
  | "RichMetal"
  | "WarmFlame";

export const props = {
  percentage: {
    type: String,
    default: 0,
  },

  color: {
    type: String as PropType<ProgressColor>,
    default: "blue",
  },

  height: {
    type: String,
    default: 6,
  },
};

export default defineComponent({
  name: "AnzProgress",
  props,
  setup(props) {
    // 逻辑处理

    return () => {
      return (
        <div class={"progress"}>
          <div
            class={`progress-bar ${props.color}`}
            style={`height: ${Number(props.height)}px; width: ${Number(
              props.percentage
            )}%`}
          >
            <span class={"text"}>{props.percentage + "%"}</span>
          </div>
        </div>
      );
    };
  },
});
