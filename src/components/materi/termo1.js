import React from 'react';
import { Image } from 'react-vant';
import './book.css';

const imageList = [
  '/materi/termo1/2.png',
  '/materi/termo1/3.png',
  '/materi/termo1/4.png',
  '/materi/termo1/5.png',
  '/materi/termo1/6.png',
  '/materi/termo1/7.png',
  '/materi/termo1/8.png',
  '/materi/termo1/9.png',
  '/materi/termo1/10.png',
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