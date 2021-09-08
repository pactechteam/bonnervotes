
import React, { useState } from 'react';
import TextBlock from "./TextBlock";
import styles from "../styles/Candidate.module.css";
import Image from 'next/image'

function Candidate({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleTextBlock(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log('toggling');
  }

  const toggleClass = isOpen ? 'toggle-open' : '';

  return (
    <li className={`${styles.candidate} grid-item ${toggleClass}`}>
      <img src={data.imgUrl}></img>
      <div onClick={toggleTextBlock}>
        <h3>{data.name}</h3>
      </div>
      <TextBlock />
    </li>
  );
}

export default Candidate;
