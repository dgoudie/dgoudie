import { useCallback, useRef } from 'react';

import HomePageSlide from '../components/HomePageSlide/HomePageSlide';
import Introduction from '../components/Introduction/Introduction';
import { NextPageWithLayout } from './_app';
import styles from './index.module.scss';
import { useHeadWithTitle } from '../utils/use-head-with-title';

const Landing: NextPageWithLayout = () => {
  const head = useHeadWithTitle();
  const slidesDivRef = useRef<HTMLDivElement>(null);

  const slideSelected = useCallback((slide: string) => {
    slidesDivRef.current
      ?.querySelector(`[data-slide="${slide}"]`)
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      {head}
      <div className={styles.root}>
        <div className={styles.slides} ref={slidesDivRef}>
          <HomePageSlide
            slide={'Introduction'}
            nextSlide={`Skillset`}
            slideSelected={slideSelected}
          >
            <Introduction />
          </HomePageSlide>
          <HomePageSlide
            previousSlide='Introduction'
            slide={'Skillset'}
            nextSlide={``}
            slideSelected={slideSelected}
          ></HomePageSlide>
        </div>
      </div>
    </>
  );
};

Landing.getLayout = (page) => <>{page}</>;

export default Landing;
