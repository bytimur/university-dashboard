import { FC } from "react";
import TextProvider from "../providers/text_provider";
import { ChangerButtonProps } from "./changer-button";
import Container from "./style";

const ChangerButton: FC<ChangerButtonProps> = (props) => {
  const { title, activeIndex, onClick, id } = props;
  return (
    <Container onClick={onClick}>
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
        }}
      >
        {title}
      </TextProvider>
      {activeIndex === id && <div className="background" />}
    </Container>
  );
};

export default ChangerButton;
