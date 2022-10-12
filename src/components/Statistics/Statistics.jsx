import React, { useContext, useState } from "react";
import { quizContext } from "../Root/Root";


const Statistics = () => {
  const topics = useContext(quizContext);

  

  return (
    <div>
      <h1>this is chart</h1>
    </div>
  );
};

export default Statistics;
