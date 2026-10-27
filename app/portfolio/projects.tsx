'use client'

import "./projects.scss"
import runOption from '../runOption'

//data type for each project object in the data array
type Project = {
    name: string;
    desc: string;
    stack: string;
    img: string;
    path: string;
}


export default function Projects({ item }: { item: Project }){

    const img = runOption(item.img)

    return(
        <a href={item.path} key={item.img}>
            {/*iterates through the data array and outputs each project*/}
            <div className="project mt-5 mr-5 ml-5 rounded bg-slate-50 hover:bg-white overflow-y-scroll no-scrollbar shadow-md hover:-translate-y-1 hover:shadow-xl transition-all" aria-label={item.name}>
                {/*project image*/}
                <div className="project-image w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                    {/* <Image
                        src={runOption(item.img)}
                        alt={item.name}
                        fill
                        style={{ objectFit: "contain" }}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,..."
                        sizes="100%"
                    /> */}
                    <div className="project-info bg-slate-100 bg-opacity-50 hover:bg-opacity-90 text-slate-800 flex flex-col justify-center">

                        {/*project name and description*/}
                        <div className="overflow-hidden project-desc" aria-label={"Description of the project: " + item.desc}>
                            
                            <div className="flex flex-row align-center justify-center m-2">
                                <h2 className="text-center truncate w-4/5">(Uses: {item.stack})</h2>
                            </div>
                            
                            <div className="flex flex-row align-center justify-center">
                                <p className="w-4/5 max-h-24 overflow-y-auto no-scrollbar">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center font-semibold mb-5 mt-2 truncate">{item.name}</h1>
        </a>
    )
}