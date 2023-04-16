import { ActionBarItemProps } from "./action_bar_item/action-bar-item";

export type ActionBarProps = {
  actionGroupOne: ActionBarItemProps[];
  actionGroupTwo: ActionBarItemProps[];
  close: () => void;
};
