import { FC } from "react";
import { DirectionCardProps } from "./direction-card";
import DireactionCardTitle from "./direction_card_title";
import DirectionContentCard from "./direction_content_card";
import Container from "./style";

const DirectionCard: FC<DirectionCardProps> = (props) => {
  const { titler, content } = props;
  return (
    <Container>
      <DireactionCardTitle
        button={titler.button}
        onCloseClick={titler.onCloseClick}
      />
      <div className="direction-content">
        {content.map((item) => (
          <DirectionContentCard
            {...item}
            key={item.id}
            title={item.title}
            directionInfo={item.directionInfo}
          />
        ))}
      </div>
    </Container>
  );
};

export default DirectionCard;
