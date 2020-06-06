import App from 'next/app'
import SiteLayout from '../components/layout/SiteLayout'
import '../styles/styles.less'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <SiteLayout>
        <Component {...pageProps}></Component>
      </SiteLayout>
    )
  }
}

export default MyApp

