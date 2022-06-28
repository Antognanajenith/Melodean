import '../styles/globals.css';
import { StateContext } from '../Contextlogic/StateContext';
import { Toaster } from 'react-hot-toast';
import { motion,AnimatePresence  } from 'framer-motion';

function MyApp({ Component, pageProps,router }) {
  return (
    <AnimatePresence>
    <motion.div key={router.route} initial="hidden"
      animate="visible"
      variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        
      }} 
      transition={{ ease: "easeInOut", duration: 1 }}
      exit={{ opacity: 0,backgroundColor:'black',filter:'invert()' }}>
      <StateContext>
        <Toaster/>
        <Component {...pageProps} />
      </StateContext>
    </motion.div>
    </AnimatePresence>
  ) 
}

export default MyApp
