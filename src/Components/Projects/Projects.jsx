import TwitterFilter from "../../Resources/Twitter-Filter.png"
import DiceGame from "../../Resources/Dice-Game.png"
import ObstacleRush from "../../Resources/Obstacle-Rush.png"
import ListMaker from "../../Resources/List-Maker.png"
import FinalOdyssey from "../../Resources/Final-Odyssey.png"
import CameraApp from "../../Resources/Camera-App.png"
import './Projects.scss'
import { useId } from "react"

const Projects = () => {

    const projects = [
        {
          name: "Twitter Filter App (2022)",
          description: "A filter application that only shows you tweets and nothing else by fetching tweets from specified users which you can add/remove from the list which is stored on your local computer as a JSON file. It was made because I wanted to filter out all of the unnecessary content meant to keep your engaged on Twitter.",
          uses: "ReactJS, NodeJS, ExpressJS",
          img: TwitterFilter,
          href: "https://github.com/Dav-Sandhu/Twitter-Filter",
          id: useId()
        },
        {
          name: "List Maker (2022)",
          description: "A website where you can create custom lists and save them to the database where they can be loaded later on, hosted on heroku and netlify and database utilizes MongoDB and Mongoose.",
          uses: "MERN Stack, ReduxJS, SASS",
          img: ListMaker,
          href: "https://github.com/Dav-Sandhu/List-Maker-Version-2",
          id: useId()
        },
        {
          name: "Dice of Daedalus (2022)",
          description: "This is a strategy game that me and two of my friends developed over a two day weekend for a Game Jam where the theme was 'Roll of the Dice'. You have to match the dice faces with the floor tiles for each labelled tile to proceed to the next level.",
          uses: "Lua, Love2D",
          img: DiceGame,
          href: "https://avandolder.itch.io/dice-of-daedalus",
          id: useId()
        },
        {
          name: "Custom Camera App (2022)",
          description: "A custom camera application for Android devices where you can take pictures with both the front and back cameras and save the pictures taken to your library.",
          uses: "React Native, Expo",
          img: CameraApp,
          href: "https://github.com/Dav-Sandhu/Custom-Camera-App",
          id: useId()
        },
        {
          name: "Obstacle Rush (2021)",
          description: "A game where you dodge falling obstacles which was created as a final project for my Mobile application course at University.",
          uses: "Android Studio, Kotlin",
          img: ObstacleRush,
          href: "https://github.com/Dav-Sandhu/Obstacle-Rush",
          id: useId()
        },
        {
          name: "Final Odyssey (2020)",
          description: "password to access: 123123, the game is a survival strategy game that takes place at the end of the Universe where a great calamity chases you and your goal is to survive for as long as possible. The game was about 90% completed and was part of a 1 month game development challenge I took part in",
          uses: "GameMaker 2",
          img: FinalOdyssey,
          href: "https://boomnack.itch.io/final-odyssey",
          id: useId()
        }
    ]
    

    return(
        <div className="mt-5 mb-5">
            <h1 className="text-center">Projects</h1>
            <div id="projects" className="row">
                {projects.map(p => {
                return(
                    <a href={p.href} id="project" className="col-3" key={p.id}>
                        <img src={p.img} alt="unavailable" className="project-picture"/>
                        <div className="project-name">{p.name}</div>
                        <div className="project-uses">{`Uses: ${p.uses}`}</div>
                        <div className="project-description">{p.description}</div>
                    </a>
                )
                })}
            </div>
        </div>
    )
}

export default Projects