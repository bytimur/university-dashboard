import { FC } from "react";
import { FacultyListProps } from "./faculty-list";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import Container from "./style";

const FacultyList: FC<FacultyListProps> = (props) => {
  const { button, studentQuantity, directionList } = props;
  return (
    <Container>
      <div className="faculty-list-header">
        <button onClick={button.onClick} className="button">
          <TextProvider
            options={{
              textType: {
                bold: "bold24|32",
              },
            }}
          >
            {button.title}
          </TextProvider>
          <IconProvider icon="ExportIcon" color="static_primary_solid" />
        </button>
        <div className="student-quantity">
          <TextProvider
            options={{
              textType: {
                regular: "regular12|14",
              },
              color: "second_text",
            }}
          >
            {studentQuantity.title}
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                medium: "medium16|18",
              },
            }}
          >
            {studentQuantity.count}
          </TextProvider>
        </div>
        <IconProvider icon="ArrowUpIcon" color="main_text" />
      </div>
      {directionList.map((item) => (
        <div className="direction-list-wrap" key={item.id}>
          <TextProvider
            options={{
              textType: {
                medium: "medium16|18",
              },
            }}
          >
            {item.name}
          </TextProvider>
          <div className="direction-list-info-wrap">
            <div className="direction-list-info-content">
              <TextProvider
                options={{
                  textType: {
                    regular: "regular12|14",
                  },
                  color: "second_text",
                }}
              >
                {item.student.title}
              </TextProvider>
              <TextProvider
                options={{
                  textType: {
                    medium: "medium16|18",
                  },
                }}
              >
                {item.student.count}
              </TextProvider>
            </div>
            <div className="direction-list-info-content">
              <TextProvider
                options={{
                  textType: {
                    regular: "regular12|14",
                  },
                  color: "second_text",
                }}
              >
                {item.quota.title}
              </TextProvider>
              <TextProvider
                options={{
                  textType: {
                    medium: "medium16|18",
                  },
                }}
              >
                {item.quota.count}
              </TextProvider>
            </div>
            <div className="direction-list-info-content">
              <TextProvider
                options={{
                  textType: {
                    regular: "regular12|14",
                  },
                  color: "second_text",
                }}
              >
                {item.competition.title}
              </TextProvider>
              <TextProvider
                options={{
                  textType: {
                    medium: "medium16|18",
                  },
                }}
              >
                {item.competition.count}
              </TextProvider>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FacultyList;
