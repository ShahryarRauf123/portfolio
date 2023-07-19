import React from 'react'
import { delay, motion } from 'framer-motion'


const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
            <a href="mailto:mshahryarrauf@gmail.com">
                <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>
                     mshahryarrauf@gmail.com
                </p>
            </a>
            <motion.span
            initial= {{y: 100, opacity: 0}}
            animate= {{y: 0, opacity: 1}}
            transition={{ duration: 0.75 ,delay: 0.5}}
            className="w-[2px] h-32 bg-textDark inline-flex"></motion.span>
        </div>

    )
}

export default RightSide