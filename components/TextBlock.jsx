
import styles from "../styles/TextBlock.module.css";
import Image from 'next/image'

/*
  • Translate text data into paragraphs
  • Create two states -- closed / open
  • Append 'More' to paragraph
*/

function TextBlock({ content }) {
  return (
    <div className={`${styles.textBlock} text-block`}>
      <div className={`${styles.inner} accordian-body`}>
        {content}
      </div>
    </div>
  );
}

export default TextBlock;
