import OptimizedImage from "../OptimizedImage"
import {images} from "./Images"
import list from "./Projects.json"
import './Projects.scss'

const Projects = () => {
  return(
    <div className="mt-5 mb-5">
      <h1 className="text-center" aria-label="section heading: projects">Projects</h1>
      <div id="projects" className="row">
        {/*Maps out the projects.*/}
        {list.data.map(p => {
        return(
          <a href={p.href} id="project" className="col-3" key={p.hash}>
            {/*unoptimized: <img src={p.img} alt="unavailable" className="project-picture" />*/}
            <OptimizedImage src={images[p.img]} hash={p.hash} classId="project-picture" aria={"project name: " + p.name} />
            <div className="project-name" aria-hidden={true}>{p.name}</div>
            <div className="project-description">{p.description} ({`Uses: ${p.uses}`})</div>
          </a>
        )
        })}
      </div>
    </div>
  )
}

export default Projects