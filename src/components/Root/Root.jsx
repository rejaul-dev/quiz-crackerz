import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export const quizContext = createContext({});

const Root = () => {
    const topics = useLoaderData()
  return (
    <quizContext.Provider value={topics.data}>
      <Navbar />
      <Outlet />
      <Footer />
    </quizContext.Provider>
  );
};

export default Root;
