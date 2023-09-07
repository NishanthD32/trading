import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(){
    const data = {
        labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets:[
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'Red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
            ],
            borderColor: [
                'Red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange',
            ],
            borderWidth: 1,
          },
        ],
      }
      const options={
        
      }
    return(
        <div>
<Pie data={data} options={options} />
        </div>
    )
}