import React from "react";
import Container from "./style";
import { LoaderProps } from "./loader";
import IconProvider from "../providers/icon_provider";

const Loader = (props: LoaderProps) => {
  const { size = 24, color = "main_text" } = props;

  return (
    <Container {...props}>
      <IconProvider
        icon="LoaderIcon"
        width={size}
        height={size}
        color={color}
      />
    </Container>
  );
};

export default Loader;
