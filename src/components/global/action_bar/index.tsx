import { FC, useEffect, useRef } from "react";
import { ActionBarProps } from "./action-bar";
import ActionBarItem from "./action_bar_item";
import Container from "./style";

const ActionBar: FC<ActionBarProps> = (props) => {
  const { actionGroupOne, actionGroupTwo, close } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Container ref={ref}>
      <div className="action-group">
        {actionGroupOne.map((item) => (
          <ActionBarItem
            key={item.id}
            onClick={item.onClick}
            icon={{
              iconName: item.icon.iconName,
              color: item.icon.color,
            }}
            title={item.title}
          />
        ))}
      </div>
      <div className="action-group">
        {actionGroupTwo.map((item) => (
          <ActionBarItem
            key={item.id}
            onClick={item.onClick}
            icon={{
              iconName: item.icon.iconName,
              color: item.icon.color,
            }}
            title={item.title}
          />
        ))}
      </div>
    </Container>
  );
};

export default ActionBar;
