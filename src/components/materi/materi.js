import React from 'react';
import { Cell, Image } from 'react-vant';

const Materi = () => {
  return (
    <>
    <div>
    <h1  align="center">Materi</h1>
    <h3 style={{paddingLeft:"5%", backgroundColor:"aquamarine", width:"170px", borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}}>Termodinamika</h3>
      <Cell
        title="Pendahuluan"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/pendahuluan"}
      />
      <Cell
        title="Hukum 0 Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/mtermo0"}
      />
      <Cell
        title="Hukum 1 Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/mtermo1"}
      />
      <Cell
        title="Hukum 2 Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/mtermo2"}
      />
      <Cell
        title="Entropi"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/mentropi"}
      />
      </div>      
    </>
  );
};

export default Materi;