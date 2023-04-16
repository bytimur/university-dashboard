import { FC, useEffect, useRef, useState } from "react";
import ActionBar from "../../action_bar";
import IconProvider from "../../providers/icon_provider";
import { ActionBarButtonProps } from "./action-bar-button";
import Container from "./style";

const ActionBarButton: FC<ActionBarButtonProps> = (props) => {
  const { actionGroupOne, actionGroupTwo } = props;
  const [visible, setVisible] = useState(false);

  const onpenMenu = () => {
    setVisible(true);
  };
  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <Container>
      <button onClick={onpenMenu}>
        <IconProvider icon="MenuIcon" color="second_text" />
      </button>
      {visible ? (
        <div className="action-bar-wrap">
          <ActionBar
            actionGroupOne={actionGroupOne}
            actionGroupTwo={actionGroupTwo}
            close={closeMenu}
          />
        </div>
      ) : null}
    </Container>
  );
};

export default ActionBarButton;
