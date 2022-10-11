import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const QuizContext = createContext([]);

const Root = () => {
  const quizData = useLoaderData()
  return (
    <QuizContext.Provider value={[quizData]}>
      <Header />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Root;
