import { DirectionCardTitleProps } from "./direction_card_title/direction-card-title";
import { DirectionContentCardProps } from "./direction_content_card/direction-content-card";

export type DirectionCardProps = {
  titler: DirectionCardTitleProps;
  content: DirectionContentCardProps[];
};
