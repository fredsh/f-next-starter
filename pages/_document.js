import Document, { Head, Main, NextScript } from 'next/document'

import baseStyle from 'styles/css/index.scss';

export default class MyDocument extends Document {
  render() {
    // console.log('doc', this.props)
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          {/* <title>{this.props.title || 'Sunshine Project'}</title> */}
          {/* <style dangerouslySetInnerHTML={{__html: baseStyle}}/> */}
          {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/> */}

          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}