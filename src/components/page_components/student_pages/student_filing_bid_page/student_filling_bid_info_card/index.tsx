import TextProvider from "@/src/components/global/providers/text_provider";
import TableListDescItem from "@/src/components/global/table/table_list_desc_item";
import { FC } from "react";
import { StudentFillingBidInfoCardProps } from "./student-filling-bid-info-card";
import Container from "./style";

const StudentFillingBidInfoCard: FC<StudentFillingBidInfoCardProps> = (
  props
) => {
  const { title, bidInfo } = props;
  return (
    <Container>
      <TextProvider
        options={{
          textType: {
            bold: "bold16|18",
          },
        }}
      >
        {title}
      </TextProvider>
      <div className="filling_bid_card_wrap">
        {bidInfo.map((item) => (
          <div className="info-card-item-wrap" key={item.id}>
            <TextProvider
              options={{
                textType: {
                  regular: "regular12|14",
                },
                color: "second_text",
              }}
            >
              {item.title}
            </TextProvider>
            <TextProvider
              options={{
                textType: {
                  medium: "medium16|18",
                },
                color: "main_text",
              }}
            >
              {item.subTitle}
            </TextProvider>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StudentFillingBidInfoCard;
