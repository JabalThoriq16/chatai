import React from 'react';
import { Image } from 'react-vant';
import './book.css';

const imageList = [
  '/materi/pendahuluan/1.png',
  '/materi/pendahuluan/2.png',
  '/materi/pendahuluan/3.png',
  '/materi/pendahuluan/4.png',
  '/materi/pendahuluan/5.png',
];

const Pendahuluan = () => {
  return (
    <>
      {imageList.map((img) => (
        <Image lazyload src={img} key={img} />
      ))}
    </>
  );
};

export default Pendahuluan;