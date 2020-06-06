import App from 'next/app'
import SiteLayout from '../components/layout/SiteLayout';
import { AnimatePresence } from 'framer-motion';
import '../styles/styles.less'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <SiteLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps}></Component>
        </AnimatePresence>
      </SiteLayout>
    )
  }
}

export default MyApp

