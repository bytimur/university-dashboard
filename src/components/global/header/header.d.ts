import { AllIconsType } from "@/src/resources/icon_collection";

export type HeaderProps = {
  titler: {
    title: string;
    description: string;
  };
  backButton?: () => void;
  buttons?: {
    leftButton?: {
      icon: AllIconsType;
      title: string;
      onClick: () => void;
      type: "fill" | "outline";
    };
    rightButton?: {
      icon: AllIconsType;
      title: string;
      onClick: () => void;
      type: "fill" | "outline";
    };
  };
  searchField?: boolean;
};
