import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large" | "general";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "zinc"
  | "fuchsia"
  | "indigo";

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "general",
  },

  color: {
    type: String as PropType<IColor>,
    default: "zinc",
  },

  round: {
    type: Boolean,
    default: false,
  },

  plain: {
    type: Boolean,
    default: false,
  },

  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "anz-button",
  props,
  setup(props, { slots }) {
    // console.log(`html`, document.querySelector(`#app`)?.innerHTML);

    const size = {
      general: {
        x: "6",
        y: "2",
        text: "sm",
      },
      small: {
        x: "1",
        y: "0.5",
        text: "sm",
      },
      medium: {
        x: "4.5",
        y: "2",
        text: "base",
      },
      large: {
        x: "6",
        y: "3",
        text: "lg",
      },
    };

    return () => (
      <button
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "400"}
          hover:bg-${props.color}-300
          border-${props.color}-${props.plain ? "400" : "400"}
          cursor-pointer
          border-solid
          text-${props.plain ? props.color + "-500" : "white"}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});

// import { defineComponent, h } from "vue";

// export default defineComponent({
//   name: "SButton",

//   // template:'<button>MyButton</button>'

//   render() {
//     return h("button", null, "MyButton");
//   },
// });
