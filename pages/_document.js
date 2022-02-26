import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.hildey.com/Hijrnotes.woff"
            rel="stylesheet"
          />
          <link
            href="https://cdn.hildey.com/Gilroy-SemiBold.woff"
            rel="stylesheet"
          />
          <link
            href="https://cdn.hildey.com/Gilroy-Regular.woff"
            rel="stylesheet"
          />
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