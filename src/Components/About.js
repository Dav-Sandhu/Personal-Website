import PICTURE from '../Resources/me.jpg'

const About = () => {
  return(
    <div className="about">
      <div className="about-title">About Me</div>
      <div className="about-content">
        <div className="about-profile">
          <img src={PICTURE} alt="unavailable" className="about-picture" />
          <span className="contact">
            <div><u>Personal Information</u></div>
            <div>Email: davanjit@hotmail</div>
            <div>Phone: 519-816-8130</div>
            <div>Location: Canada</div>
            <div>Born: January 24, 1998</div>
            <div>Misc: </div>
            <div>{`- Has a drivers license`}</div>
            <div>{`- Fully Vaccinated`}</div>
            <div>{`- Can speak fluent English, Punjabi, Hindi`}</div>
          </span>
        </div>
        <div className="about-header">Education</div>
        <div className="about-sub-header">{` - Riverside Secondary School (2012-2016)`}</div>
        <p className="about-information">{`Highschool Diploma`}</p>
        <div className="about-sub-header">{` - University of Windsor (2016-2021)`}</div>
        <p className="about-information">{`B.C.S Computer Science with a Minor in Political Science`}</p>
        <div className="about-header">Experience</div>
        <div className="about-sub-header">{` - Gao Tek Inc. (August 2021 - November 2021)`}</div>
        <p className="about-information">Worked on the 'Protocols Development Team'</p>
        <div className="about-header">Skills</div>
        <p className="about-information">C#, C, Java, Kotlin, Python, Lua, JavaScript, TypeScript, PHP, HTML, CSS, SQL, ReactJS, NodeJS, ExpressJS, Laravel, Axios, Cors, JSDOM, Router, Webpack, Unity, Love2D, GameMaker 2, RPGMaker VXAce, PyGame, Android Studio, React Native, Object Oriented Programming/Design, Data Structures and Algorithms, Database Management, MVC, VDOM, REST API's</p>
      </div>
    </div>
  )
}

export default About