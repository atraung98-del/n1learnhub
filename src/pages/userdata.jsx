import {useState,useEffect} from "react";


// City data functiion//
function Loading(){

return(
        <p>Getting Data..</p>
    )
};

// input data//


// City data function//
export default function Userdata(){
    
        const Kelvin=(+273.15);
        const [user,setUser]=useState(null);
       
        useEffect(()=>{
            
            async function fetchUsers(){
                
                
                const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Suwa&appid=5c686168177dac998fb196671fa83748`);
                const data=await res.json();
                setUser(data)

            }
            fetchUsers();
        },[]);

        return(

            <div>
            
     {
        user?(
        user && (
            <div>
            <p>
                City name-{user.name},Temperature:{Math.floor(user.main.temp-Kelvin)}°C ,
                Humidity:{user.main.humidity},
                Feel Like:{Math.floor(user.main.feels_like-Kelvin)}°C 
            </p>
            
            </div>
        )):(
            <Loading/>
                )
    
     }
     
    </div>
        )
}