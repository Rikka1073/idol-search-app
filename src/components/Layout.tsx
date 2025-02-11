import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white px-20 py-10">{children}</div>;
};

export default Layout;
