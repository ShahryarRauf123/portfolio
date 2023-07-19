import React from 'react'
import { motion } from 'framer-motion'
import { GiDragonSpiral } from 'react-icons/gi'

const BAA = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    ><h3>
        Architectural Visualizer <span className="text-textGreen">@BAA Freelance</span>
      </h3>
      <p>Feb 2020 - Current Date</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           For the past 3 years, I have worked as a Freelance Architectural Visualizer, with BAA. 
          </p>
        </li>
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           My best project there includes, Fort Continental Murree, Audit House, Lahore, and Sparco Tower, Islamabad.
          </p>
        </li>
       
      </ul>
    </motion.div>
  )
}

export default BAA