import React from 'react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";


export default function Piechart(props){
    const data01 = [
        { name: "positive %", value: props.positive},
        { name: "negative %", value: props.negative},
        { name: "neutral %", value: props.neutral },
      ];
  return (
    <div className='mainpiechart'>
        <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      
      <Tooltip />
    </PieChart>
    </div>
    
  );
}

