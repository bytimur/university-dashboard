import { ColorPaletTypes } from "@/src/resources/color-palet";
import { AllIconsType } from "../../../../resources/icon_collection/index";

export type MainButtonProps = {
  title: string;
  onClick: () => void;
  type?: "submit";
  leftIcon?: { icon: AllIconsType; color: ColorPaletTypes };
  rightIcon?: {
    icon: AllIconsType;
    color?: ColorPaletTypes;
  };
  options?: ButtonOptions;
};

export type ButtonOptions = {
  type: ButtonType;
  width?: number | "100%";
};

type ButtonType = "fill" | "outline";
