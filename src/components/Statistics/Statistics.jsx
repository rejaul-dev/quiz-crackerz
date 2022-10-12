import React, { useContext } from "react";
import { quizContext } from "../Root/Root";

const Statistics = () => {
  const topics = useContext(quizContext);
  const topicData = topics.map(topic=>topic)
  
   
//  console.log(topics);
  return (
    <div className="bg-white p-20">
      <h1>This a chart</h1>
     
    </div>
  );
};

export default Statistics;
