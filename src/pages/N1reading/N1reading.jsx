import "../index.css";
import {useState,useEffect,useRef} from "react";
import About from "../About.jsx";
import Lesson from "./Lesson.jsx";
import { Zoom } from "@mui/material";

function Items({name,id,del}){
  return(
    <li className="notepara">
      {name}<br/>
      <a href="#"
        onClick={() => del(id)}
        className="deletebutton"
      >
        Delete
      </a><br/>
      <a href="#" className="editbtn">Edit</a>
    </li>
  )
}
function UpdateTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());   // update state → triggers re-render
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  const second = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      {
          time?(
            <div className='updatetime'>
              
          <p className='updatetime'>
            {/* <AccessTimeOutlinedIcon fontSize='30px'/>  */}
     {hour}:{minute}:{second}
    </p>
    </div>)
    :(
      
    <p>
     Getting Time....
    </p>
  
    )
      }
    
    </div>
  );
};

 export default function Problems(){
  
  const [data,setData]=useState(()=>{
    return JSON.parse(localStorage.getItem("posts"))|| [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(data));
  }, [data]);
const inputRef=useRef([{}]);

const Delete = (id) => {
  setData((prev) => prev.filter((item) => item.id !== id));
  alert("Are you sure to delete or I will save this localstorage!")
  localStorage.setItem("posts", JSON.stringify(data));
};


const Add=()=>{

 const Note=[inputRef.current.value];
 const newItems={
  id:Date.now(),Note
 }
 
// const remove=(id)=>{
//  setData(data.filter((items) => items.id !== id))
// }
//  const del=(id)=>{
//     setData(prev=>
//         {return prev.filter(item=>item.id!==id)});
 setData(prev=>[newItems,...prev])
 console.log(localStorage.setItem("note",JSON.stringify(Note)|| []));
 alert("You add note successfully")
}

    return(


        <div className="Pc">
          
            <div className="borderline">
              <div style={{width:"100rem"}}>
            
              
            {/* <h2>
                問題ー１
               
            </h2> */}
           <About/>
         
            <button className="completeBtn">完了</button>
             <button className="ncompleteBtn">未完成</button>
              <UpdateTime/>

              </div>
              <div className="noteform" style={{position:"static"}}>
              <form style={{width:"300px"}} onSubmit={(e)=>{
                e.preventDefault();
                Add()
              
                e.currentTarget.reset()
                

              }}>
                
                  <label>
                    Note anything <textarea className="typenote" placeholder="Type your notes" ref={inputRef} required></textarea>
                   <button type="submit"  style={{width:"100px",height:"30px",backgroundColor:"rgb(6, 209, 132)",fontSize:"12px",marginLeft:"75%"}}>Add note</button>
                  </label>
                </form>
               <p style={{fontSize:"20px",fontWeight:"lighter"}}>Your notes</p>
                <ul className="decor">
                  {data.map((item) => (
  <Items 
    key={item.id}
    id={item.id}
    name={item.Note}
    del={Delete}
  />
))}
                </ul>
               
                </div>
              
            </div>

             <div className="borderline">
            <h2>
                問題ー2
            </h2>
            <About/>
            
            <button className="completeBtn">完了</button>
             <button className="ncompleteBtn" >未完成</button>
             <UpdateTime/>
            </div>
             <div className="borderline">
            <h2>
                問題ー3
            </h2>
              <About/>
            
                <p>この問題に筆者の意見に当てはまる答えを選んでください。</p>
            
                

            
            <button className="completeBtn">完了</button>
            <button className="ncompleteBtn">未完成</button>
            <UpdateTime/>
            
            </div>
        </div>
    )
}
 
