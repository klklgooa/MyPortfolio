import React from 'react';
import index_face from '../image/index_face.png';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['업무', '협업', '성실', '체력', '노력', '열정'],
  datasets: [
    {
      label: '황인찬의 능력치',
      data: [7, 8, 10, 2, 9, 7],
      backgroundColor: 'rgba(38, 200, 4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
  ],
};
const options = {
  scale: {
    pointLabels: {
      fontSize: 500, // 레이블 글자 크기 조정
    },
  },
};

//import { useState } from "react";
//import { Link } from "react-router-dom";
//import Login from "./Login";

const index = () => {
  //const [index, setIndex] = useState(0);
  // const contentChange = () => {
  //   setIndex();
  // };

  return (
    <div class="container-fluid main-section overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="banner-left">
              <h1>꿈꾸는 개발자...</h1>
              <img class ='index_face' src={index_face} alt="keyard" />
              <h2>황인찬</h2>
              <h3 class="typing">A Dream Developer....</h3>
              <p>Hello, I'm Hwang Inchan, dreaming of becoming a developer.
                 I am currently in my third year of Gachon University 
                 and I am learning web programs.
              </p>
              {/* <div class="banner-btn">
                  <button onClick={contentChange} value={index}>
                    {Login.tab}
                  </button>
                {Login.content}
              </div> */}
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="banner-top">
            </div>
          </div>
        </div>
      </div>
      <Radar data={data} style={{ position: "relative", height: "50px" }} options={options}/>
    </div>
  );
}

export default index;


