import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizDetails = ({ quizDetail }) => {
  const { id, question, correctAnswer, options } = quizDetail;

  const[open, setOpen]=useState(true)
  const handleAnswer = (event) => {
    if(event=== correctAnswer){
      toast.success('correct')
    }else{
      toast.warning('wrong')
    }
  };

  return (
    <section>
      <div className="md:w-3/5 w-5/6  mx-auto p-10 bg-secondary m-10 rounded-md ">
        <h1 className="text-xl font-bold">
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h1>
        {options.map((option, idx) =>  ( 
          <label className="bg-primary p-2 rounded-md mb-10 ">
            <input
              onClick={()=>handleAnswer(option)}
              className="mt-7 mr-2 "
              type="radio"
              value=''
              name={id}
            />
            {option}
            <br />
          </label>
        ))}
      </div>
    </section>
  );
};

export default QuizDetails;
