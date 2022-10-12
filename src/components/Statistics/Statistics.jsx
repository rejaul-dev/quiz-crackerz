import React, { useContext } from "react";
import { quizContext } from "../Root/Root";

const Statistics = () => {
  const topics = useContext(quizContext);

  return (
    <div className="bg-white p-20">
      <h1>This a chart</h1>
      
    </div>
  );
};

export default Statistics;
