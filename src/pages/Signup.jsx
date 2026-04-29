import {useEffect, useRef,useState} from "react";
import {Link, Route} from "react-router-dom";
import './about.css';
import { useNavigate } from "react-router-dom";
import App from "../App.jsx";

fetch("https://api.ipify.org?format=json")
.then(res=>res.json)
.then(data=>console.log(data.ip))
function Icon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" >
      <path
       d="M19 12H5M11 5l-7 7 7 7"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

    
export default function FormData(){
  const navigate=useNavigate();
    const inputRef1=useRef();
    const inputRef2=useRef();
    const inputRef3=useRef();
    const inputRef4=useRef();

    const [data,setData]=useState([]);
    const UserData= async ()=>{
        const firstname=inputRef1.current.value;
        const lastname=inputRef2.current.value;
        const passwordcre=inputRef3.current.value;
        const passwordcom=inputRef4.current.value;

        if(passwordcre!=passwordcom){
          alert("Password do not match!please try again");
          return;
        }
        setData([ firstname,lastname,passwordcre,passwordcom,]);
       
  
        
      await fetch ("http://localhost:5000/Signup",{
        method:"Post",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({passwordcom}),
       
      });
         alert(`Success  \u{1F44D}`);
          navigate("/home")
          
      
    };
  
    useEffect(()=>{
      if(data.length>0){
          localStorage.setItem('userdata',JSON.stringify(data)|| [])
      }
    },[data])
    // useEffect(()=>{
      
    // const user=JSON.parse(localStorage.getItem('userdata'))
    // if (user){
    //   navigate("/home")
    // }
    // },[navigate]);
    // useEffect(()=>{
    //   const user=JSON.parse(localStorage.getItem('userdata'))
    //   if (user){
    //     navigate("/home")
    //   }
    // },[navigate])
    return(
        
       <div className="login-box">
        <div id="iconandhome">
        <Icon  id="lefticon"/>
        <Link to="/" id="homesession">Home</Link>
        </div>
    <h2>Create Account</h2>
    <form id="myuser" onSubmit={(e)=>{
        e.preventDefault();
        UserData();
        
           
       
        e.currentTarget.reset();
    }}>
      <label>First Name</label>
      <input type="text" placeholder="Enter first name" id="f-name" ref={inputRef1} required />
      <label>Last Name</label>
      <input type="text" placeholder="Enter last name"id="l-name" ref={inputRef2}required/>
      <label>Create password</label>
      <input type="password" placeholder="Create password" id="p-cr" ref={inputRef3} required/>
      <label>Comfirm password</label>
      <input type="password" placeholder="Comfirm password" id="p-co" ref={inputRef4} required/>
      <button id="submitBtn" type="submit" >Create account</button>
    </form>
    {/* <div className="links">
      <a href="#">Forgot password?</a>
      <a href="#">Create account</a>
    </div> */}
    
  </div>
    )
}