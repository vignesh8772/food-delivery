import React from 'react'
 import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative bg-[url('/header_img.png')] bg-no-repeat bg-cover h-[34vw] min-h-[300px] m-[34px_auto] rounded-2xl shadow-lg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[20px] left-[6vw] flex flex-col items-start max-w-[50%] gap-[1.5vw] text-white
                   sm:bottom-[8%] sm:left-[5%] sm:max-w-[80%]
                   xs:static xs:relative xs:items-center xs:text-center xs:gap-4 xs:p-6 "
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-md"
        >
          Order your favourite food here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-sm"
        >
          Choose from a diverse menu featuring a delectable array of dishes crafted
          with the finest ingredients and culinary expertise. Our mission is to
          satisfy your cravings and elevate your dining experience, one delicious
          meal at a time.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-md transition"
        >
          View Menu
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Header