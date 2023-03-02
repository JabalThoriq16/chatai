import React from 'react';
import {  Cell, Image } from 'react-vant';


const Latihan = () => {
  const ref = React.useRef(null);
  return (
    <>
    <div>
    <h1  align="center">Latihan</h1>
    <h3 style={{paddingLeft:"5%", backgroundColor:"aquamarine", width:"170px", borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}}>Termodinamika</h3>
      <Cell
        title="Pemecahan Masalah"
        label="Hukum 0 Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan1"}
      >
      </Cell>
      <Cell
        title="Logika dan Penalaran"
        label="Hukum 1 Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan2"}
      >
      </Cell>
      <Cell
        title="kreativitas"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan3"}
      >
      </Cell>
      <Cell
        title="Komunikasi"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan4"}
      >
      </Cell>
      <Cell
        title="Pemodelan Matematik"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan5"}
      >
      </Cell>
      <Cell
        title="Analisis"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan6"}
      >
      </Cell>
      <Cell
        title="Termodinamika lingkungan"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => window.location.href = "/latihan7"}
      >
      </Cell>
      <div ref={ref} />
      </div>
    </>
  );
};

export default Latihan;