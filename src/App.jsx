import {Routes,Route} from "react-router-dom";
import Gallery from "./pages/header";
import Signup from "./pages/signinup";
import FormData from "./pages/Signup";
import Location from "./pages/Location";
import About from "./pages/About";
import Problems from "./pages/N1reading/N1reading";
import Lesson from "./pages/N1reading/Lesson";

function App(){
  
  
  return (
    
    <Routes>
      
      <Route path="/" element={<FormData/>}/>
      <Route path="/home" element={<Gallery/>}/>
      <Route path="/signinup" element={<Signup/>}/>
      <Route path="/Location" element={<Location/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Problems" element={<Problems/>}/>
      <Route path="/Lesson" element={<Lesson/>}/>
    
    </Routes>
   
  )
}
export default App;
