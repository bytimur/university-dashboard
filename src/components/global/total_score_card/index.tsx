import { FC } from "react";
import TextProvider from "../providers/text_provider";
import Container from "./style";
import { TotalScoreCardProps } from "./total-score-card";

const TotalScoreCard: FC<TotalScoreCardProps> = (props) => {
  const { title, score } = props;
  return (
    <Container>
      <TextProvider
        options={{
          textType: {
            regular: "regular10|12",
          },
          color: "second_text",
        }}
      >
        {title}
      </TextProvider>
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
        }}
      >
        {score}
      </TextProvider>
    </Container>
  );
};

export default TotalScoreCard;
