import { FC } from "react";
import MainButton from "../../buttons/main_button";
import TextProvider from "../../providers/text_provider";
import { LittleImageCardProps } from "./little-image-card";
import Container from "./style";

const LittleImageCard: FC<LittleImageCardProps> = (props) => {
  const { titler, photo, button } = props;
  return (
    <Container>
      <div className="card-content-wrap">
        <img src={photo} alt={photo} className="image" />
        <div className="card-titler-wrap">
          <TextProvider
            options={{
              textType: {
                medium: "medium14|16",
              },
            }}
          >
            {titler.title}
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                regular: "regular12|14",
              },
            }}
          >
            {titler.description}
          </TextProvider>
        </div>
      </div>
      {button ? (
        <MainButton
          leftIcon={{
            icon: "RecieveSquareIcon",
            color: "main_text",
          }}
          options={{
            type: "outline",
            width: "100%",
          }}
          title={button?.title}
          onClick={button?.onClick}
        />
      ) : null}
    </Container>
  );
};

export default LittleImageCard;
