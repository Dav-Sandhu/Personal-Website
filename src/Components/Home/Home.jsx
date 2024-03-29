import SEO from '../SEO'
import profile_pic from '../../Resources/main-picture.jpg'
import "./Home.scss"

//An introductory section where all social links are displayed. 
const Home = () => {
    return(
        <div className='home container'>
            {/*
                Optimizes the webpage metadata to ensure that it can be found using a search algorithm.
            */}
            <SEO 
                title="Davanjit Sandhu's Website" 
                description="Used to showcase my recent work and where to find me elsewhere." 
                name="Davanjit Sandhu" 
                type="article" 
            />
            {/*
                Uses Bootstrap to position each element as needed.
            */}
            <div className="row justify-content-center m-3">

                {/*
                    The image element has custom class tags and an empy span block to create the effect of circular
                    movement through the use of CSS.
                */}
                <div className="main-profile">
                    <span className="bg-img"></span>
                    <img src={profile_pic} className="bg-profile-img" aria-label="Profile Picture" />
                </div>
            </div>
            <div className="row justify-content-center">

                {/*
                    Creates buttons that execute various links depending on what is selected.
                */}
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