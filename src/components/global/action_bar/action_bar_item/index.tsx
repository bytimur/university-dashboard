import { FC } from "react";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { ActionBarItemProps } from "./action-bar-item";
import Container from "./style";

const ActionBarItem: FC<ActionBarItemProps> = (props) => {
  const { icon, title, onClick } = props;
  return (
    <Container onClick={onClick}>
      <IconProvider icon={icon.iconName} color={icon.color || "second_text"} />
      <TextProvider
        options={{
          textType: {
            regular: "regular14|16",
          },
        }}
      >
        {title}
      </TextProvider>
    </Container>
  );
};

export default ActionBarItem;
