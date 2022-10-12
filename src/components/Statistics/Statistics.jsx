import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
  const [quiz, setQuiz]= useState([])
  useEffect(()=>{
axios.get('https://openapi.programming-hero.com/api/quiz')
.then(data=>{
  const quizLoaded = data.data.data
  const quizData = quizLoaded.map(quiz=>{
    const singleQuiz ={
      quiz: quiz.name,
      total: quiz.total
    }
    return singleQuiz;
  })
  // console.log(quizData);
  setQuiz(quizData)
})

  },[])
  return (
    <div>
      <BarChart width={500} height={500} data={quiz}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey='quiz'fill="#8884d8"/>
          <YAxis/>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  );
};

export default Statistics;