import { TextareaHTMLAttributes, forwardRef, useRef } from "react";
import clsx from "clsx";
import "./textarea.scss";
import { X } from "lucide-react";
import { useMergeRefs } from "../../utils/hooks/use-merge-ref";

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaPropTypes
>((props, ref) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const mergeRef = useMergeRefs(inputRef, ref);
  const { error, helperText, label, className, ...rest } = props;

  const onClickClear = () => {
    const nativeInputValueSetter = Object?.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    );
    nativeInputValueSetter?.set?.call(inputRef.current, "");
    const inputEvent = new Event("input", { bubbles: true });
    inputRef.current?.dispatchEvent(inputEvent);
  };

  return (
    <div
      className={clsx("TextArea-root", className, {
        error: !!props.error,
        disabled: props.disabled,
      })}
    >
      {!!label && <label htmlFor={props.id}>{label}</label>}
      <div className="TextArea-input-wrapper">
        <textarea
          ref={mergeRef}
          className={clsx({
            error: !!props.error,
          })}
          {...rest}
        />
        <button
          type="button"
          className="close-icon"
          onClick={onClickClear}
          disabled={props.disabled}
        >
          <X size={13} strokeWidth={2} />
        </button>
      </div>
      {!!helperText && <p className="helpertext">{helperText}</p>}
    </div>
  );
});

export default TextArea;

TextArea.displayName = "TextArea";
type TextAreaPropTypes = {
  label?: string;
  error?: boolean;
  helperText?: string;
};

TextArea.defaultProps = {
  error: false,
  className: "",
};
