import React, { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import styles from './HomePageSlide.module.scss';
import { useInView } from 'react-intersection-observer';

type Props = {
  slide: string;
  previousSlide?: string;
  nextSlide?: string;
  slideSelected: (slide: string) => void;
};

export default function HomePageSlide({
  slide,
  previousSlide,
  nextSlide,
  slideSelected,
  children,
}: React.PropsWithChildren<Props>) {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const previousButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <div className={styles.root} ref={ref} data-slide={slide}>
      {previousSlide && (
        <div className={classNames(styles.slideChange, styles.previous)}>
          <CSSTransition
            in={inView}
            nodeRef={previousButtonRef}
            timeout={300}
            classNames={styles}
          >
            <button
              ref={previousButtonRef}
              type='button'
              className={classNames(styles.slideChangeButton)}
              onClick={() => slideSelected(previousSlide)}
            >
              <i className='fa-solid fa-caret-up'></i>
              {previousSlide}
            </button>
          </CSSTransition>
        </div>
      )}
      <div className={styles.content}>{children}</div>
      {nextSlide && (
        <div className={classNames(styles.slideChange, styles.next)}>
          <CSSTransition
            in={inView}
            nodeRef={nextButtonRef}
            timeout={300}
            classNames={styles}
          >
            <button
              ref={nextButtonRef}
              type='button'
              className={classNames(styles.slideChangeButton)}
              onClick={() => slideSelected(nextSlide)}
            >
              {nextSlide}
              <i className='fa-solid fa-caret-down'></i>
            </button>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}
