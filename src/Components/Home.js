import PICTURE from '../Resources/me.png'

const Home = () => {
  return(
    <div className="profile">
      <div className="welcome">Welcome to My Website!</div>
      <span className="profile-image">
        <span className="picture-bg" />
        <img src={PICTURE} alt="" className="profile-picture" />
      </span>
      <ul className="profile-links">
        <a className="profile-link" href="./Resume.pdf" download>Resume</a>
        <a className="profile-link" href="https://www.linkedin.com/in/davanjit-sandhu-496200211/">LinkedIn</a>
        <a className="profile-link" href="https://github.com/Dav-Sandhu">Github</a>
        <a className="profile-link" href="https://itch.io/profile/boomnack">Itch.io</a>
      </ul>
    </div>
  )
}

export default Home