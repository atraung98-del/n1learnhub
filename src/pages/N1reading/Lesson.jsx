import "../index.css";
import About from "../About.jsx";
import {Box,Typography} from '@mui/material';
import {Link} from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Grammer from "./N1grammer.jsx";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Globalvalue(){
        return(
                  <Box className="back1" style={{color:"rgb(6, 209, 132)"}}
        component={Link} to="/home"
        sx={{
            display:"flex",
            gap:5,
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            width:"12px",
        }}><CheckCircleIcon style={{fontSize:"30px"}}/></Box>
        )
}
export default function Lesson(){
    
        
    return(

                <div style={{margin:"0",padding:"0",backgroundColor:"black",top:"0",left:"0",width:"100%"}}>
                    
                  <Box className="back" id="back2" style={{width:"100%",color:"white",top:"0",height:"40px"}}
        component={Link} to="/home"
        sx={{
            display:"flex",
            gap:1,
            alignItems: "center",
            textDecoration: "none",
            color: "black",
            width:"10px",
        }}
        >

             <KeyboardBackspaceIcon/>
        <Typography>Back to home</Typography>
        
        
        </Box>
        
                    <h2 className="back"style={{height:"60px",marginTop:"30px"}}>聴解問題</h2>
                    <div className="lvdo">
                        
                    <div>
            
              
                   <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">listeinig </p></div>
                    <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/cm_aqCRrl9Y?si=L94r7m7gowZpXHCt"
                    title="YouTube video"
                    allowFullScreen
                    ></iframe>
                    </div>
                    
                    <div>
                       <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">listeinig </p></div>
                     <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/IyU9lftzFd0?si=ar2PElGqgE-o1wRJ"
                    title="YouTube video"
                    allowFullScreen
                    ></iframe>
                    </div>
                    <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2010/7 JLPT N1 listening </p></div>
                           
                            <iframe
                            width="360"
                            height="215"
                            border="none"
                            src="https://www.youtube.com/embed/Fj4YrFQ9g0A?si=l9VZWMFYwZHM21hO"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2010/12 JLPT N1 listening</p></div>
                           
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/IzegVoNrEDc?si=7_WBKSGDFmKfpThR"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                     <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2011/7 JLPT N1 listening</p></div>
                            
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/tOrRO6vZR0g?si=6ccdVtVD5QwuAPVS"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2011/12 JLPT N1 listening</p></div>
                           
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/QiA_nSd_eMQ?si=WycgPnJY1ahomqHM"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                     
                     <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2012/7 JLPT N1 listening</p></div>
                            
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/GPLi_8a2sbw?si=yZr_mn69SHJklcGr"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    <div>
                         <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2012/12 JLPT N1 listening</p></div>
                            
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/7lTophiNoRg?si=VhZ9AKYLXzAvgDfV"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                     <div>
                        <div style={{display:"flex",flexDirection:"row",gap:"20px"
                   }}><Globalvalue/> <p className="ui">2013/7 JLPT N1 listening</p></div>
                            
                            <iframe
                            width="360"
                            height="215"
                            src="https://www.youtube.com/embed/1W25r2Mns9w?si=TsrRJ_m24EsJ5Pi9"
                            title="YouTube video"
                            allowFullScreen
                            ></iframe>
                    </div>
                    </div>
                    <Grammer style={{color:"white"}}/>
                </div>
    )
}