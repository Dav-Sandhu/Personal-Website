import { useRef, useEffect, useState } from "react"
import Navbar from "./Navbar"
import Home from './Home'
import Projects from "./Projects"
import About from "./About"

const App = () => {

  const homePointer = useRef()
  const projectsPointer = useRef()
  const aboutPointer = useRef()

  const [screen, setScreen] = useState(["home", true])

  useEffect(() => {
    if (screen[0] === "home"){
      homePointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
    }else if (screen[0] === "projects"){
      projectsPointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
    }else if (screen[0] === "about"){
      aboutPointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
    }
  }, [screen])

  return (
    <>
      <Navbar title="Davanjit Sandhu" setScreen={setScreen} />
      <span ref={homePointer}>
        <Home />
      </span>
      <span ref={projectsPointer}>
        <Projects />
      </span>
      <span ref={aboutPointer}>
        <About />
      </span>
    </>
  )
}

export default App
