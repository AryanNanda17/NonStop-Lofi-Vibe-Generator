import { motion } from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Transition = () => {
   
    const [visible, setVisible] = useState(false);


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
                                   
                                }}
                            />


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
                                }}
                            />
                     
        </>
    );
};

export default memo(Transition);
