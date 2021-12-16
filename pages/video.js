import * as React from 'react';
import style from '../styles/video.module.css'
export default function video() {
  return (
    <>
    <h1 className={style.h1}>video Player </h1>
    <video className={style.video}src='/Meeting.mp4' autoPlay muted>


</video>
    </>
  );
}

