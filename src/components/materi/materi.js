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
    <h1  align="center">Materi</h1>
    <h3 style={{paddingLeft:"5%", backgroundColor:"aquamarine", width:"170px", borderTopRightRadius:"20%",borderBottomRightRadius:"20%"}}>Termodinamika</h3>
      <Cell
        title="Pendahuluan"
        label="•	Definisi termodinamika,	Tujuan pembelajaran"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Konsep Dasar Termodinamika"
        label="•	Hukum Termodinamika, variable, Sistem dan Linkungan, Diagram Thermal"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Gas Ideal"
        label="•	Definisi Gas Ideal, Persamaan Gas Ideal, Perubahan Gas Ideal"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Termokimia"
        label="•	Hukum Konservasi Energi, Entalpi, Entropi"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Siklus Termodinamika"
        label="Siklus Carnot, Siklus Brayton, Siklus Rankine, Siklus Stirling"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Aplikasi Termodinamika"
        label="•	Termodinamika dalam kehidupan sehari-hari dan industri"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <Cell
        title="Kesimpulan"
        label="RIngkasan Materi dan pentingnya Termodinamika"
        icon={<Image width={44} height={44} src='/book.png' round />}
        isLink
        onClick={() => ImagePreview.open({ images, teleport: ref.current })}
      />
      <div ref={ref} />
      </div>
    </>
  );
};