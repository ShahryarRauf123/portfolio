import React from 'react'
import { motion } from 'framer-motion'


const Middle = () => {
    return (
        <div>
            <section id='home'
                className="max-w-containerContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
            >
                <motion.h3
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className="text-lg font-titleFont tracking-wide text-textGreen">Hi, my name is</motion.h3>
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1 }}
                    className="text-3xl lgl:text-4xl font-titleFont font-semibold flex flex-col"

                >Muhammad Shahryar Rauf 
                    <motion.span

                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 1.2 }}
                        className="text-textDark mt-2 lgl:mt-4"> I design Interior and Exteriors, do Archviz and Web Development
                    </motion.span>
                </motion.h1>
                <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 1.3 }}
                >
                <p>I am an Interior Designer, Architectural Visualizer and Web Developer having 4+ years of experience in the field.</p>
                <p>For Architectural Services, I have strong foundation in SketchUp, Lumion, Unreal Engine, 3ds Max, Adobe PhotoShop.</p>
                <p>For Web Development, I have a strong understanding of HTML, CSS, JavaScript, Bootstrap, React JS, Next JS.</p>
                </motion.div>
                <motion.button 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.15, delay: 1.4 }}
                className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
                >
                    Check out my Projects!
                </motion.button>

            </section>
        </div>
    )
}

export default Middle