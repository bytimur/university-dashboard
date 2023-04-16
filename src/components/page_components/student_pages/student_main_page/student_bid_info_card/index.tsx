import MainButton from "@/src/components/global/buttons/main_button";
import IconProvider from "@/src/components/global/providers/icon_provider";
import TextProvider from "@/src/components/global/providers/text_provider";
import Container from "./style";

const StudentBidInfoCard = () => {
  return (
    <Container>
      <div className="header">
        <IconProvider icon="TickCircleIcon" color="solid_green" />
        <TextProvider
          options={{
            textType: {
              bold: "bold16|18",
            },
          }}
        >
          Ваша заявка оформлена
        </TextProvider>
      </div>
      <TextProvider
        options={{
          textType: {
            regular: "regular14|16",
          },
        }}
      >
        Вам необходимо ознакомиться с договором, прежде чем подписывать его. Это
        поможет избежать недоразумений и конфликтов в будущем. Вы должны
        внимательно изучить все условия договора, убедиться, что они
        соответствуют вашим потребностям и пониманию, и задать все интересующие
        вас вопросы. Только после этого вы можете принять решение о подписании
        договора или отказе от него.
      </TextProvider>
      <MainButton
        leftIcon={{
          icon: "DocumentDownloadIcon",
          color: "main_text",
        }}
        options={{
          type: "fill",
        }}
        title="Скачать договор"
        onClick={() => "click"}
      />
    </Container>
  );
};

export default StudentBidInfoCard;
