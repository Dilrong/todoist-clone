import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};
