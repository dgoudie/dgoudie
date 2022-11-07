import { description1, description2, name, title } from '../../data';

import Image from 'next/image';
import React from 'react';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image
            alt={name}
            src='/images/daniel_sq.jpg'
            fill={true}
            sizes='(max-width: 649px) 200px,
                 300px'
            priority={true}
          />
        </div>
        <div className={styles.nameAndTitle}>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  );
}
