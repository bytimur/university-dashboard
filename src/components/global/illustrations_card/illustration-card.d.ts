import { AllIconsType } from "@/src/resources/icon_collection";

export type IllustrationCardProps = {
  icon: AllIconsType;
  title: string;
  description: string;
  button?: {
    icon: AllIconsType;
    title: string;
    onClick: () => void;
  };
};
