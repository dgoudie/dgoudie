import Head from 'next/head';
import { useMemo } from 'react';

export function useHeadWithTitle(title?: string) {
  const titleWithAppName = useMemo(() => {
    if (title) {
      return `${title} | Daniel Goudie`;
    } else {
      return 'Daniel Goudie';
    }
  }, [title]);
  return (
    <Head>
      <title>{titleWithAppName}</title>
    </Head>
  );
}
