import App, {AppContext, AppProps, AppInitialProps} from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyles";
import Footer from "../components/Footer"
import {wrapper} from "../store";

const app = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default wrapper.withRedux(app);