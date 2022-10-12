import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const title = 'Daniel Goudie';
  const metaImageUrl = `https://${process.env.VERCEL_URL}/images/twitter_og.png`;
  const description = `Hey, I'm Daniel. I'm a full-stack software engineer with experience architecting, building, and maintaining systems that support a variety of different business needs at enterprise scale.`;
  return (
    <Html>
      <Head>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={title} />
        <meta property='og:url' content='https://goudie.dev' />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={metaImageUrl} />
        <meta name='twitter:text:title' content={title} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@daniel_j_goudie' />
        <meta name='twitter:description' content={description} />
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
