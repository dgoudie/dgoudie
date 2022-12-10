import {
  university,
  universityDescription,
  universityMinor,
  universityProgram,
} from '../../data';

import ClickableItem from '../ClickableItem/ClickableItem';
import Image from 'next/image';
import LineHeader from '../LineHeader/LineHeader';
import classNames from 'classnames';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <div className={styles.root}>
      <LineHeader className={styles.header}>Education</LineHeader>
      <section>
        <ClickableItem
          as='a'
          primaryText={university}
          secondaryText={universityProgram}
          tertiaryText={universityMinor}
          imgSrc='/images/uno.png'
        />
      </section>
    </div>
  );
}
