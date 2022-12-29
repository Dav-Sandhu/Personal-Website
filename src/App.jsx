import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

import { useRef, useEffect, useState } from "react"

function App() {

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

    return(
        <>
          <Navbar setScreen={setScreen} />
          <span ref={homePointer}>
              <Home />
          </span>

          <span ref={projectsPointer}>
              <Projects />
          </span>

          <span ref={aboutPointer}>
              <About />
          </span>

          <Footer />
        </>
    )
}

export default App
