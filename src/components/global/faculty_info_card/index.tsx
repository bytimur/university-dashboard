import { FC } from "react";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import { FacultyInfoCardProps } from "./faculty-info-card";
import Container from "./style";

const FacultyInfoCard: FC<FacultyInfoCardProps> = (props) => {
  const { header } = props;
  return (
    <Container>
      <div className="faculty-info-card-header">
        <button onClick={header.linkButton.onClick} className="link-button">
          <TextProvider
            options={{
              textType: {
                medium: "medium18|24",
              },
            }}
          >
            {header.linkButton.title}
          </TextProvider>
          <IconProvider icon="ExportIcon" color="static_primary_solid" />
        </button>
        <button className="close-button">
          <IconProvider icon="VuesaxCloseIcon" color="second_text" />
        </button>
      </div>
    </Container>
  );
};

export default FacultyInfoCard;
