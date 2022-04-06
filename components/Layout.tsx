import { FC } from "react";
import Meta from "./Meta";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
