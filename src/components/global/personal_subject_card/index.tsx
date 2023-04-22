import { FC } from "react";
import TextProvider from "../providers/text_provider";
import { PersonalSubjectProps } from "./personal-subject-card";
import Container from "./style";

const PersonalSubjectCard: FC<PersonalSubjectProps> = (props) => {
  const { title, description } = props;
  return (
    <Container>
      <div className="titler-wrap">
        <TextProvider
          options={{
            textType: {
              regular: "regular10|12",
            },
            color: "second_text",
          }}
        >
          {title}
        </TextProvider>
        <TextProvider
          options={{
            textType: {
              medium: "medium14|16",
            },
          }}
        >
          {description}
        </TextProvider>
      </div>
    </Container>
  );
};

export default PersonalSubjectCard;
