import { StatusIndicatorProps } from "@/src/components/global/table/status_indicator/status-indicator";

export type StudentBidCardProps = {
  bidNumber: string;
  bidDate: string;
  status: StatusIndicatorProps;
  bidInfo: {
    id: number;
    title: string;
    description: string;
  }[];
  button: {
    title: string;
    onClick: () => void;
  };
};
