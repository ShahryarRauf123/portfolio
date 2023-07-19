import React from 'react'

const Contact = () => {
    return (
        <section
            id="contact"
            className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
        >
            <p
            className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide"
            >You wanna work with me?</p>
            <h2
            className="font-titleFont text-5xl font-semibold"
            >Get in Touch</h2>
            <p
            className="max-w-[600px] text-center text-textDark"
            >
                You can contact me to visualize, design your exterior and interior, related to residential, commercial and industrial projects.
                You can also contact me for your Web Development and related projects.

            </p>
             <a href="mailto:mshahryarrauf@gmail.com"><button
           className="w-40 h-14 text-md font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
           
            >
                Say Hi!
            </button>
            </a>
        </section>
    )
}

export default Contact