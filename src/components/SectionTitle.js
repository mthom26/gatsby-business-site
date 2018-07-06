import React from 'react';

import styles from './SectionTitle.module.css';

const SectionTitle = ({ text }) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.line}/>
      <div><h1>{text}</h1></div>
      <div className={styles.line}/>
    </div>
  );
};

export default SectionTitle;