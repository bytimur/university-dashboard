import { FC } from "react";
import MainButton from "../../buttons/main_button";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { GlobalModalProps } from "./global-modal";
import Container from "./style";

const GlobalModal: FC<GlobalModalProps> = (props) => {
  const { title, onCloseClick, children } = props;
  return (
    <Container>
      <div className="header">
        <TextProvider
          options={{
            textType: {
              bold: "bold16|18",
            },
          }}
        >
          {title}
        </TextProvider>
        <button onClick={onCloseClick}>
          <IconProvider icon="VuesaxCloseIcon" color="second_text" />
        </button>
      </div>
      {children}
    </Container>
  );
};

export default GlobalModal;
