import {Outlet, useLocation} from 'react-router-dom';
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: '100vh',
    backgroundColor: 'grey',
  },
  final: {
    y: '0vh',
    transition: {
      type: "spring",
      mass: 0.4,
    },
  }
};

const AnimationLayout = () => {
  const {pathname} = useLocation();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="final"
      variants={variants}
    >
      <Outlet/>
    </motion.div>
  );
};

export default AnimationLayout;
