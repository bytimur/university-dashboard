import dayjs from "dayjs";
import { FC } from "react";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { TableListDescItemProps } from "./table-list-desc-item";

const TableListDescItem: FC<TableListDescItemProps> = (props) => {
  const { title, subTitle, date } = props;
  return (
    <Container>
      {date ? (
        <TextProvider
          options={{
            textType: {
              regular: "regular14|16",
            },
          }}
        >
          {dayjs(date).format("DD/MM/YY HH:mm")}
        </TextProvider>
      ) : null}
      {title ? (
        <TextProvider
          options={{
            textType: {
              regular: "regular14|16",
            },
          }}
        >
          {title}
        </TextProvider>
      ) : null}
      {subTitle ? (
        <TextProvider
          options={{
            textType: {
              regular: "regular12|14",
            },
            color: "second_text",
          }}
        >
          {subTitle}
        </TextProvider>
      ) : null}
    </Container>
  );
};

export default TableListDescItem;
