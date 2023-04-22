import { FC } from "react";
import { useTranslation } from "react-i18next";
import MainButton from "../buttons/main_button";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import { IllustrationCardProps } from "./illustration-card";
import Container from "./style";

const IllustrationCard: FC<IllustrationCardProps> = (props) => {
  const { t } = useTranslation();
  const { icon, title, description, button } = props;
  return (
    <Container>
      <IconProvider icon={icon} width={300} height={300} />
      <TextProvider
        options={{
          textType: {
            bold: "bold24|32",
          },
        }}
      >
        {title}
      </TextProvider>
      <TextProvider
        className="description"
        options={{
          textType: {
            regular: "regular16|18",
          },
        }}
      >
        {description}
      </TextProvider>
      {button ? (
        <MainButton
          onClick={button.onClick}
          title={button.title}
          leftIcon={{
            icon: button.icon,
            color: "main_text",
          }}
          options={{
            type: "fill",
          }}
        />
      ) : null}
    </Container>
  );
};

export default IllustrationCard;
