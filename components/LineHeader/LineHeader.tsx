import React from 'react';
import classNames from 'classnames';
import styles from './LineHeader.module.scss';

type Props = {
  className?: string;
};

export default function LineHeader({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <header className={classNames(className, styles.root)}>
      <div className={styles.line}></div>
      <div className={(styles.text, 'standout')}>{children}</div>
      <div className={styles.line}></div>
    </header>
  );
}
