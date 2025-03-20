import Carousel from "./carousel"
import projects from "./projects.json"
import Head from 'next/head'
import runOption from '../runOption'
import "./portfolio.scss"

export default function Portfolio(){

    return(
        <div className="portfolio-page bg-sky-50 h-screen" aria-label="Portfolio page">
            <Head>
                <title>Davanjit Sandhu Portfolio and Work History</title>
                <meta name="description" content="Showcases recent projects and professional work history." />
            </Head>

            <section>
                <h2 className="text-4xl text-center font-extrabold text-sky-900 mb-2" aria-label="Portfolio title">Portfolio</h2>

                <div className="portfolio-buttons flex flex-row w-full justify-center">
                    <a className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 text-center rounded outline m-5" href={runOption('/')} aria-label="Home button">Home</a>
                    <a className="bg-sky-300 hover:bg-sky-400 text-sky-800 font-bold py-2 px-4 text-center rounded outline m-5" href="./Portfolio.pdf" aria-label="Download Portfolio">Download Portfolio</a>
                </div>
                
                {/*carousel that showcases all the projects*/}
                <div className="projects-section bg-blue-100 mt-5" aria-label="Carousel of recent projects">
                    <h1 className="text-2xl font-semibold text-sky-800">Recent Projects</h1>
                    <Carousel data={projects.data} />
                </div>

                {/*showcases previous work history*/}
                <div className="bg-cyan-950 mt-5 text-white" aria-label="Previous Work History Section">
                    <h1 className="text-2xl font-semibold">Work Experience</h1>
                    <div className="experience-section no-scrollbar">
                        <div className="m-5" aria-label="Software Developer at Champion Products Corp. from January 2024 to the present">
                            <h2 className="underline text-lg">Software Developer</h2>
                            <h3><a className="hover:text-amber-300" href="https://championproducts.com/">Champion Products Corp.</a> (January 2022 - Present)</h3>
                            <p className="text-xs">Created an application that monitors employee activity.</p>
                        </div>

                        <div className="m-5" aria-label="Software Developer Intern at Gao Tek Inc. from August 2021 to November 2021">
                            <h2 className="underline text-lg">Software Developer Intern</h2>
                            <h3><a className="hover:text-amber-300" href="https://gaotek.com/">Gao Tek Inc.</a> (August 2021 - November 2021)</h3>
                            <p className="text-xs">Translated VoIP documents to usable C code.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}