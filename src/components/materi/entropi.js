import React from 'react';
import { Image } from 'react-vant';
import './book.css';

const imageList = [
  '/materi/termo2/9.png',
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