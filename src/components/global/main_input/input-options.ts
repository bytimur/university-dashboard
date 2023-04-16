import { useMemo } from "react";
import { InputOptions, InputOptionsReturn } from "./input";

export const useInputOptions = (props: InputOptions) => {
  const { type, adderText, setFocus, disabled } = props;
  const options = useMemo(() => {
    return {
      type,
      adderText,
      setFocus,
      disabled,
    } as InputOptionsReturn;
  }, []);
  return options;
};
