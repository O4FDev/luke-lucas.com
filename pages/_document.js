import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.hildey.com/Hijrnotes.ttf"
            rel="stylesheet"
          />
          <link
            href="https://cdn.hildey.com/Gilroy-SemiBold.ttf"
            rel="stylesheet"
          />
          <link
            href="https://cdn.hildey.com/Gilroy-Regular.ttf"
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