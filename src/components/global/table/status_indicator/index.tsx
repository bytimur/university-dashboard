import { FC } from "react";
import TextProvider from "../../providers/text_provider";
import { StatusIndicatorProps } from "./status-indicator";
import Container from "./style";

const StatusIndicator: FC<StatusIndicatorProps> = (props) => {
  const { title, type } = props;
  return (
    <Container {...props}>
      <div className="badge" />
      <TextProvider
        options={{
          textType: {
            regular: "regular14|16",
          },
        }}
      >
        {title}
      </TextProvider>
    </Container>
  );
};

export default StatusIndicator;
