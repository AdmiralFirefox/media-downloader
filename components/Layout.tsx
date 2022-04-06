import { FC } from "react";
import Meta from "./Meta";
import DarkMode from "../context/DarkMode";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta />
      <DarkMode>{children}</DarkMode>
    </>
  );
};

export default Layout;
