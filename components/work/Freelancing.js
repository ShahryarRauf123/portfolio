import React from 'react'
import { motion } from 'framer-motion'
import { GiDragonSpiral } from 'react-icons/gi'

const Freelancing = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    ><h3>
        Architectural Visualizer <span className="text-textGreen">@Fiverr and Upwork</span>
      </h3>
      <p>Feb 2020 - Current Date</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           For the past 3 years, I have worked as a Freelance Architectural Visualizer, on platforms such as Fiverr and Upwork. 
          </p>
        </li>
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           My best project in the platform Fiverr is the designing and visualization of a Modern Villa in Texas, USA. 
          </p>
        </li>
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           My best project in the platform of Upwork is the visualization of a Modern Hotel, and its interior.
          </p>
        </li>
      </ul>
    </motion.div>
  )
}

export default Freelancing