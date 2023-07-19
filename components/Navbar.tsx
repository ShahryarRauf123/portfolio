import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { GiButterfly } from 'react-icons/gi'
import { PiGithubLogoBold } from 'react-icons/pi'
import {PiInstagramLogoBold} from 'react-icons/pi'
import {PiYoutubeLogoBold} from 'react-icons/pi'
import {PiFacebookLogoBold} from 'react-icons/pi'
import {TfiLinkedin} from 'react-icons/tfi'

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    setShowMenu (false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
      
    })
    
    function chacha (e:any) {
      if (e.target.contains(ref.current)){
        setShowMenu(false);
      }
    }

  }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-2-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <div></div>
        <div className='hidden mdl:inline-flex item-center gap-7'>
          <ul className="flex text-[15] gap-10">
            <Link href="#home"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link href="#about"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}>
                About
              </motion.li>
            </Link>
            <Link href="#experience"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}>
                Experience
              </motion.li>
            </Link>
            <Link href="#project"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}>
                Project
              </motion.li>
            </Link>
            <Link href="#contact"
              className="flex items-center gap-1 font-medium text-textDark
            hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}>
                Contact
              </motion.li>
            </Link>
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
              Resume!
            </motion.button>
          </ul>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">
          </span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-4 transition-all ease-in-out duration-300">
          </span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300">
          </span>

        </div>
        {
          showMenu && (
            <div 
            ref={(node) => (ref.current = node)}
          
            
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
              >
                <div
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"><GiButterfly /></div>
                <div>
                  <ul className="flex flex-col text-base gap-7">
                    <Link className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href="#home"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1, ease: "easeIn"}}>
                        Home

                      </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href="#about"
                      onClick={handleScroll}
                    >
                      <motion.li
                      initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2, ease: "easeIn"}}>
                        About

                      </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href="#experience"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.3, ease: "easeIn"}}>
                        Experience

                      </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href="#project"
                      onClick={handleScroll}
                    >
                      <motion.li
                       initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2, delay: 0.4, ease: "easeIn"}}>
                        Projects

                      </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href="#contact"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.5, ease: "easeIn"}}>
                        Contact

                      </motion.li>
                    </Link>
                    
                  </ul>
                </div>
                <div className="gap-3 pt-10 flex flex-row">
                  <motion.a
                  initial={{y:20, opacity: 0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:1, ease:"easeIn"}}
                  href="https://github.com/"
                  target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translation-all duration-300">
                      <PiGithubLogoBold/>
                      </span>                    
                  </motion.a>

                  <motion.a
                  initial={{y:20, opacity: 0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:1.1, ease:"easeIn"}}
                  href="https://instagram.com/"
                  target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translation-all duration-300">
                      <PiInstagramLogoBold/>
                      </span>                    
                  </motion.a>

                  <motion.a
                  initial={{y:20, opacity: 0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:1.2, ease:"easeIn"}}
                  href="https://youtube.com/"
                  target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translation-all duration-300">
                      <PiYoutubeLogoBold/>
                      </span>                    
                  </motion.a>

                  <motion.a
                  initial={{y:20, opacity: 0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:1.3, ease:"easeIn"}}
                  href="https://facebook.com/"
                  target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translation-all duration-300">
                      <PiFacebookLogoBold/>
                      </span>                    
                  </motion.a>

                  <motion.a
                  initial={{y:20, opacity: 0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:1.4, ease:"easeIn"}}
                  href="https://linkedin.com/"
                  target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translation-all duration-300">
                      <TfiLinkedin/>
                      </span>                    
                  </motion.a>

                </div>
                <motion.a
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1.6, duration:0.5}}
                className="p-5"
                href="mailto:mshahryarrauf@gmail.com">mshahryarrauf@gmail.com</motion.a>


              </motion.div>

            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar