import { useEffect, useRef } from "react"
import * as bootstrap from 'bootstrap'

const SkillsInfoButton = () => {

    const popoverRef = useRef()

    useEffect(() => {
        //Uses the bootstrap provided popover element to create a custom popover.
        new bootstrap.Popover(popoverRef.current, {
            html: true,
            content: "★★★★★:<br>Know the technology really well alongside it's core concepts.<br>" + 
            "★★★★:<br>Know the technology well enough to perform most tasks.<br>" + 
            "★★★:<br>Know the basics and can do most simple tasks.<br>" + 
            "★★:<br>Know very little about the technology may have looked into it, but haven't delved deep enough.<br>" + 
            "★:<br>Complete beginner, haven't gone out of my way to learn it yet.",
            title: "Proficiency Ratings"
        })
    })

    //Used to create the svg icon for the the information button.
    return(
        <svg 
            ref={popoverRef}
            data-bs-trigger="focus" 
            data-bs-toggle="popover"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            className="bi bi-info-circle" 
            viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>

    )
}

export default SkillsInfoButton