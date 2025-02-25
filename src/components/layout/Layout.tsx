import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "./Footer";
import ChatWidget from "../chat/ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;
