import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizDetails = ({ quizDetail }) => {
  const { id, question, correctAnswer, options } = quizDetail;

  const handleEyeButton = (id) => {
    if (id === correctAnswer) {
      toast.success(correctAnswer, { autoClose: 500 });
    }
  };

  const handleAnswer = (event) => {
    if (event === correctAnswer) {
      toast.success("Your answer is correct", { autoClose: 500 });
    } else {
      toast.warning("Your answer is wrong", { autoClose: 500 });
    }
  };

  return (
    <section>
      <div className="md:w-3/5 w-5/6  mx-auto p-10 bg-secondary m-10 rounded-md ">
        <EyeIcon
          onClick={() => handleEyeButton(correctAnswer)}
          className="h-6 w-6 text-white mb-4"
        />

        <h1 className="text-xl font-bold m-4 p-1">
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h1>
        
        {options.map((option) => (
          <div className="bg-primary m-4 p-4 rounded-md  ">
            <label className=" cursor-pointer">
            <input
              onClick={() => handleAnswer(option)}
              className="mr-2 "
              type="radio"
              value=""
              name={id}
            />
            {option}
            <br />
          </label>
          </div>
        ))}
        </div>
    </section>
  );
};

export default QuizDetails;
