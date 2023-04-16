import { FC } from "react";
import TextProvider from "../../../providers/text_provider";
import Container from "./style";
import { TableScoreProps } from "./table-score";

const TableScoreItem: FC<TableScoreProps> = (props) => {
  const { score, type } = props;
  return (
    <Container>
      <TextProvider
        options={{
          textType:
            type === "total"
              ? {
                  bold: "bold14|16",
                }
              : {
                  regular: "regular14|16",
                },
          color: type === "total" ? "main_text" : "second_text",
        }}
      >
        {score}
      </TextProvider>
    </Container>
  );
};

export default TableScoreItem;
