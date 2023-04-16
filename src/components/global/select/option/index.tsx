import { useMemo } from "react";
import { OptionProps } from "react-select";
import IconProvider from "../../providers/icon_provider";

import { SelectData } from "../select";

const CustomOption = ({
  innerRef,
  innerProps,
  ...props
}: OptionProps<SelectData>) => {
  const { isSelected, isDisabled, data, options } = props;

  const isLast = useMemo(() => {
    let arr = options as unknown as SelectData[];
    const itemIndex = arr.findIndex((item) => item.value === data.value);
    if (itemIndex === options.length - 1) {
      return true;
    }
    return false;
  }, [options]);

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`custom-option ${isSelected ? "option--selected" : ""} ${
        isDisabled ? "option--disabled" : ""
      }`}
    >
      <div className={`option_wrapper ${isLast ? "option--last" : ""}`}>
        <span className="text">{props.data.label}</span>
        {isSelected ? (
          <IconProvider icon="TickCircleIcon" color="solid_green" />
        ) : null}
      </div>
    </div>
  );
};

export default CustomOption;
