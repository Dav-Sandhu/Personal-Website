'use client'

import Image from "next/image"
import "./skills.scss"
import runOption from '../runOption'

type Skill = {
    img: string,
    name: string,
    category: string
}

export default function Skills({ item }: { item: Skill }){

    const img = runOption(item.img)

    return(
        <div className="skill" aria-label="company logo">
            {/* <img className="h-full w-full object-contain" src={item.img} alt="" /> */}
            
            <div className="relative h-full w-full">
                <Image 
                    className="h-full w-full object-contain"
                    style={{ objectFit: "contain" }} 
                    src={img} 
                    alt={item.name}
                    fill
                />
            </div>
            
            {/* <h1 className="text-center">{item.name}</h1> */}
        </div>
    )
}