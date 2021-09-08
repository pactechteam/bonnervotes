
import React, { useState } from 'react';
import TextBlock from "./TextBlock";
import styles from "../styles/Candidate.module.scss";
import Image from 'next/image'

function Candidate({ data, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleTextBlock(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log('toggling');
  }

  const toggleClass = isOpen ? 'toggle-open' : '';

  return (
    <li className={`${styles.candidate} grid-item accordian ${toggleClass}`}>
      <img src={data.imgUrl}></img>
      <a className={'accordian-header'} onClick={toggleTextBlock}>
        <h3>{data.name}</h3>
      </a>
      <TextBlock content={ children }/>

      <style jsx>{`
        .accordian-header {
          display: block;
          cursor: pointer;
         }
        .accordian-header:hover h3 {
          text-decoration: underline;
        }
      `}</style>
    </li>
  );
}

export default Candidate;
