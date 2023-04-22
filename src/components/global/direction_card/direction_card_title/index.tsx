import { FC } from "react";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { DirectionCardTitleProps } from "./direction-card-title";
import Container from "./style";

const DireactionCardTitle: FC<DirectionCardTitleProps> = (props) => {
  const { button, onCloseClick } = props;
  return (
    <Container>
      <button onClick={button.onClick} className="direction-button">
        <TextProvider
          options={{
            textType: {
              medium: "medium18|24",
            },
          }}
        >
          {button.title}
        </TextProvider>
        <IconProvider icon="ExportIcon" color="static_primary_solid" />
      </button>
      <button onClick={onCloseClick}>
        <IconProvider icon="VuesaxCloseIcon" color="second_text" />
      </button>
    </Container>
  );
};

export default DireactionCardTitle;
