import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Transition = () => {
    const location = useLocation();
    const [previousPath, setPreviousPath] = useState(location.pathname);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (location.pathname !== previousPath) {
            if (location.pathname !== '/') {
                setIsAnimating(true);
                const timer = setTimeout(() => {
                    setIsAnimating(false);
                    setPreviousPath(location.pathname);
                }, 1000); // Match this with your animation duration
                return () => clearTimeout(timer);
            } else {
                setPreviousPath(location.pathname);
            }
        }
    }, [location, previousPath]);

    return (
        <>
            <motion.div
                key="top"
                className="fixed top-0 left-0 origin-bottom w-screen h-screen bg-[#667067] z-50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isAnimating ? 1 : 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />
            <motion.div
                key="bottom"
                className="fixed top-0 left-0 origin-top w-screen h-screen bg-[#667067] z-50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isAnimating ? 1 : 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                }}
            />
            <Outlet />
        </>
    );
};

export default memo(Transition);