import skills from "./skills.json"
import SkillsInfoButton from "./SkillsInfoButton"
import './About.scss'
import pic from '../../Resources/about-me-picture.png'

//Used to showcase more information on myself including on my current skillset.
const About = () => {
    return(
        <div className="container about-section">
            <h1 className="title-about text-center">About Me</h1>
            <div className="personal-info-box">
                <div className="row about-content">
                    <div id="about-left" className="col-3">
                        <img src={pic} className="about-image" />
                    </div>

                    <div id="about-right" className="col text-wrap">
                        <div className="about-summary">
                            Graduated from the University of Windsor with a Bachelor of Computer Science and a minor in Political Science in 2021.
                            Worked at <a href="https://gaotek.com/" style={{ color: 'white'}}>GaoTek Inc.</a>&nbsp; as a <i>"Software Development Intern"</i> 
							from August 2021 to November 2021 and at <a href="https://www.maxxprinting.com/" style={{ color: 'white'}}>MAXX Printing</a>&nbsp; 
							as a <i>"Web Development Intern"</i> from September 2023 to present. 
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
            <h2>My Current Skillset <SkillsInfoButton /></h2>
            
            {/*Creates a custom skills table using BootstrapV5.0*/}
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