import classNames from "./contact.module.scss";
import { motion } from "framer-motion";

const ContactPage = () => {

  return (
    <motion.div exit={{ opacity: 0 }} className={classNames.main}>
      <div className={classNames.container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={classNames.content}
        >
          <p className={classNames.onProgress}>ON PROGRESS</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
