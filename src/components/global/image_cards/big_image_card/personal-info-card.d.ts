import { AllIconsType } from "@/src/resources/icon_collection";

export type BigImageCardProps = {
  titler: string;
  photo: string;
  leftButton: {
    icon: AllIconsType;
    title: string;
    onClick: () => void;
  };
  rightButton: {
    icon: AllIconsType;
    title: string;
    onClick: () => void;
  };
};
