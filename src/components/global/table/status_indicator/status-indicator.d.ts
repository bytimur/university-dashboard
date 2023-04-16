import { ColorPaletTypes } from "@/src/resources/color-palet";

export type StatusIndicatorProps = {
  title: string;
  type: StatusIndicatorType;
};

export type StatusIndicatorType =
  | "new"
  | "returned"
  | "Invited"
  | "repeated"
  | "waiting"
  | "approved"
  | "pending"
  | "incomplete"
  | "rated"
  | "notCome"
  | "sent"
  | "paid"
  | "rejected";
