import React, { useContext } from "react";
import Cards from "../Card/Cards";
import { quizContext } from "../Root/Root";

const Home = () => {
const topics = useContext(quizContext)
// console.log(topics)
  return (
    <section>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-primary">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 500x360"
            alt=""
            className="w-full h-60 sm:h-96 rounded-md"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="/"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Snippets of Code and Quiz
              </a>
            </div>
            <div className="dark:text-gray-100">
              <p>Explore individual language collections or browse through collections about specific topics and programming concepts.</p>
            </div>
          </div>
        </div>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 mb-20 w-3/4 mx-auto">
     {
        topics.map(topic=><Cards key={topic.id} topic={topic}/>)
      }
     </div>
    </section>
  );
};

export default Home;
