import { useCallback, useRef } from 'react';

import Education from '../components/Education/Education';
import HomePageSlide from '../components/HomePageSlide/HomePageSlide';
import Introduction from '../components/Introduction/Introduction';
import { NextPageWithLayout } from './_app';
import Skillset from '../components/Skillset/Skillset';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import styles from './index.module.scss';
import { useHeadWithTitle } from '../utils/use-head-with-title';

const slides = [
  { name: 'Introduction', content: <Introduction /> },
  { name: 'Education', content: <Education /> },
  { name: 'Work Experience', content: <WorkExperience /> },
  { name: 'Skillset', content: <Skillset /> },
];

const Landing: NextPageWithLayout = () => {
  const head = useHeadWithTitle();
  const slidesDivRef = useRef<HTMLDivElement>(null);

  const slideSelected = useCallback((slide: string) => {
    slidesDivRef.current
      ?.querySelector(`[data-slide="${slide}"]`)
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const slidesMapped = slides.map(({ name, content }, index) => (
    <HomePageSlide
      slide={name}
      key={name}
      slideSelected={slideSelected}
      previousSlide={slides[index - 1]?.name}
      nextSlide={slides[index + 1]?.name}
    >
      {content}
    </HomePageSlide>
  ));

  return (
    <>
      {head}
      <div className={styles.root}>
        <div className={styles.slides} ref={slidesDivRef}>
          {slidesMapped}
        </div>
      </div>
    </>
  );
};

Landing.getLayout = (page) => <>{page}</>;

export default Landing;
