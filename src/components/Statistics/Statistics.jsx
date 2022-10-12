import React, { useContext } from "react";
import Chart from "../Chart/Chart";
import { quizContext } from "../Root/Root";

const Statistics = () => {
    const topics = useContext(quizContext);
  return (
    <div>
        <h1>This a chart</h1>
      {
        topics.map(topic=><Chart key={topic.id} topic={topic}/>)
      }
    </div>
  );
};

export default Statistics;
