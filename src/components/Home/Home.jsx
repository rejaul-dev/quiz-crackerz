import React, { useContext } from "react";
import { QuizContext } from "../Root/Root";

const Home = () => {
  const quizData = useContext(QuizContext)
  // console.log(quizData);
  return (
    <div>
      <section>
        <div className="bg-primary">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
            <h1 className="text-4xl font-bold">Snippet Collections and quiz</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
          </div>
        </div>
        <div></div>
      </section>
      {
        quizData.map(data=>console.log(data))
      }
    </div>
  );
};

export default Home;
