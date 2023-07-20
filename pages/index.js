import Head from 'next/head'
import Navbar from '../components/Navbar'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'
import { motion } from 'framer-motion'
import Middle from '../components/Middle'
import About from '../components/About'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad Shahryar Rauf</title>
        <meta name="description" content="Portfolio of M.Shahryar Rauf" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <div
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'><LeftSide /></div>
          <div className=" h-[88vh] mx-auto p-4">
            <Middle />
            <About />
            <Experience/>
            <Project/>
            <Contact/>
          </div>
          <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"><RightSide /></div>
        </div>
      </main>
    </div>
  )
}
