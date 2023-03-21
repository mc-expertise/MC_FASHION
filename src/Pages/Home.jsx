import React from 'react';
import p1 from '../Asset/p1.jpg';
import p2 from '../Asset/p2.jpg';
import p3 from '../Asset/p3.jpg';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#182A49] to-[#0000] absolute w-[100%] max-h-[100%] bottom-0 ">
        <input type="text" name="fds" id="sdfs" placeholder="ici" />
        <div className="relative lg:mb-0 mb-12 flex flex-col gap-1">
          <motion.h1
            initial={{ scale: 0, y: 60 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            className="text-center uppercase text-[#182A49] text-[calc(5000vw/1218)] font-extrabold m-0 p-0 tracking-wider">
            Libérez votre confiance{' '}
          </motion.h1>
          <motion.h1
            initial={{ scale: 0, y: 60 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            className="text-center uppercase text-[calc(5000vw/1218)] font-extrabold m-0 p-0
           text-white text-text-stroke tracking-wider stroketext ">
            avec nos costumes élégants.
          </motion.h1>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-3 translate-y-[0px] h-[calc(100vh-457px)] overflow-y-hidden overflow-x-hidden">
          <motion.img
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            src={p1}
            alt=""
            className="w-[100%] h-[100%]"
          />
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            src={p2}
            alt=""
            className="w-[100%] h-[100%]"
          />
          <motion.img
            initial={{ scale: 0, rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            src={p3}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
