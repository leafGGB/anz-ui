import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "lg" | "2xl" | "3xl" | "4xl" | "5xl";
export type IColor =
  | "black"
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "gray"
  | "light"
  | "warmgray";
export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "lg",
  },
  color: {
    type: String as PropType<IColor>,
    default: "black",
  },
  href: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export default defineComponent({
  name: "AnzLink",
  props,
  setup(props, { slots }) {
    return () => (
      <a
        class={`
              text-${props.color + "-500"}
              cursor-pointer
              text-${props.size}
              decoration-none
              ${
                props.disabled
                  ? ""
                  : "hover:text-warmgray decoration-none transition duration-300 ease-in-out transform hover:scale-105"
              }
              mx-1
              `}
        href={props.href}
        // disabled={props.disabled}
        onClick={(e) => {
          if (props.disabled) {
            e.preventDefault();
          }
        }}
      >
        {slots.default ? slots.default() : "Link"}
      </a>
    );
  },
});

// import { defineComponent, PropType, ref } from "vue";
// import "uno.css";

// export type IType =
//   | "default"
//   | "primary"
//   | "success"
//   | "warning"
//   | "danger"
//   | "info";
// export type IColor = "black" | "blue" | "green" | "yellow" | "red" | "gray";
// export const props = {
//   type: {
//     type: String as PropType<IType>,
//     default: "default",
//   },
//   color: {
//     type: String as PropType<IColor>,
//     default: "black",
//   },
//   plain: {
//     type: Boolean,
//     default: true,
//   },
//   href: {
//     type: String,
//     required: true,
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
// } as const;

// export default defineComponent({
//   name: "AnzLink",
//   props,
//   setup(props, { slots }) {
//     return () => (
//       <a
//         class={`
//         text-${props.plain ? props.color + "-500" : "white"}
//         hover:text-${props.color}-400
//         cursor-pointer
//         text-lg
//         ${
//           props.disabled
//             ? ""
//             : "hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
//         }
//         mx-1
//         decoration-none
//         `}
//         href={props.href}
//         onClick={(e) => {
//           if (props.disabled) {
//             e.preventDefault();
//           }
//         }}
//       >
//         {slots.default ? slots.default() : "Link"}
//       </a>
//     );
//   },
// });
