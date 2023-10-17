import PoemGenerator from "../../Resources/OpenAI-Poem-Generator.png"
import TwitterFilter from "../../Resources/Twitter-Filter.png"
import DiceGame from "../../Resources/Dice-Game.png"
import ListMaker from "../../Resources/List-Maker.png"
import CameraApp from "../../Resources/Camera-App.png"
import KanbanBoard from "../../Resources/Kanban-Board.png"
import OptimizedImage from "../OptimizedImage"
import './Projects.scss'
import { useId } from "react"

const Projects = () => {

  //An array of objects that contain information about each project.
    const projects = [
        {
          name: "Kanban Board (2023)",
          description: "A kanban board where you can drag and drop cards into different columns.",
          uses: "React.js, React-DND",
          img: KanbanBoard,
          hash: "LLT9LoatxztCW4W8olojRfayojj[",
          href: "https://github.com/Dav-Sandhu/Kanban-Board",
          id: useId()
        },
        {
          name: "Poem Generator (2023)",
          description: "generates a poem based off a given prompt using ChatGPT in the background.",
          uses: "OpenAI, React.js, Node.js, Bootstrap",
          img: PoemGenerator,
          hash: "LTKUK6D$x]%2_NofV?bH?vxbaeR*",
          href: "https://github.com/Dav-Sandhu/OpenAI-Poem-Generator",
          id: useId()
        },
        {
          name: "Twitter Filter App (2022)",
          description: "A filter application that only shows you tweets and nothing else by fetching tweets from specified users which you can add/remove from the list which is stored on your local computer as a JSON file. It was made because I wanted to filter out all of the unnecessary content meant to keep your engaged on Twitter.",
          uses: "ReactJS, NodeJS, ExpressJS",
          img: TwitterFilter,
          hash: "L3Qcn{00000000t7%Nof00_3~q_3",
          href: "https://github.com/Dav-Sandhu/Twitter-Filter",
          id: useId()
        },
        {
          name: "List Maker (2022)",
          description: "A website where you can create custom lists and save them to the database where they can be loaded later on, hosted on heroku and netlify and database utilizes MongoDB and Mongoose.",
          uses: "MERN Stack, ReduxJS, SASS",
          img: ListMaker,
          hash: "LaDvA*~p%g%M?v?H-W$+nORORkjF",
          href: "https://github.com/Dav-Sandhu/List-Maker-Version-2",
          id: useId()
        },
        {
          name: "Dice of Daedalus (2022)",
          description: "This is a strategy game that me and two of my friends developed over a two day weekend for a Game Jam where the theme was 'Roll of the Dice'. You have to match the dice faces with the floor tiles for each labelled tile to proceed to the next level.",
          uses: "Lua, Love2D",
          img: DiceGame,
          hash: "L57d%DWF03oc%KoeM}WC03xr~nN1",
          href: "https://avandolder.itch.io/dice-of-daedalus",
          id: useId()
        },
        {
          name: "Custom Camera App (2022)",
          description: "A custom camera application for Android devices where you can take pictures with both the front and back cameras and save the pictures taken to your library.",
          uses: "React Native, Expo",
          img: CameraApp,
          hash: "L4By,6BY00}#00}juM0r0115}t^Z",
          href: "https://github.com/Dav-Sandhu/Custom-Camera-App",
          id: useId()
        }
    ]
    

    return(
        <div className="mt-5 mb-5">
            <h1 className="text-center">Projects</h1>
            <div id="projects" className="row">
              
              {/*Maps out the projects.*/}
                {projects.map(p => {
                return(
                    <a href={p.href} id="project" className="col-3" key={p.id}>
                        {/*unoptimized: <img src={p.img} alt="unavailable" className="project-picture" />*/}
                        <OptimizedImage src={p.img} hash={p.hash} classId="project-picture" />
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