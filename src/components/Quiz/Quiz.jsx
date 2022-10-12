import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const quiz = useLoaderData();
  const quizDetails = quiz.data.questions;
  console.log(quizDetails)

  return (
    <div className="bg-primary py-10">
      <h2 className="text-center text-xl font-bold"> this is quiz</h2>
      {quizDetails.map((quizDetail) => (
        <QuizDetails key={quizDetail.id} quizDetail={quizDetail} />
      ))}
    </div>
  );
};

export default Quiz;
