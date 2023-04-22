import { FC } from "react";
import TextProvider from "../../providers/text_provider";
import { DirectionContentCardProps } from "./direction-content-card";
import Container from "./style";

const DirectionContentCard: FC<DirectionContentCardProps> = (props) => {
  const { title, directionInfo } = props;
  return (
    <Container>
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
          color: "second_text",
        }}
      >
        {title}
      </TextProvider>
      <div className="direction-info-wrap">
        {directionInfo.map((item) => (
          <div className="info" key={item.id}>
            <TextProvider
              options={{
                textType: {
                  regular: "regular14|16",
                },
                color: "second_text",
              }}
            >
              {item.title}
            </TextProvider>
            <TextProvider
              options={{
                textType: {
                  regular: "regular14|16",
                },
              }}
            >
              {item.description}
            </TextProvider>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DirectionContentCard;
