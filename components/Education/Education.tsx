import {
  university,
  universityDescription,
  universityMinor,
  universityProgram,
} from '../../data';

import Image from 'next/image';
import LineHeader from '../LineHeader/LineHeader';
import classNames from 'classnames';
import styles from './Education.module.scss';

export default function Education() {
  return (
    <div className={styles.root}>
      <LineHeader className={styles.header}>Education</LineHeader>
      <div className={classNames(styles.university, styles.item)}>
        <div className={styles.top}>
          <div className={styles.image}>
            <Image
              alt={university}
              src='/images/uno.png'
              fill={true}
              sizes='200px'
              priority={true}
            />
          </div>
          <div className={styles.nameAndTitle}>
            <h1 className='standout'>{university}</h1>
            <h2 className='standout'>{universityProgram}</h2>
            <h2 className='standout'>{universityMinor}</h2>
          </div>
        </div>
        <p>{universityDescription}</p>
      </div>
    </div>
  );
}
