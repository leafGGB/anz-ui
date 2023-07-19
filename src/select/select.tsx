import { defineComponent, PropType } from "vue";
import "./select.css";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IType = "info" | "dor";
export type IColor = "red" | "blue" | "green" | "yellow";

export const props = {
  title: {
    type: String,
    default: "下拉菜单",
  },
  color: {
    type: String as PropType<IColor>,
    default: "red",
  },
  list: {
    type: Array,
    default: [],
  },
  type: {
    type: String as PropType<IType>,
    default: "",
  },
  disabled: {
    type: String,
    default: "",
  },
} as const;
const Item = (props: { item: string }) => {
  return <li>{props.item}</li>;
};
export default defineComponent({
  name: "AnzSelect",
  props,
  setup(props, { slots }) {
    return () => (
      <div class={`${props.disabled ? "disabled" : "menulist"}`}>
        {/* <div class={`${props.disabled}`}></div> */}
        {props.title}
        <div class={"list"}>
          {
            // 遍历数组
            props.list.map((item) => {
              // 生成对应的li
              return <li class={"item"}>{item}</li>;
            })
          }
        </div>
      </div>
    );
  },
});
