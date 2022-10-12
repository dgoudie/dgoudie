import { NextPageWithLayout } from './_app';
import styles from './index.module.scss';
import { useHeadWithTitle } from '../utils/use-head-with-title';

const Landing: NextPageWithLayout = () => {
  const head = useHeadWithTitle();
  return <div className={styles.root}>{head}</div>;
};

Landing.getLayout = (page) => <>{page}</>;

export default Landing;
