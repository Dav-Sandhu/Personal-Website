'use client'

import "./projects.scss"

//data type for each project object in the data array
type Project = {
    name: string;
    desc: string;
    stack: string;
    img: string;
    path: string;
}


export default function Projects({ item }: { item: Project }){
    return(
        <a href={item.path} key={item.img}>
            {/*iterates through the data array and outputs each project*/}
            <div className="project mt-5 m-5 rounded bg-slate-50 hover:bg-white overflow-y-scroll no-scrollbar shadow-md" aria-label={item.name}>
                {/*project image*/}
                <div className="project-image w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}>
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
                        <h1 className="text-center font-semibold">{item.name}</h1>

                        {/*project name and description*/}
                        <div className="overflow-hidden project-desc" aria-label={"Description of the project: " + item.desc}>
                            <h2 className="text-center truncate m-2">(Uses: {item.stack})</h2>
                            <div className="flex flex-row align-center justify-center">
                                <p className="w-4/5 max-h-24 overflow-y-auto no-scrollbar">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}