import React from "react";
import { MainPageWrapper } from "./main-page-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Countries | Home",
};

const MainPage = () => {
  return <MainPageWrapper />;
};

export default MainPage;
