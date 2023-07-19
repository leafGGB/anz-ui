import { defineComponent, PropType, ref } from "vue";
import "./switch.css";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "red"
  | "blue"
  | "green"
  | "wathet"
  | "RainyAshville"
  | "SunnyMorning"
  | "DustyGrass"
  | "MorpheusDen"
  | "ItmeoBranding"
  | "StarWine"
  | "ShyRainbow"
  | "NewYork";

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
} as const;

export default defineComponent({
  name: "AnzSwitch",
  props,
  setup(props, { slots }) {
    const checkedRef = ref(props.checked);
    return () => (
      <div>
        <input
          type="checkbox"
          class={`switch ${props.size} ${props.color} 
            }
                  `}
          disabled={props.disabled}
          checked={checkedRef.value}
          onClick={() => {
            checkedRef.value = !checkedRef.value;
          }}
        />
      </div>
    );
  },
});
