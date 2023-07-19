import { defineComponent, PropType, ref } from "vue";
import "./badge.css";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IType = "info" | "dor";
export type IColor = "red" | "blue" | "green" | "yellow";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "red",
  },
  type: {
    type: String as PropType<IType>,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "AnzBadge",
  props,
  setup(props, { slots }) {
    const a = 2;
    return () => (
      <div class={`badge`}>
        <div class={`${props.type ? props.type : ""} bg-${props.color}-500`}>
          <span class={`span`}>
            {Number(props.value) > 99 ? "99+" : props.value}
          </span>
        </div>
        {slots.default ? slots.default() : ""}
      </div>
    );
  },
});
