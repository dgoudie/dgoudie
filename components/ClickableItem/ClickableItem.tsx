import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import styles from './ClickableItem.module.scss';

type BaseProps = {
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  imgSrc: string;
};

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { as: 'a' };

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { as: 'button' };

export default function ClickableItem({
  primaryText,
  secondaryText,
  tertiaryText,
  imgSrc,
  as,
  className,
  ...props
}: BaseProps & (AnchorProps | ButtonProps)) {
  const body = (
    <>
      <div className={styles.image}>
        <Image alt={primaryText} src={imgSrc} fill={true} sizes='100px' />
      </div>
      <div className={styles.nameAndTitle}>
        <h2 className='standout'>{primaryText}</h2>
        <h3 className='standout'>{secondaryText}</h3>
        <h3 className='standout'>{tertiaryText}</h3>
      </div>
      <i className={classNames('fa-solid fa-arrow-right', styles.arrow)}></i>
    </>
  );
  if (as === 'a') {
    return (
      //@ts-ignore
      <a className={classNames(className, styles.root)} {...props}>
        {body}
      </a>
    );
  } else if (as === 'button') {
    return (
      //@ts-ignore
      <button className={classNames(className, styles.root)} {...props}>
        {body}
      </button>
    );
  }
  return null;
}
