import React from 'react'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { FaLaptopCode } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
// import MEImage from '../public/images/Image.webp'

const About = () => {
    return (
        <section id="about" className="max-w-container mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>
                        Hello! My name is <span className="text-textGreen">M.Shahryar Rauf</span> and I enjoy learning new things, and working on computer.
                        My interest in computer started, when I was 10 years old. I liked playing video games, and wanted to play them as much as I can.
                        I enjoyed surfing the internet, or simply just typing on my PC was also enough for me. So I started thing about ways to spend my time on
                        my PC, as much as I can. I first gained interest in learning <span className="text-textGreen">Architectural Visualization</span>, in 2019 when I was 13.
                        After that, I did multiple projects in the field. In early 2022, I gained interest in <span>Coding and Computer Language</span>. I learned
                        <span className="text-textGreen">HTML, CSS, JavaScript</span>. After learning and practicing these skills for years, I wanted to learn more. I got addicted to the process of learning.
                        In early 2023, I started learning <span className="text-textGreen">React JS and Next JS </span>.
                    </p>
                    <p>
                        As for my working experience, In Architectural Visualization I have worked on many international projects, as well as a high-complex project, namely
                        <span className="text-textGreen"> Sparco Tower, Gulberg, Islamabad</span>, <span className="text-textGreen">Audit House, Lahore</span>, <span className="text-textGreen">Fort Continental Hotel, Murree</span>.
                        I have worked in a well esteemed firm <span>Imarat Group of Companies</span>.
                    </p>
                    <p>
                        In my experience as a Web Developer, I have created many small sites, and now I am interested in striving in the field.
                    </p>
                    <p>
                        Here are some software I use, and work on:
                    </p>
                    <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> HTML</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> CSS</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> JavaScript</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> React</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> Next JS</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><FaLaptopCode /></span> TailWind CSS</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> SketchUp 2023</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> Lumion 12.5</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> Unreal Engine 5.2</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> Adobe PhotoShop CC 2023</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> 3DS Max 2023 </li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><TbBuildingSkyscraper /></span> V-ray 2023</li>
                    </ul>
                </div>

                <div className=" lgl:w-1/3 h-80 relative group">
                    <div className="absolute  h-80 -left-6 -top-6 rounded-lg ">
                        <div className=" h-full relative z-20 flex pl-6 lgl:pl-0">
                            <img className="rounded-lg h-full object-cover" src='/meimage.png' alt='none' />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">

                            </div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-[400px] h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About