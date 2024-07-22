'use client'
import { useState } from "react"
import Head from 'next/head'

export default function HomeContent(){

    const [showAbout, setShowAbout] = useState(false)

    return(
        <>
            {
                !showAbout ?
                <div className="buttons-content flex flex-col justify-center items-center bg-slate-200" key={showAbout.toString()} aria-label="Links to various profiles">
                    <Head>
                        <title>Davanjit Sandhu Website Links</title>
                        <meta name="description" content="Links to various profiles such as my Resume, GitHub, LinkedIn, Portfolio, and Itch.io" />
                    </Head>
                    <a className="home-button rounded mb-3 text-2xl text-center" href="./Resume.pdf" aria-label="Resume">Resume</a>
                    <a className="home-button rounded mb-3 text-2xl text-center" href="https://github.com/Dav-Sandhu" aria-label="Github">GitHub</a>
                    <a className="home-button rounded mb-3 text-2xl text-center" href="https://www.linkedin.com/in/davanjit-sandhu-496200211/" aria-label="LinkedIn">LinkedIn</a>
                    <a className="home-button rounded mb-3 text-2xl text-center" href="/portfolio" aria-label="Portfolio">Portfolio</a>
                    <a className="home-button rounded mb-3 text-2xl text-center" href="https://itch.io/profile/boomnack" aria-label="Itch.io">Itch.io</a>
                    <a className="home-button rounded text-2xl text-center cursor-pointer" onClick={() => setShowAbout(true)} aria-label="About Me">About Me</a>
                </div> :
                <div className="about-content absolute top-0 bg-zinc-100 p-5 overflow-scroll" key={showAbout.toString()} aria-label="About Me Section">
                    <Head>
                        <title>About Me</title>
                        <meta name="description" content="Information regarding my skillset and work history." />
                    </Head>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={() => setShowAbout(false)} aria-label="Return to home screen button">Back</button>
                    <section aria-label="description of my experience and skillset">
                        <h2 className="text-3xl text-center">About Me</h2>
                        <p>
                            <span className="inline-block ml-4">My</span> name is Davanjit Sandhu and I am a software developer with a key 
                            interest in the field of web development. I have thus far worked at 2 previous 
                            internships at 
                            &nbsp;<a className="text-cyan-700 underline" href="https://gaotek.com/">Gao Tek</a> and 
                            &nbsp;<a className="text-cyan-700 underline" href="https://www.maxxprinting.com/">Maxx Printing</a>&nbsp;
                            and am currently working as a full-time software developer at 
                            &nbsp;<a className="text-cyan-700 underline" href="https://championproducts.com/">Champion Products</a>, 
                            where I am tasked with making websites such as a website that tracks employee activity. I can do Android 
                            development (Kotlin/Java, Android Studio, React Native), game development (Unity, Python, Lua) and much more, 
                            but have recently been focused on web development. For most of my 
                            web development history I have used either React.js or JavaScript with an occasional project in Next.js 
                            (in fact, the current version of this website is made using Next.js), Angular.js or Laravel, 
                            and so I am very familiar with the fundamentals of web design at this point. I have 
                            mastered all the basics of web development including HTML/CSS, using and hosting 
                            applications on cloud platform such as Azure, databases such as MySQL, MSSQL, and MongoDB, 
                            containerizing applications to work on any given environment with tools such as Docker, 
                            good SEO practices such as the use of a title and meta tags, and responsive web design. 
                        </p><br />
                        <p>
                            <span className="inline-block ml-4">I’m</span> able to work both solo or within a team environment, either remote or 
                            in person as I have worked in all the aforementioned positions. I am a fast learner, 
                            so if I am not familiar with some technologies within a given tech stack, I can usually 
                            learn it pretty fast on my own. I am a hard worker and will always get the job done and 
                            within the given time frame as I tend to work well when given a schedule. I can 
                            travel to any location needed since I have a driver&apos;s license and am fully 
                            vaccinated, I can also relocate if needed to be closer to my job (Note: I am a Canadian 
                            citizen so I would require a sponsorship to work in person outside of Canada). Programming for
                            me has been a hobby for the past decade and like any other of my hobbies I enjoy the process immensely
                            especially when things work just as I intended them to. I hope to be able to find new opportunities and challenge
                            myself going forward in order to continually improve myself. 
                        </p>
                    </section><br />
                    <section>
                        <h2 className="text-xl underline" aria-label="contact me section">Contact Me</h2>
                        <ul>
                            <li aria-label="email">Email: Davanjit@hotmail.com</li>
                            <li aria-label="phone number">Phone: 519-816-8130</li>
                        </ul>
                    </section>
                </div>

            } 
        </>
    )
}