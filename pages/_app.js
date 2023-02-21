import "../styles/globals.css";
import { StateContext } from "../Contextlogic/StateContext";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <StateContext>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='hidden'
          animate='visible'
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          transition={{ ease: "linear", duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <Toaster />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </StateContext>
  );
}

export default MyApp;
