import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../store/store";
import { SnackbarProvider } from "notistack";
import ApplicationWrapper from '../Components/ApplicationWrapper';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ApplicationWrapper>
          <Component {...pageProps} />
        </ApplicationWrapper>
      </SnackbarProvider>
    </Provider>
  )
}

export default MyApp
