import React from "react";

const QuizDetails = ({ quizDetail }) => {
  console.log(quizDetail);
  const { id, question, correctAnswer, options } = quizDetail;
  return (
    <section>
      <div className="md:w-3/5 mx-auto p-10 bg-secondary m-10 rounded-md">
        <div className="">
          <h1 className="text-lg font-bold mb-4">{question}</h1>

          <div className="bg-primary flex p-6 rounded-md mb-4">
            <input className="mr-4" type="checkbox" name="" id="" />
            <p>{options[0]}</p>
          </div>
          

          <div className="bg-primary flex p-6 rounded-md mb-4">
            <input className="mr-4" type="checkbox" name="" id="" />
            <p>{options[1]}</p>
          </div>

          <div className="bg-primary flex p-6 rounded-md mb-4">
            <input className="mr-4" type="checkbox" name="" id="" />
            <p>{options[2]}</p>
          </div>

          <div className="bg-primary flex p-6 rounded-md mb-4">
            <input className="mr-4" type="checkbox" name="" id="" />
            <p>{options[3]}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuizDetails;
