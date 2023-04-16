import { FC } from "react";
import MainButton from "../../buttons/main_button";
import TextProvider from "../../providers/text_provider";
import { BigImageCardProps } from "./personal-info-card";
import Container from "./style";

const BigImageCard: FC<BigImageCardProps> = (props) => {
  const { titler, photo, leftButton, rightButton } = props;
  return (
    <Container {...props}>
      <TextProvider
        options={{
          textType: {
            medium: "medium16|18",
          },
        }}
      >
        {titler}
      </TextProvider>
      <div className="image-wrap">
        <img src={photo} alt={photo} className="main-image" />
        {/* <img src={photo} alt={photo} className="bg-image" /> */}
      </div>

      <div className="button-wrap">
        <MainButton
          onClick={leftButton.onClick}
          title={leftButton.title}
          leftIcon={{
            icon: leftButton.icon,
            color: "main_text",
          }}
        />
        <MainButton
          onClick={rightButton.onClick}
          title={rightButton.title}
          leftIcon={{
            icon: rightButton.icon,
            color: "main_text",
          }}
        />
      </div>
    </Container>
  );
};

export default BigImageCard;
