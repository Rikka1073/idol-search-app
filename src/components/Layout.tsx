import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-amber-400 px-20 py-10 h-screen">{children}</div>;
};

export default Layout;
