import { Head, Html, Main, NextScript } from 'next/document';
import { description1, name } from '../data';

export default function Document() {
  const metaImageUrl = `https://${process.env.VERCEL_URL}/images/twitter_og.png`;
  return (
    <Html>
      <Head>
        <meta name='description' content={description1} />
        <meta property='og:title' content={name} />
        <meta property='og:site_name' content={name} />
        <meta property='og:url' content='https://goudie.dev' />
        <meta property='og:description' content={description1} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={metaImageUrl} />
        <meta name='twitter:text:title' content={name} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@daniel_j_goudie' />
        <meta name='twitter:description' content={description1} />
        <meta name='twitter:image' content={metaImageUrl} />
        <meta charSet='utf-8' />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
          crossOrigin='anonymous'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;700&family=Source+Sans+Pro:wght@300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id='isometric_portal'></div>
      </body>
    </Html>
  );
}
