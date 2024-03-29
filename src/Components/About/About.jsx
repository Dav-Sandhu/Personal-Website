import skills from "./skills.json"
import SkillsInfoButton from "./SkillsInfoButton"
import OptimizedImage from "../OptimizedImage"
import './About.scss'
import pic from "../../Resources/about-me-picture.png"

//For screen readers as some are unable to read the star symbols.
const stars = {
    "★★★★★": "five stars",
    "★★★★": "four stars",
    "★★★": "three stars",
    "★★": "two stars",
    "★": "one star"
}

//Used to showcase more information on myself including on my current skillset.
const About = () => {
    return(
        <div className="container about-section">

            {/*About section heading*/}
            <h1 className="title-about text-center" aria-label="section heading: about me">About Me</h1>

            {/*
               A box that is meant to serve as a brief introduction to myself. The left side of the box contains 
               an image, whereas the right side contains a short introduction.
            */}
            <div className="personal-info-box">
                <div className="row about-content">

                    {/*Left side image.*/}
                    <div id="about-left" className="col-3" role="img">

                        {/*Unoptimized: <img src={pic} className="about-image" />*/}
                        <OptimizedImage src={pic} hash="L9BgGMNG0:-UI_xv?wI90JRivy%M" classId="about-image" aria="Picture of Davanjit Sandhu, graduation 2012"/>
                    </div>

                    {/*Right side introduction.*/}
                    <div id="about-right" className="col text-wrap">
                        <div className="about-summary">
                            Graduated from the University of Windsor with a Bachelor of Computer Science and a minor in Political Science in 2021.
                            Worked at <a href="https://gaotek.com/" style={{ color: 'white'}}>GaoTek Inc.</a>&nbsp; as a <i>"Software Development Intern"</i> 
							from August 2021 to November 2021, at <a href="https://www.maxxprinting.com/" style={{ color: 'white'}}>MAXX Printing</a>&nbsp; 
							as a <i>"Web Development Intern"</i> from September 2023 to January 2024, and as a <i>"Software Developer"</i> at&nbsp; 
                            <a href="https://www.championproducts.com/info/about-us/" style={{ color: 'white'}}>Champion Products Corp.</a>&nbsp; From January 2024
                            to Present. 
                        </div>
                        <div className="about-subheading">Contact Details</div>
                        <div>
                            Email: davanjit@hotmail.com
                        </div>
                        <div>
                            Phone: 519-816-8130
                        </div>
                    </div>
                </div>
            </div>

            {/*A Hover over button to showcase information about the table itself.*/}
            <h2 aria-label="About Me section sub-heading">My Current Skillset <SkillsInfoButton /></h2>
            
            {/*Creates a custom skills table using Bootstrap with the following three headings.*/}
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Current Proficiency</th>
                        <th>Usage Period</th>
                    </tr>
                </thead>
                <tbody>

                    {/*Maps out each skill from the json file into the table.*/}
                    {skills.skills.map(row => {
                        return (
                            <tr key={row[0]}>
                                {row.map(i => {
                                    return(
                                    <td key={i} aria-label={stars[i] || i}>
                                        {i}
                                    </td>
                                )})}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default About