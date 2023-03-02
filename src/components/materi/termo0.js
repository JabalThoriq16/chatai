import React from 'react';
import { Image } from 'react-vant';
import './book.css';

const imageList = [
  '/materi/termo1/1.png',
  '/materi/termo1/2.png',
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