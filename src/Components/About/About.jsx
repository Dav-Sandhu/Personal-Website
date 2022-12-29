import skills from "./skills.json"
import SkillsInfoButton from "./SkillsInfoButton"
import './About.scss'
import pic from '../../Resources/about-me-picture.png'

const About = () => {
    return(
        <div className="container">
            <h1 className="title-about text-center">About Me</h1>
            <div className="personal-info-box">
                <div className="row about-content">
                    <div className="col-3 about-left">
                        <img src={pic} className="about-image" />
                    </div>

                    <div className="col about-right text-wrap">
                        <div className="about-summary">
                            Graduated from the University of Windsor with a Bachelor of Computer Science and a minor in Political Science in 2021.
                            Worked at Gao Tek Inc. as a <i>"Software Development Intern"</i> from August 2021 to November 2021.
                            Recently have been focusing on <i>"Full-Stack Development"</i> and <i>"Front-End Development"</i> with React.js 
                            as my framework of choice. 
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
            <h2>My Current Skillset <SkillsInfoButton /></h2>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Current Proficiency</th>
                        <th>Usage Period</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.skills.map(row => {
                        return (
                            <tr key={row[0]}>
                                {row.map(i => {
                                    return(
                                    <td key={i}>
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