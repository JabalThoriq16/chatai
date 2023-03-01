import React from 'react';
import { ImagePreview, Cell, Image } from 'react-vant';

const images = [
  '/logo192.png',
  '/logo192.png',
  '/logo192.png',
];

export default () => {
  const ref = React.useRef(null);
  return (
    <>
    <div>
    <h1  align="center">Soal</h1>
    <h3 style={{paddingLeft:"5%", backgroundColor:"aquamarine", width:"170px", borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}}>Termodinamika</h3>
      <Cell
        title="Hukum ke-0 Termodinamika"
        icon={<Image width={44} height={44} src='/soal.png' round />}
        isLink
        onClick={() => window.location.href = "/termo0"}
      >
      </Cell>
      <Cell
        title="Hukum I Termodinamika"
        icon={<Image width={44} height={44} src='/soal.png' round />}
        isLink
        onClick={() => window.location.href = "/termo1"}
      >
      </Cell>
      <Cell
        title="Hukum II Termodinamika"
        icon={<Image width={44} height={44} src='/soal.png' round />}
        isLink
        onClick={() => window.location.href = "/termo2"}
      >
      </Cell>
      <Cell
        title="Siklus Carnot"
        icon={<Image width={44} height={44} src='/soal.png' round />}
        isLink
        onClick={() => window.location.href = "/carnot"}
      >
      </Cell>
      <Cell
        title="Ujian Termodinamika"
        icon={<Image width={44} height={44} src='/soal.png' round />}
        isLink
        onClick={() => window.location.href = "/ujian"}
      >
      </Cell>
      <div ref={ref} />
      </div>
    </>
  );
};