import { FC } from "react";
import { SidebarButtonProps } from "./sidebar-button";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";

const SidebarButton: FC<SidebarButtonProps> = (props) => {
  const { icon, title, label, isActive, onClick } = props;
  return (
    <Container isActive={isActive} onClick={onClick}>
      <div className="left-side">
        <IconProvider
          icon={icon}
          color={!isActive ? "static_white50" : "static_white100"}
        />
        <TextProvider
          options={{
            textType: {
              medium: "medium16|18",
            },
            color: !isActive ? "static_white50" : "static_white100",
          }}
        >
          {title}
        </TextProvider>
      </div>
      {isActive ? (
        <div className="right-side">
          <TextProvider
            options={{
              textType: {
                regular: "regular14|16",
              },
              color: "static_white50",
            }}
          >
            {label}
          </TextProvider>
          <IconProvider icon="ArrowDownIcon" color="static_white50" />
        </div>
      ) : null}
    </Container>
  );
};

export default SidebarButton;
