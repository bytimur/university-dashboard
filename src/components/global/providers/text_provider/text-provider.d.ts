import { ColorPaletTypes } from "@/src/resources/color-palet";

export type TextProviderProps = {
  children: string | number | React.ReactNode;
  options: TextProviderOption;
  className?: string;
};

export type TextProviderOption = {
  textType: {
    bold?: TextTypeBold;
    medium?: TextTypeMedium;
    regular?: TextTypeRegular;
  };
  color?: ColorPaletTypes;
};

type TextTypeBold =
  | "bold24|32"
  | "bold18|24"
  | "bold16|18"
  | "bold14|16"
  | "bold12|14"
  | "bold10|12";

type TextTypeMedium =
  | "medium24|32"
  | "medium18|24"
  | "medium16|18"
  | "medium14|16"
  | "medium14|16"
  | "medium12|14"
  | "medium10|12";

type TextTypeRegular =
  | "regular24|32"
  | "regular18|24"
  | "regular16|18"
  | "regular14|16"
  | "regular14|16"
  | "regular12|14"
  | "regular10|12";
