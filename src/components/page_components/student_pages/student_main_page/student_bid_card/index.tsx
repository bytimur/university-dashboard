import MainButton from "@/src/components/global/buttons/main_button";
import TextProvider from "@/src/components/global/providers/text_provider";
import StatusIndicator from "@/src/components/global/table/status_indicator";
import dayjs from "dayjs";
import { FC } from "react";
import { StudentBidCardProps } from "./student-bid-card";
import Container from "./style";

const StudentBidCard: FC<StudentBidCardProps> = (props) => {
  const { bidDate, bidNumber, status, bidInfo, button } = props;
  return (
    <Container>
      <div className="header">
        <div className="titler">
          <TextProvider
            options={{
              textType: {
                bold: "bold16|18",
              },
            }}
          >
            {bidNumber}
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                regular: "regular14|16",
              },
              color: "second_text",
            }}
          >
            {dayjs(bidDate).format("DD.MM.YY HH:mm")}
          </TextProvider>
        </div>
        <StatusIndicator title={status.title} type={status.type} />
      </div>
      <div className="bid-info-wrap">
        {bidInfo.map((item) => (
          <div className="bid-info-content" key={item.id}>
            <TextProvider
              options={{
                textType: {
                  regular: "regular14|16",
                },
                color: "second_text",
              }}
            >
              {item.title}
            </TextProvider>
            <TextProvider
              options={{
                textType: {
                  regular: "regular14|16",
                },
              }}
            >
              {item.description}
            </TextProvider>
          </div>
        ))}
      </div>
      <MainButton
        title={button.title}
        onClick={button.onClick}
        leftIcon={{ icon: "DirectBoxNotifIcon", color: "main_text" }}
        options={{
          type: "outline",
          width: "100%",
        }}
      />
    </Container>
  );
};

export default StudentBidCard;
