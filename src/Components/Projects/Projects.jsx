import OptimizedImage from "../OptimizedImage"
import {images} from "./Images"
import list from "./Projects.json"
import './Projects.scss'

const Projects = () => {
  return(
    <div className="mt-5 mb-5">
      <h1 className="text-center" aria-label="section heading: projects">Projects</h1>
      <div id="projects">
        <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {list.data.map(p => {
            return(
            <a className={p.img === "ListMaker" ? "carousel-item active" : "carousel-item"} key={p.hash} href={p.href}>
              <OptimizedImage src={images[p.img]} hash={p.hash} classId="d-block w-100 project-image" aria={"project name: " + p.name} />

              <div className="carousel-caption d-none d-md-block">
                <h5 aria-hidden={true}>{p.name}</h5>
                <p aria-hidden={true}>{p.description} ({`Uses: ${p.uses}`})</p>
              </div>
            </a>
            )})
            }
          </div>

          <a className="carousel-control-prev" href="#projectsCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#projectsCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects