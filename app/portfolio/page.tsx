import Projects from "./projects.tsx"
import ProjectsData from './projects.json'
import Skills from "./skills.tsx"
import SkillsData from './skills.json'
import MyCarousel  from "./carousel.tsx"
import skills from "./skills.json"
import Head from 'next/head'
import runOption from '../runOption'
import "./portfolio.scss"

export default function Portfolio(){
    
    return(
        <div className="portfolio-page bg-slate-50 h-screen" aria-label="Portfolio page">
            <Head>
                <title>Davanjit Sandhu Portfolio and Work History</title>
                <meta name="description" content="Showcases recent projects and professional work history." />
            </Head>

            <section>
                <div className="portfolio-buttons flex flex-row w-full justify-left ml-2 mt-2">
                    <a className="portfolio-btn bg-transparent text-slate-800 font-bold py-2 px-4 text-center rounded" href={runOption('/')} aria-label="Home button">Home</a>
                    <a className="portfolio-btn bg-transparent text-slate-800 font-bold py-2 px-4 text-center rounded ml-4" href="./Portfolio.pdf" aria-label="Download Portfolio">Download Portfolio</a>
                </div>
                
                {/*carousel that showcases all the projects*/}
                <div className="projects-section bg-slate-300 mt-5" aria-label="Carousel of recent projects">
                    <h1 className="text-2xl font-semibold text-slate-600 ml-2">Recent Projects</h1>
                    <MyCarousel 
                        data={ProjectsData.data}
                        Component={Projects} 
                        speed={2500}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 3000, min: 2000 },
                                items: 4
                            },
                            desktop: {
                                breakpoint: { max: 2000, min: 1024 },
                                items: 3
                            },
                            tablet: {
                                breakpoint: { max: 1024, min: 595 },
                                items: 2
                            },
                            mobile: {
                                breakpoint: { max: 595, min: 0 },
                                items: 1
                            }
                        }}
                        arrows={true} 
                        continuous={false}
                    />
                </div>

                {/*showcases skillset*/}
                <div className="bg-slate-400 mt-5">
                    <h1 className="text-2xl font-semibold ml-2 text-slate-800">Skillset</h1>
                    <div className="ml-2 pb-2">
                        <MyCarousel 
                            data={SkillsData.data}
                            Component={Skills} 
                            speed={0}
                            responsive={{
                                superLargeDesktop: {
                                    breakpoint: { max: 4000, min: 3000 },
                                    items: 6
                                },
                                desktop: {
                                    breakpoint: { max: 3000, min: 1024 },
                                    items: 5
                                },
                                tablet: {
                                    breakpoint: { max: 1024, min: 695 },
                                    items: 4
                                },
                                mobile: {
                                    breakpoint: { max: 695, min: 0 },
                                    items: 3
                                }
                            }}
                            arrows={false} 
                            continuous={true}
                        />

                    </div>
                </div>

                {/*showcases previous work history*/}
                <div className="bg-slate-950 mt-5 text-white" aria-label="Previous Work History Section">
                    <h1 className="text-2xl font-semibold ml-2">Work Experience</h1>
                    <div className="experience-section no-scrollbar">
                        <div className="m-5" aria-label="Software Developer at Champion Products Corp. from January 2024 to the present">
                            <h2 className="underline text-lg">Software Developer</h2>
                            <h3><a className="hover:text-amber-300" href="https://championproducts.com/">Champion Products Corp.</a> (January 2022 - Present)</h3>
                            <p className="text-xs">Created and maintained company websites.</p>
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