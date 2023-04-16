import { FC } from "react";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import Container from "./style";
import { TabBarProps } from "./tab-bar";

const TabBar: FC<TabBarProps> = (props) => {
  const { title, icon, isActive, onClick } = props;
  return (
    <Container isActive={isActive} onClick={onClick}>
      <IconProvider
        icon={icon}
        color={isActive ? "main_text" : "second_text"}
      />
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
          color: isActive ? "main_text" : "second_text",
        }}
      >
        {title}
      </TextProvider>
    </Container>
  );
};

export default TabBar;
