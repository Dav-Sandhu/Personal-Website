import profile_pic from '../../Resources/main-picture.jpg'
import "./Home.scss"

const Home = () => {
    return(
        <div className='home container'>
            <h1 className="home-title text-center">Personal Website Version 3.0</h1>
            <div className="row justify-content-center m-3">
                <div className="main-profile">
                    <span className="bg-img"></span>
                    <img src={profile_pic} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="links">
                    <a href="./Resume.pdf" download>Resume</a>
                    <a href="https://www.linkedin.com/in/davanjit-sandhu-496200211/">LinkedIn</a>
                    <a href="https://github.com/Dav-Sandhu">Github</a>
                    <a href="https://itch.io/profile/boomnack">Itch.io</a>
                </div>
            </div>
        </div>
    )
}

export default Home