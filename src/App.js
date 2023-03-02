import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/about/about';
import Dashboard from './components/Dashboard';
import Book from './components/materi/materi';
import Pendahuluan from './components/materi/pendahuluan';
import MTermo0 from './components/materi/termo0';
import MTermo1 from './components/materi/termo1';
import MTermo2 from './components/materi/termo2';
import MEntropi from './components/materi/entropi';
import Teman from './components/teman/temanfisika';
import Phet from './components/simulasi/simulasi';
import Pgas from './components/simulasi/pgas';
import Mcgas from './components/simulasi/mcgas';
import Satesb from './components/simulasi/satatesb';
import Satesm from './components/simulasi/satatesm';
import Difusi from './components/simulasi/difusi';
import Thermal from './components/simulasi/thermal';
import Termo0 from './components/soal/termo0';
import Termo1 from './components/soal/termo1';
import Termo2 from './components/soal/termo2';
import Carnot from './components/soal/carnot';
import Soal from './components/soal/soal';
import Module from './components/module/module';
import Pm from './components/module/pm';
import Analisis from './components/module/analisis';
import Komunikasi from './components/module/komunikasi';
import Kreativitas from './components/module/kreatif';
import Logic from './components/module/logic';
import Matematik from './components/module/matematik';

function App() {
  
  return (
    <div className='body'>
    <Header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '50px',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }} />
    <main style={{backgroundColor:"aliceblue", paddingTop: '50px', paddingBottom: '50px', height:"90vh"}}>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/materi" element={<Book/>} />
          <Route path="/pendahuluan" element={<Pendahuluan/>} />
          <Route path="/mtermo0" element={<MTermo0/>} />
          <Route path="/mtermo1" element={<MTermo1/>} />
          <Route path="/mtermo2" element={<MTermo2/>} />
          <Route path="/mentropi" element={<MEntropi/>} />
          <Route path="/module" element={<Module/>} />         
          <Route path="/info" element={<About/>} />         
          <Route path="/latihan1" element={<Pm/>} />
          <Route path="/latihan6" element={<Analisis/>} />
          <Route path="/latihan4" element={<Komunikasi/>} />
          <Route path="/latihan3" element={<Kreativitas/>} />
          <Route path="/latihan2" element={<Logic/>} />
          <Route path="/latihan5" element={<Matematik/>} />
          <Route path="/simulasi" element={<Phet/>} />
          <Route path="/teman" element={<Teman/>} />
          <Route path="/termo0" element={<Termo0/>} />
          <Route path="/termo1" element={<Termo1/>} />
          <Route path="/termo2" element={<Termo2/>} />
          <Route path="/carnot" element={<Carnot/>} />
          <Route path="/soal" element={<Soal/>} />
          <Route path="/pgas" element={<Pgas/>} />
          <Route path="/mcgas" element={<Mcgas/>} />
          <Route path="/satesb" element={<Satesb/>} />
          <Route path="/satesm" element={<Satesm/>} />
          <Route path="/difusi" element={<Difusi/>} />
          <Route path="/thermal" element={<Thermal/>} />
        </Routes>
    </main>
    <Footer style={{ 
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50px',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }} />
    </div>
  );
}

export default App;
