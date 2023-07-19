import React from 'react'
import { PiGithubLogoBold } from 'react-icons/pi'
import {PiInstagramLogoBold} from 'react-icons/pi'
import {PiYoutubeLogoBold} from 'react-icons/pi'
import {PiFacebookLogoBold} from 'react-icons/pi'
import {TfiLinkedin} from 'react-icons/tfi'
import { delay, motion } from 'framer-motion'

const LeftSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4 " >
            <a href="https://github.com/" target='-blank'>
                <motion.span
                initial= {{x: -10, opacity: 0}}
                animate= {{x: 0, opacity: 1}}
                transition={{ duration: 0.2 ,delay: 0.5}}
                className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <PiGithubLogoBold />
                </motion.span>
            </a>
        </div>
        <div className="flex flex-col gap-4" >
            <a href="https://www.instagram.com/" target='-blank'>
                <motion.span
                initial= {{x: -10, opacity: 0}}
                animate= {{x: 0, opacity: 1}}
                transition={{ duration: 0.2 ,delay: 0.6}}
                className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <PiInstagramLogoBold />
                </motion.span>
            </a>
        </div>
        <div className="flex flex-col gap-4" >
            <a href="https://www.youtube.com/" target='-blank'>
                <motion.span
                initial= {{x: -10, opacity: 0}}
                animate= {{x: 0, opacity: 1}}
                transition={{ duration: 0.2 ,delay: 0.6}}
                className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <PiYoutubeLogoBold />
                </motion.span>
            </a>
        </div>
        <div className="flex flex-col gap-4" >
            <a href="https://www.facebook.com/" target='-blank'>
                <motion.span
                initial= {{x: -10, opacity: 0}}
                animate= {{x: 0, opacity: 1}}
                transition={{ duration: 0.2 ,delay: 0.7}}
                className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <PiFacebookLogoBold />
                </motion.span>
            </a>
        </div>
        <div className="flex flex-col gap-4" >
            <a href="https://www.linkedin.com/" target='-blank'>
                <motion.span
                initial= {{x: -10, opacity: 0}}
                animate= {{x: 0, opacity: 1}}
                transition={{ duration: 0.2 ,delay: 0.8}}
                className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                 hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <TfiLinkedin />
                </motion.span>
            </a>
        </div>
        <motion.div
        initial= {{y: 100, opacity: 0}}
        animate= {{y: 0, opacity: 1}}
        transition={{ duration: 0.75 ,delay: 0.5}}
        className="w-[2px] h-32 bg-textDark">

        </motion.div>
        </div>
    )
}

export default LeftSide