import { ColorPaletTypes } from "@/src/resources/color-palet";
import { AllIconsType } from "@/src/resources/icon_collection";

export type ActionBarItemProps = {
  id?: number;
  icon: {
    iconName: AllIconsType;
    color: ColorPaletTypes;
  };
  title: string;
  onClick: () => void;
};
