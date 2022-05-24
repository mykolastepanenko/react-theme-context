import { useState } from "react";
import { createPortal } from "react-dom";
import ReactSwitch from "react-switch";
import { useTheme } from "../../context/theme/theme.context";

const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  const [checked, setChecked] = useState(false);

  const switcherProps = {
    checked,
    onChange: () => {
      changeTheme(!checked);
      setChecked(!checked);
    },
  };

  const root = document.querySelector("#root");
  return createPortal(
    <ReactSwitch {...switcherProps} className="theme-switcher" />,
    root
  );
};

export default ThemeSwitcher;
