import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,RadialLinearScale } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, ArcElement, Tooltip, Legend);

export const goaldata = {
  labels: ['Java-script', 'Java', 'React', 'Spring', 'AILearning'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 20, 18, 18],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1
    },
  ],
};
export const presentdata = {
  labels: ['Java-script', 'Java', 'React', 'Spring', 'AILearning'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 12, 10, 15, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};
const Ability = () => {

  return (
    <div>
      <h1>현재 능력치 그래프</h1>
      <br /><br />
      <div>
      <PolarArea data={presentdata} style={{ position: "relative", height: "500px" }} />
      </div>
      <br /><br /><br />

      <hr />
      <h1>목표 능력치 그래프</h1>
      <br /><br />
      <div>
      <Pie data={goaldata} style={{ position: "relative", height: "500px" }} />
        
      </div>
    </div>
  );
}

export default Ability;
