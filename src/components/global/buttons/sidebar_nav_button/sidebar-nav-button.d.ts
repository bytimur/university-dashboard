import { AllIconsType } from "@/src/resources/icon_collection";

export type SidebarNavButton = {
  photo: string;
  title: string;
  description: string;
  button: {
    onClick: () => void;
    icon: AllIconsType;
  };
};
