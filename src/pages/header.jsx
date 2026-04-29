import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import IconAvatars from './avataricon';
import './index.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { createContext } from "react";
import Userdata from "./userdata.jsx";
import Datachart from './chart.jsx';
import App from '../App.jsx';
import { ThemeContext } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Problems from './N1reading/N1reading.jsx';
import Lesson from './N1reading/Lesson.jsx'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TranslateIcon from '@mui/icons-material/Translate';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HearingIcon from '@mui/icons-material/Hearing';
import LaunchIcon from '@mui/icons-material/Launch';
import Grammer from "./N1reading/N1grammer.jsx"
// const downloadFile=()=>{
// const link=document.createElement("a");
// link.href="c:/Users/User/Downloads/[studyjapanese.net]_Shin_Kanzen_Master_N1-Dokkai.pdf";
// link.download="c:/Users/User/Downloads/[studyjapanese.net]_Shin_Kanzen_Master_N1-Dokkai.pdf";
// link.click();
// }
const AppContext=createContext();
 function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2} id="profilephoto">
      <Avatar sx={{bgcolor:deepPurple[500]}}>AT</Avatar>
      
    </Stack>
  );
}

const Client={
  name:'Aung Thura',
  imgUrl:'https://cdn-icons-png.flaticon.com/512/9203/9203764.png',
  imagesize:90,
  age:27,
  time:new Date().getHours(),
};
// chart.js//

 

// chart.js//
   
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
            <AccessTimeOutlinedIcon fontSize='15px' paddingLeft='12px'/> 
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
}


