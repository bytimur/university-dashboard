import { FC } from "react";
import Container from "./style";
import { TextProviderProps } from "./text-provider";

const TextProvider: FC<TextProviderProps> = (props) => {
  const { children, options, className } = props;
  return (
    <Container className={className} {...options}>
      {children}
    </Container>
  );
};

export default TextProvider;
