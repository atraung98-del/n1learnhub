import { useState, useRef } from "react";
import './index.css'
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ClassNames } from "@emotion/react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip,ArcElement,Legend,PointElement);

export default function Datachart() {
  const inputRef = useRef();
  const inputRef1 = useRef();

  
  const [study, setStudy] = useState([]);


  const add = () => {
    const day = inputRef1.current.value;
    const hour=Number( inputRef.current.value);

    const newData = {
      hour,
      day,
    };

    setStudy((prev) => [...prev, newData]);
  };

  
  const data = {
    labels: study.map((item) => item.day),
    datasets: [
      {
        label: "Study Hours",
        data: study.map((item) => item.hour),
        width:["10px"],
        backgroundColor:["rgb(226,6,44)","rgb(111,78,55)","rgb(188,143,143)"," rgb(0,128,128)"," rgb(128,128,128)","rgb(226,114,91)","rgb(226,88,34)",],
        
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
 <div className="chartJss" style={{ width: "400px", height: "400px", display:"flex",flexDirection:"row",justifyContent:"space-evenly",gap:"150px"}} >
  <div>
      <h2> Study Progress</h2>
    </div>
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add();
          e.currentTarget.reset();
          
        }}
        className="form"
        
      >
        <label>Type what you learned</label>
        <input type="text" ref={inputRef1} required placeholder="What did you learning?" style={{width:"300px"}}/>
        <label>Type Hour</label>
        <input type="number" ref={inputRef} required placeholder="Hour(1,2,3...)" style={{width:"300px"}}/>
        <button type="submit" className="studyBtn"style={{backgroundColor:"rgb(11, 121, 217)",}}>Add</button>
      </form>
        </div>
        <div>
      <Bar data={data} options={options} />
      </div>
    </div>
  );
}