// location //
function Location(){
 

const [locate,setLocate]=useState(null);
const [address,setAddress]=useState("");

useEffect(

      ()=>{
        navigator.geolocation.getCurrentPosition(async (position)=>{
          const lati=position.coords.latitude;
          const long=position.coords.longitude;
          setLocate({lati,long});
          
          const res= await fetch(
  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lati}&lon=${long}`
 )
         
          const data=await res.json()
          const addressString=`${data.address.city|| ""} ${data.address.town || ""} ${data.address.country||""}`
          setAddress(addressString);
        });
      },[]);

        return (
          <div>
           
            {
              locate?(
                <div>
                  
                  <p> <LocationPinIcon fontSize='small'/>{address}</p>
                  </div>
              ):(
                <p>
                  現在ロケーションを探しております。。。。
                </p>
              )
            }
            
          
          </div>
        )
      }
// location//
// doui//


//
function Profilealpha(){
    return(
      <div className="status">
        <SortByAlphaIcon style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        
        {/* <img src="https://th.bing.com/th/id/OIP.mCWIk-iM6bdjMFlObjkdPwHaD4?w=278&h=180&c=7&r=0&o=7&pid=1.7&rm=3" className='imgs' /> */}
        <h2>N1 語彙</h2>
        <p className="content">Vocabulary သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button type='submit' className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        </div>
    )

}
function Profilest(){
  
    return(
      <div className="status">
        <TranslateIcon style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        <h2>N1 漢字</h2>
        <p className="content">ခန်းဂျိ သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button type='submit' className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        
        </div>
        
    )
}
function Profilend(){
    return(
      <div className="status">
        <LiveHelpIcon style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        <h2>N1 文法</h2>
        <p className="content">Grammer သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button type='submit' className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        </div>
    );
}
function Profile(){
  const navigate=useNavigate()
    return(
      <div className="status">
        <AutoStoriesIcon style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        <h2>N1 読解</h2>
        <p className="content">ဖတ်စာ သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button onClick={()=>navigate('/Problems')} className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        </div>
    );
}
function Profilend1(){
  const navigate=useNavigate()
    return(
      <div className="status">
        <HearingIcon  style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        <h2>N1 聴解</h2>
        <p className="content">Listening သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button onClick={()=>navigate('/Lesson')} className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        </div>
    );
}
function Profilendn(){
  const navigate=useNavigate()
    return(
      <div className="status">
        <LaunchIcon  style={{fontSize:"50px",color:"white",backgroundColor:" #2585eb",borderRadius:"10px",width:"100px",marginTop:"10px"}}/>
        <h2>N1 Exam Practice</h2>
        <p className="content">Listening သင်ခန်းစာများအား လေ့လာရန် learn ခလုတ်အားနှိပ်၍မိမိစိတ်ကြိုက်လေ့လာနိုင်ပါသည်</p>
        <button onClick={()=>navigate('/Lesson')} className='Learn'>Learn</button>
        {/* <UpdateTime/> */}
        </div>
    );
}
 export default function Gallery(){

   
    const navigate=useNavigate();
    return(
        
        <div id='navigation'>
            <ul>
                <li>
                     <a href="#">ホーム</a>  
                </li>
                <li onClick={()=>navigate('/About')}>
                  アバウト
                     </li>
                <li>
                     <a href="#">プロジェクト</a>
                </li>
                <li>
                    <a href="#">コンテック</a>
                </li>
                <li>
                 <button className='signup'>ログアウト</button>
                   
                </li>
               
                   <div id="m-p">
        <LetterAvatars/>
        
            <h2 id="username">{Client.name}</h2>
            
            <div>
              <Location/>
              
                {/* <UpdateTime/> */}
              
              
              
            </div>
            
            </div>
                  
              
            </ul>
            {/* <div id="m-p">
        <img src={Client.imgUrl} id='profilephoto'/>
            <h2>{Client.name}</h2>
            <p>{TheDate}</p>
            </div> */}
        <div id='paragraph'>
        <h2 className='welcome'>ウェブサイトへようこそ</h2>
        <h2>試験情報</h2>
        <p>合否は、項目応答理論（Item Response Theory）に基づいて算出されたスケールスコアによって決定されます。これにより、異なる年度や難易度の試験であっても、同等の実力であれば同じスコアが得られるようになっています。

素点（raw score）は合否判定には直接使用されず、また基本的に公表されません。ただし、「参考情報」として成績通知書において、おおよその形で示されます。これは、受験者の素点が67％以上、34％〜66％、または34％未満のいずれに該当するかを示すものです。
この参考情報は、N4およびN5では語彙・文法・読解について、N1・N2・N3では語彙および文法（読解を除く）について提供されます。

2010年以降、合格するためには、総合得点で合格基準を満たすとともに、各セクションごとにも基準点をクリアする必要があります。総合合格点はレベルによって異なり、N1では180点中100点（55.55％）、N5では180点中80点（44.44％）となっています。
また、各セクションにおいても最低31.67％以上の得点が必要であり、特定のセクションで高得点を取っても、他のセクションで極端に低得点であれば合格できない仕組みになっています。
<br></br>
အောင်မြင်/မအောင်မြင်ကို Item Response Theory (IRT) အပေါ်အခြေခံပြီး တွက်ချက်ထားသော Scale Score ဖြင့် ဆုံးဖြတ်ပါသည်။
ဒီစနစ်ကြောင့် နှစ်အလိုက် မေးခွန်းခက်ခဲမှုကွာခြားမှုရှိသော်လည်း၊ တူညီသောအရည်အချင်းရှိပါက တူညီသော စကောကို ရရှိနိုင်ပါသည်။

Raw Score (မူလရမှတ်) ကို တိုက်ရိုက် အောင်/မအောင် ဆုံးဖြတ်ရာတွင် အသုံးမပြုပါ၊ ထို့ပြင် ပုံမှန်အားဖြင့် မထုတ်ပြန်ပါ။
သို့သော် “ကိုးကားရန်အချက်အလက်” အဖြစ် ရလဒ်စာရွက်တွင် ခန့်မှန်းပုံစံဖြင့် ပြသပါသည်။

ဤအချက်အလက်သည် အောက်ပါအတိုင်း သတ်မှတ်ပေးပါသည်—

67% အထက်
34% မှ 66% အတွင်း
34% အောက်
</p>
          </div>
         <div id="btn">
           <button onClick={()=>navigate("/signinup")}>詳しく</button>
          <button onClick={()=>navigate("/Signup")} id="signup">アカウント作成</button>
         <button  onClick={()=>navigate("/Location")}> <LocationPinIcon fontSize='small'/>現在ロケーション</button>
          </div>
        <div className="wildlifes">
        <Profile />
        <Profilealpha />
        <Profilest/>
        <Profilend/>
        <Profilend1/>
        <Profilendn/>
        </div>
        {/* <div className="wildlifes">
        <Profile />
        <Profilealpha />
        <Profilest/>
        <Profilend/>
       
        </div> */}
        <div className="chartdata">
         <Userdata/>
        <Datachart/>
      
        </div>
        <Grammer/>
        </div>
    )
}

