import {useState,useEffect} from "react"
function Loading(){

return(
        <p>Getting Data..</p>
    )
};
export default function Grammer(){
    
    const [grammer,setGrammer]=useState(null);
    const [loading,setLoading]=useState(true);

   useEffect(()=>{

        async function grammerdata(){
            const req=await fetch('http://localhost:3000/data');
            const Gdata=await req.json();
            setGrammer(Gdata);
            setLoading(false);
        }
                grammerdata();

   },[])
   if(loading){
    return<div><div className="loader"></div>
    <p style={{marginLeft:"47.5%",color:"white"}}>Loading...</p></div>
    
   }

   return(
    
      <div>
            
     {
        grammer?(
        grammer && (
            <div>
            <p>
                City name-{grammer.link}
            </p>
            
            </div>
        )):(
            <Loading/>
                )
    
     }
     
    </div>
   )
   
}