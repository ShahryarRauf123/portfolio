import React from 'react'
import SectionTitle from './SectionTitle'

const Project = () => {
    return (
        <section id="project" className="max-w-[1575px] mx-auto lgl:px-20 px-24">
            <SectionTitle title={"My Projects"} />
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6 ">
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <img className="w-full h-full object-contain" src="/work1.png" alt="work1" />
                    </div>
                    <div className="w-full xl:w-1/2 h-[400px] flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide text-[20px]">Featured Project</p>
                        <h3 className="text-2xl font-bold ">Modern Farm House, Texas, USA</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            This project is located in the state of Texas, in USA. In this project,
                            I had to design the exterior, according to clients demand, design the landscape the visualize the project.
                            This project was Modeled in <span className="text-textGreen">SketchUp</span> and visualized in <span className="text-textGreen">Unreal Engine 5.2</span>
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark ">
                            <li>SketchUp 2022</li>
                            <li>Unreal Engine 5.2</li>
                            <li>Adobe PhotoShop</li>
                        </ul>

                    </div>
                </div>
                <div className="flex flex-col xl:flex-row-reverse gap-6 ">
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <img className="w-full h-full object-contain" src="/work2.jpg" alt="work1" />
                    </div>
                    <div className="w-full xl:w-1/2 h-[400px] flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide text-[20px]">Featured Project</p>
                        <h3 className="text-2xl font-bold ">Classical Mall, Islamabad, Pakistan</h3>
                        <p className="bg-[#112240]  xl:-mr-16 text-sm md:text-base p-2 md:p-6 rounded-md">
                            This project is located in the Capital of Pakistan, Islamabad. In this project,
                            I had to visualize the exterior for commercial purposes, and recommend the color themes.
                            This project was Modeled in <span className="text-textGreen">SketchUp</span> and visualized in <span className="text-textGreen">Lumion</span>
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark ">
                            <li>SketchUp 2022</li>
                            <li>Lumion</li>
                            <li>Adobe PhotoShop</li>
                        </ul>

                    </div>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 ">
                    <div className="w-full xl:w-1/2 h-auto relative group">
                        <img className="w-full h-full object-contain" src="/work3.jpg" alt="work1" />
                    </div>
                    <div className="w-full xl:w-1/2 h-[400px] flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
                        <p className="font-titleFont text-textGreen text-sm tracking-wide text-[20px]">Featured Project</p>
                        <h3 className="text-2xl font-bold ">Modern House, Hawaii</h3>
                        <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                            This project is located in the state of Hawaii. In this project,
                            I had to design the exterior, according to clients demand, design the landscape the visualize the project.
                            This project was Modeled in <span className="text-textGreen">SketchUp</span> and visualized in <span className="text-textGreen">Lumion</span>
                        </p>
                        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark ">
                            <li>SketchUp 2022</li>
                            <li>Lumion</li>
                            <li>Adobe PhotoShop</li>
                        </ul>

                    </div>
                </div>

                

            </div>
        </section>
    )
}

export default Project