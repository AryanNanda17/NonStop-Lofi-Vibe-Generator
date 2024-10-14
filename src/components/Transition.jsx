import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const randomDelay = (index, rows) => {
    const delay = Math.random() * 0.5;
    const rowDelay = (rows - index - 1) * 0.05;
    return delay + rowDelay;
};

const Transition = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    // if (location.pathname === '/') {
    //     return <Outlet />;
    // }

    useEffect(()=>{
        const interval =  setTimeout(() => {
            setVisible(true);
        }, 1000);
    },[])
    
    return (
        <>
            {
                visible ? <Outlet /> :

                <div className='h-screen w-screen bg-black' />
            }
            {/* Top Transition Animation */}
            {/* <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none origin-top">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="flex flex-1 w-full" key={index}>
                        {Array.from({ length: 11 }).map((_, blockIndex) => ( */}
                            <motion.div
                                className="fixed top-0 left-0 origin-bottom w-screen h-screen bg-[#667067]"
                                // key={blockIndex}
                                initial={{
                                    scaleY: 0,
                                }}
                                animate={{
                                    scaleY: 0,
                                }}
                                exit={{
                                    scaleY: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    // delay: randomDelay(blockIndex, 10),
                                }}
                            />
                        {/* ))}
                    </div>
                ))}
            </div> */}

            {/* Render the Outlet for nested routes */}

            {/* Bottom Transition Animation */}
            {/* <div className="fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none origin-bottom">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="flex flex-1 w-full" key={index}>
                        {Array.from({ length: 9 }).map((_, blockIndex) => ( */}
                            <motion.div
                                className="fixed top-0 left-0 origin-bottom w-screen h-screen bg-[#667067]"
                                // key={blockIndex}np
                                initial={{
                                    scaleY: 1,
                                }}
                                animate={{
                                    scaleY: 0,
                                }}
                                exit={{
                                    scaleY: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                    // delay: randomDelay(blockIndex, 10),
                                }}
                            />
                        {/* ))}
                    </div>
                ))}
            </div> */}
        </>
    );
};

export default memo(Transition);
