import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
  hideNav,
  hideFooter,
}: {
  children: React.ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <div>
      {!hideNav && (
        <nav>
          <Navbar />
        </nav>
      )}
      <main>{children}</main>
      {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}
