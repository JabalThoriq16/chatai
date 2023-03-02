import React from 'react';
import { Image } from 'react-vant';
import './book.css';

const imageList = [
  '/materi/termo2/1.png',
  '/materi/termo2/2.png',
  '/materi/termo2/3.png',
  '/materi/termo2/4.png',
  '/materi/termo2/5.png',
  '/materi/termo2/6.png',
  '/materi/termo2/7.png',
  '/materi/termo2/8.png',
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