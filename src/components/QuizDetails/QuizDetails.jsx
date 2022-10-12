import React from "react";

const QuizDetails = ({ quizDetail }) => {
  const { id, question, correctAnswer, options } = quizDetail;

  const handleAnswer=()=>{
    if(options===correctAnswer){
      alert('correct')
    }else{
      alert('wrong')
    }
  }

  
  return (
    <section>
      <div className="md:w-3/5 w-5/6  mx-auto p-10 bg-secondary m-10 rounded-md ">
        <h1 className="text-xl font-bold">
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h1>
        {options.map((option) => (
          <label className="bg-primary p-2 rounded-md mb-10 ">
            <input
            onClick={()=>handleAnswer()}
              className="mt-7 mr-2 "
              type="radio"
              value={correctAnswer}
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
