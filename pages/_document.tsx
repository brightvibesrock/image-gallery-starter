import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Check out my travel photography!"
          />
         {/*  <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Check out my travel photography!"
          />
          <meta property="og:title" content="JD Travel Mosaic"" />
          <meta name="twitter:card" content="summary_small_image" />
          <meta name="twitter:title" content="JD Travel Mosaic" />
          <meta
            name="twitter:description"
            content="Check out my travel photography!"
          /> */}
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
