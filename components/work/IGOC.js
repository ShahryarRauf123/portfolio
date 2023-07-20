import React from 'react'
import { motion } from 'framer-motion'
import { GiDragonSpiral } from 'react-icons/gi'

const IGOC = () => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    ><h3>
        Architectural Visualizer <span className="text-textGreen">@Imarat Group of Companies</span>
      </h3>
      <p>Feb 2022 - Feb 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           I have worked at IGOC for 1 year, from 2022 to 2023. My responsibilities there included modeling their concepts and designs, and rendering them.
          </p>
        </li>
        <li className="text-base flex gap-2 text-textDark ">
          <span className="text-textGreen mt-1 ">
            <GiDragonSpiral/>
          </span>
          <p className="w-[700px]">
           I created the models of many of there projects, such as Imarat Residencies, Marioot etc
          </p>
        </li>
        
      </ul>
    </motion.div>
  )
}

export default IGOC