import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Freelancing from './work/Freelancing'
import IGOC from './work/IGOC'
import SelalKilal from './work/SelalKilal'
import BAA from './work/BAA'

const Experience = () => {
    const [workFreelancing, setWorkFreelancing ] = useState(true);
    const [workIGOC, setWorkIGOC] = useState(false);
    const [workSelalKilal, setWorkSelalKilal] = useState(false);
    const [workBAA, setWorkBAA] = useState(false);

    const handleFreelancing = () => {

        setWorkFreelancing(true);
        setWorkIGOC(false);
        setWorkSelalKilal(false);
        setWorkBAA(false);
    }

    const handleBAA = () => {
        
        setWorkFreelancing(false);
        setWorkIGOC(false);
        setWorkSelalKilal(false);
        setWorkBAA(true);
    }

    const handleIGOC = () => {
        
        setWorkFreelancing(false);
        setWorkIGOC(true);
        setWorkSelalKilal(false);
        setWorkBAA(false);
    }

    const handleSelalKilal = () => {
        
        setWorkFreelancing(false);
        setWorkIGOC(false);
        setWorkSelalKilal(true);
        setWorkBAA(false);
    }

    return (
        <section id='experience'
            className="max-w-container mx-auto py-10 lgl:py-24 px-4"
        >
            <SectionTitle title="Where I have Worked?" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    <li 
                    onClick={handleFreelancing} 
                    className={`${
                        workFreelancing ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    }
                     border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
                        Freelancing
                    </li>
                    <li 
                    onClick={handleIGOC} 
                    className={`${
                        workIGOC ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    }
                     border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
                        Imarat Group of Companies
                    </li>
                    <li 
                    onClick={handleBAA} 
                    className={`${
                        workBAA ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    }
                    border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
                        BAA (Freelancer)
                    </li>
                    <li 
                    onClick={handleSelalKilal} 
                    className={`${
                        workSelalKilal ? "border-l-textGreen text-textGreen"
                        : "border-l-hoverColor text-textDark"
                    }
                    border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
                        Selal Kilal
                    </li>

                </ul>
                {workFreelancing && <Freelancing/>}
                {workIGOC && <IGOC/>}
                {workBAA && <BAA/>}
                {workSelalKilal && <SelalKilal/>}
            </div>

        </section>

    )
}

export default Experience