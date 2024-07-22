'use client'

import Image from 'next/image'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import "./carousel.scss"

//data type for each project object in the data array
type Project = {
    name: string;
    desc: string;
    stack: string;
    img: string;
    path: string;
}

//object containing the media queries for how many items each screen size can host
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 695 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 695, min: 0 },
      items: 1
    }
}

export default function ProjectsCarousel({data}: {data: Array<Project>}){
    return(
        <Carousel responsive={responsive}>
            {
                data.map( (item: Project) => {
                    return(
                        <a href={item.path} key={item.img}>
                            {/*iterates through the data array and outputs each project*/}
                            <div className="project mt-5 m-5 p-5 rounded bg-blue-50 hover:bg-white overflow-y-scroll no-scrollbar" aria-label={item.name}>
                                {/*project image*/}
                                <div className="project-image w-full relative">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,..."
                                        sizes="100%"
                                    />
                                </div>
                                
                                {/*project name and description*/}
                                <div className="overflow-hidden" aria-label={"Description of the project: " + item.desc}>
                                    <h1 className="text-center font-semibold">{item.name}</h1>
                                    <h2 className="text-center">(Uses: {item.stack})</h2>
                                    <p className="text-center">{item.desc}</p>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </Carousel>
    )
}