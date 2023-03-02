import React from 'react'
import { Card } from 'react-vant'
import "./CreditScreen.css"

const About = () => {
    const now = new Date();
    const year = now.getFullYear(); 
  return (
    <>
      <Card round style={{ marginBottom: 20 }}>
        <Card.Cover>
          
        </Card.Cover>
        <Card.Header>
          <h1>Tentang Aplikasi</h1>
        </Card.Header>
        <Card.Body>
        <div className='cardBody' style={{textAlign:"justify", fontSize:"12px", border: "2px solid highlight", padding:"10px"}}>
        <h1>My App: Teman Fisika</h1>
        <p style={{textAlign:"justify", fontSize:"20px", border: "2px solid highlight", padding:"10px"}}>Aplikasi ini dibuat untuk membantu siswa dalam meningkatkan kemampuan berfikir tingkat tinggi. </p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Pengembang : Jabal Thoriq</p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Simulator : Aplikasi Phet</p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Kecerdasan Buatan : Microsoft</p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Pembelajaran : Pendekatan Saintifik</p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Buku Sekolah : Praktis Belajar Fisika </p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Code : Javascript</p>
        <p style={{textAlign:"justify", fontSize:"20px", borderBottom:"2px solid highlight"}}>Freamwork : ReactJs</p>
        </div>
        </Card.Body>
        <Card.Footer>
            Copyright © {year} Jabal Thoriq
        </Card.Footer>
      </Card>
    </>
  )
}

export default About;
