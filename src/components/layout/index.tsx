// create a layout component having sidenavigation and content and footer

import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import SideNav from "./side-navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <div>
          <SideNav />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
