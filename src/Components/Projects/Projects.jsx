import OptimizedImage from "../OptimizedImage"
import {images} from "./Images"
import list from "./Projects.json"
import './Projects.scss'

const Projects = () => {
  return(
    <div className="mt-5 mb-5">

      {/*projects section heading*/}
      <h1 className="text-center" aria-label="section heading: projects">Projects</h1>
      
      <div id="projects">

        {/*A carousel from Bootstrap showcases all the different projects.*/}
        <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/*
              iterates through the json files which contains all of the data on the projects and outputs them with all their relevant data.
            */}
            {list.data.map(p => {
            return(
              <a className={p.img === "ListMaker" ? "carousel-item active" : "carousel-item"} key={p.hash} href={p.href}>
                
                {/*until the image is properly loaded a placeholder image is shown.*/}
                <OptimizedImage src={images[p.img]} hash={p.hash} classId="d-block w-100 project-image" aria={"project name: " + p.name} />
                
                {/*
                  The reason for having two titles is that Bootstrap simply gets rid of the caption on smaller devices, but I still wanted to
                  have a title. So I set up a separate project title which is not displayed until Bootstrap's caption disappears, after which
                  only this custom title div will show.
                */}
                <div className="project-title" aria-hidden={true}>{p.name}</div>
                
                {/*
                  A custom caption with the description and title for each project that is displayed over top the image.
                */}
                <div className="carousel-caption d-none d-md-block">
                  <h5 aria-hidden={true}>{p.name}</h5>
                  <p aria-hidden={true}>{p.description} ({`Uses: ${p.uses}`})</p>
                </div>
              </a>
            )})
            }
          </div>

          {/*directional controls for the carousel.*/}
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