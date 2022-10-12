import React, { useContext } from "react";
import Cards from "../Card/Cards";
import { quizContext } from "../Root/Root";

const Home = () => {
  const topics = useContext(quizContext);
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80")`,
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-70"></div>
        <div className=" text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-bold">
              Snippets of Code and Quiz Collections
            </h1>
            <p className="mb-5">
              Explore individual language collections or browse through
              collections about specific topics and programming concepts.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 mb-20 w-3/4 mx-auto">
        {topics.map((topic) => (
          <Cards key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default Home;
