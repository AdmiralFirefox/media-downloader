import { FC, useState, useEffect, createContext, ChangeEvent } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  handleDarkModeChanges: (_e: ChangeEvent<HTMLInputElement>) => {},
});

const DarkMode: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  // Save Darkmode Changes
  useEffect(() => {
    const json = localStorage.getItem("darkMode") as string;
    const saveDarkMode = JSON.parse(json);

    if (saveDarkMode) {
      setDarkMode(saveDarkMode);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(darkMode);
    localStorage.setItem("darkMode", json);
  }, [darkMode]);

  const DarkModeProps = {
    darkMode,
    handleDarkModeChanges,
  };

  return (
    <DarkModeContext.Provider value={DarkModeProps}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkMode;
