import { FC } from "react";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import { SidebarNavButton } from "./sidebar-nav-button";
import Container from "./style";

const SidebarNavButton: FC<SidebarNavButton> = (props) => {
  const { photo, title, description, button } = props;
  return (
    <Container>
      <div className="nav-titler">
        <img src={photo} alt={photo} className="image" />
        <div className="content">
          <TextProvider
            options={{
              textType: {
                bold: "bold16|18",
              },
              color: "second_bg",
            }}
          >
            {title}
          </TextProvider>
          <TextProvider
            options={{
              textType: {
                regular: "regular12|14",
              },
              color: "second_text",
            }}
          >
            {description}
          </TextProvider>
        </div>
      </div>
      <button className="nav-button" onClick={button.onClick}>
        <IconProvider icon={button.icon} />
      </button>
    </Container>
  );
};

export default SidebarNavButton;
