import React from "react";
import * as AllIcons from "../../../../resources/icon_collection/index";
import Container from "./style";

export type IconProviderProps = AllIcons.IconProps & {
  icon: AllIcons.AllIconsType;
  onClick?: () => void;
};

const IconProvider = (props: IconProviderProps) => {
  const { width, height, color, icon, onClick } = props;
  return (
    <Container>
      {React.createElement(AllIcons[icon], { width, height, color })}
    </Container>
  );
};

export default IconProvider;
