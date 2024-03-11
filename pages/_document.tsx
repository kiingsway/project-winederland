import { Html, Head, Main, NextScript } from 'next/document';
import { metadata } from './_app';

export default function Document(): JSX.Element {

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={metadata.description || ''} />
      </Head>
      <body>
        <script>0</script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}