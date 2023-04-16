import { FC } from "react";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { LitsTop } from "./lits-top";
import Container from "./style";

const LitsTop: FC<LitsTop> = ({ title }) => {
  return (
    <Container>
      <TextProvider
        options={{
          textType: {
            medium: "medium14|16",
          },
        }}
      >
        {title}
      </TextProvider>
      <IconProvider icon="ArrowDownIcon" color="second_text" />
    </Container>
  );
};

export default LitsTop;
