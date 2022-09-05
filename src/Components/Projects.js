import TwitterFilter from "../Resources/Twitter-Filter.png"
import DiceGame from "../Resources/Dice-Game.png"
import ObstacleRush from "../Resources/Obstacle-Rush.png"
import ModzeeTest from "../Resources/Modzee-Test.jpg"
import FinalOdyssey from "../Resources/Final-Odyssey.png"
import SailorsQuest from "../Resources/Sailors-Quest.png"
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
      name: "Dice of Daedalus (2022)",
      description: "This is a strategy game that me and two of my friends developed over a two day weekend for a Game Jam where the theme was 'Roll of the Dice'. You have to match the dice faces with the floor tiles for each labelled tile to proceed to the next level.",
      uses: "Lua, Love2D",
      img: DiceGame,
      href: "https://avandolder.itch.io/dice-of-daedalus",
      id: useId()
    },
    {
      name: "Obstacle Rush (2021)",
      description: "A game where you dodge falling obstacles which was created as a final project for my Mobile application course at University",
      uses: "Android Studio, Kotlin",
      img: ObstacleRush,
      href: "https://github.com/Dav-Sandhu/Obstacle-Rush",
      id: useId()
    },
    {
      name: "Modzee Test (2021)",
      description: "A test website made to mimic a professional website.",
      uses: "Laravel, PHP",
      img: ModzeeTest,
      href: "https://github.com/Dav-Sandhu/ModzeeTest",
      id: useId()
    }, 
    {
      name: "Final Odyssey (2020)",
      description: "password to access: 123123, the game is a survival strategy game that takes place at the end of the Universe where a great calamity chases you and your goal is to survive for as long as possible. The game was about 90% completed and was part of a 1 month game development challenge I took part in",
      uses: "GameMaker 2",
      img: FinalOdyssey,
      href: "https://boomnack.itch.io/final-odyssey",
      id: useId()
    },
    {
      name: "A Sailor's Quest (2020)",
      description: "Final projects for my 'Video Game Development Course', it is a 2.5D platformer where you avoid enemies and complete some stages before a final boss.",
      uses: "Unity, C#",
      img: SailorsQuest,
      href: "https://github.com/Dav-Sandhu/A-Sailors-Quest",
      id: useId()
    }
  ]

  return(
    <div className="projects-content">
      <div className="projects-title">Projects</div>
      <div className="projects">
        {projects.map(p => {
          return(
            <a href={p.href} className="project" key={p.id}>
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