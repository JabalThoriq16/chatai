import { useState } from "react";
import {link} from "react-router-dom"
import 'animate.css';
import { Overlay } from 'react-vant';

function Home() {
  const [visible, setVisible] = useState(true);
  // const [showText, setShowText] = useState(false);
  function handleClick() {
    window.location.href = 'dashboard';
  }  
  return (
    <div className="home">
      <Overlay visible={visible} onClick={handleClick}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div style={{ width: "100%", textAlign:"center", height: 120, color: '#fff', borderRadius: 4 }} >
        
        <h1 className="animate__backInDown">Selamat Datang!</h1>
    
        </div>
      </Overlay>
    </div>
  );
}

export default Home;
