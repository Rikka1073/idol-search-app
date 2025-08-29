import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white md:px-20 md:py-10 px-10 py-5">{children}</div>;
};

export default Layout;
