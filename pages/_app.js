import '../styles/globals.css';
import { StateContext } from '../Contextlogic/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster/>
      <Component {...pageProps} />
    </StateContext>
  )
 
}

export default MyApp
