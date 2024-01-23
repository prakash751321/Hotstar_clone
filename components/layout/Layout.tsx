"use client";
import React, { useState } from "react";
import Header from "../ui/Header";

function Layout({ children }: { children: React.ReactNode }) {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div>
      {login ? <Header /> : ""}
      {children}
    </div>
  );
}

export default Layout;
