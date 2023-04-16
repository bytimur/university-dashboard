import { AllIconsType } from "@/src/resources/icon_collection";

export type SidebarButtonProps = {
  icon: AllIconsType;
  title: string;
  label?: string;
  isActive: boolean;
  onClick: () => void;
};
