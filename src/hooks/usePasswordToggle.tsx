import { useState } from "react";
import IconProvider from "../components/global/providers/icon_provider";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = (
    <IconProvider
      icon={visible ? "EyeSlashIcon" : "EyeIcon"}
      onClick={() => setVisible(!visible)}
      color="second_text"
    />
  );

  const InputType = visible ? "text" : "password";

  return [Icon, InputType];
};

export default usePasswordToggle;
