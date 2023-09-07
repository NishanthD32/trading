import React from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function BarChart(){
    const data ={
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[
            {
                label: 'Data1',
                data: ['10','20','30','40','50','60','70'],
                borderColor: 'black',
                backgroundColor: 'green',
            },
            {
              label: 'Data2',
              data: ['9','19','29','39','49','59','69'],
              borderColor: 'black',
              backgroundColor: 'red',
          }
        ]
    }
    const options={
        
    }
    return(
  <div >
  <Bar data={data} options={options}></Bar>
  </div>
    )
}