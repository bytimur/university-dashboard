import { FC } from "react";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { MainButtonProps } from "./main-button";
import Container from "./style";

const MainButton: FC<MainButtonProps> = (props) => {
  const { title, leftIcon, rightIcon } = props;
  return (
    <Container {...props}>
      {leftIcon ? (
        <IconProvider
          icon={leftIcon.icon}
          color={leftIcon.color || "main_text"}
        />
      ) : null}
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
        }}
      >
        {title}
      </TextProvider>
      {rightIcon ? (
        <IconProvider icon={rightIcon.icon} color={rightIcon.color} />
      ) : null}
    </Container>
  );
};

export default MainButton;
