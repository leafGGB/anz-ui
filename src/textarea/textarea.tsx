import { defineComponent, PropType, ref } from "vue";
import "uno.css";
import "./textarea.css";

export const props = {
  width: {
    type: String,
    default: "500",
  },
  height: {
    type: String,
    default: "150",
  },
  size: {
    type: String,
    default: "30",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  maxLength: {
    type: String,
    default: "50",
  },
};

export default defineComponent({
  name: "AnzTextarea",
  props,
  setup(props, { slots }) {
    return () => (
      <div class={`ctextarea`}>
        <textarea
          class={`${props.disabled ? "disabled" : ""} ${
            props.disabled ? "" : "hv"
          }`}
          style={`height: ${Number(props.height)}px; width: ${Number(
            props.width
          )}px; font-size: ${Number(props.size)}px;`}
          maxlength={props.maxLength}
          placeholder={props.placeholder}
          disabled={props.disabled}
        ></textarea>
      </div>
    );
  },
});
