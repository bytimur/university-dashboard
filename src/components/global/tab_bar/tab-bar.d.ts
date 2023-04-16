import { AllIconsType } from "@/src/resources/icon_collection";

export type TabBarProps = {
  id?: number;
  isActive: boolean;
  title: string;
  key: string;
  icon: AllIconsType;
  onClick: () => void;
};
