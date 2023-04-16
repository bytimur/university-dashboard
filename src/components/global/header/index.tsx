import { FC } from "react";
import MainButton from "../buttons/main_button";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import SearchField from "../search_field";
import { HeaderProps } from "./header";
import Container from "./style";

const Header: FC<HeaderProps> = (props) => {
  const { titler, buttons, searchField, backButton } = props;
  return (
    <Container>
      <div className="titler-wrap">
        {backButton ? (
          <button onClick={backButton}>
            <IconProvider icon="VuesaxBoldArrowLeftIcon" color="second_text" />
          </button>
        ) : null}
        <div className="titler">
          <TextProvider
            options={{
              textType: {
                bold: "bold24|32",
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
              color: "second_text",
            }}
          >
            {titler.description}
          </TextProvider>
        </div>
      </div>
      {searchField ? <SearchField /> : null}
      {buttons ? (
        <div className="button-wrap">
          {buttons.leftButton ? (
            <MainButton
              leftIcon={{
                icon: buttons.leftButton?.icon,
                color: "main_text",
              }}
              title={buttons.leftButton?.title}
              onClick={buttons.leftButton?.onClick}
              options={{
                type: buttons.leftButton?.type,
              }}
            />
          ) : null}
          {buttons.rightButton ? (
            <MainButton
              leftIcon={{
                icon: buttons.rightButton.icon,
                color: "main_text",
              }}
              title={buttons.rightButton.title}
              onClick={buttons.rightButton.onClick}
              options={{
                type: buttons.rightButton.type || "outline",
              }}
            />
          ) : null}
        </div>
      ) : null}
    </Container>
  );
};

export default Header;
