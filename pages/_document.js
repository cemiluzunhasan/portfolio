import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Cemil UZUNHASAN - Bilgisayar Mühendisi</title>
          <meta name="description" content="Cemil Uzunhasan Bilgisayar Mühendisi" />
          <meta property="og:title" content="Frontend Developer" />
          <meta property="og:description" content="Frontend developer & computer science engineer for your projects" />
          <meta property="og:url" content="https://cemiluzunhasan.com" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument