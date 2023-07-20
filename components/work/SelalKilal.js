import React from 'react'
import { motion } from 'framer-motion'
import { GiDragonSpiral } from 'react-icons/gi'

const SelalKilal = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    ><h3>
        Web Developer <span className="text-textGreen">@Selal Kilal</span>
      </h3>
      <p>6th Jan 2021 - Current Date</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           For the past 2 years, I have worked as a Web Developer, in Selal Kilal. A high valued firm, located in Islamabad. 
          </p>
        </li>
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           My best project there is creating the home website, selalkilal.com. A site dedicated to help the authorties to find the serial killers and bring them to justice.
          </p>
        </li>
        
      </ul>
    </motion.div>
  )
}

export default SelalKilal