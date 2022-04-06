import { FC, useContext } from "react";
import { DarkModeContext } from "../context/DarkMode";

const Switch: FC = () => {
  const { darkMode, handleDarkModeChanges } = useContext(DarkModeContext);

  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          checked={darkMode}
          onChange={handleDarkModeChanges}
        />
        <span className="theme__fill" />
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </label>
  );
};

export default Switch;
