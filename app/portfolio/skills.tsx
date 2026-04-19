'use client'

import "./skills.scss"

type Skill = {
    img: string,
    name: string,
    category: string
}

export default function Skills({ item }: { item: Skill }){
    return(
        <div className="skill" aria-label="company logo">
            <img className="h-full w-full object-contain" src={item.img} alt="" />
            {/* <h1 className="text-center">{item.name}</h1> */}
        </div>
    )
}