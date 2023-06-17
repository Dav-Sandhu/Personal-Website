import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import './App.scss'

import { useRef, useEffect, useState } from "react"

//The 'App' component is the main hub where all other elements are compiled together into one functional webpage.
function App() {

    //used to point to different elements on screen.
    const homePointer = useRef()
    const projectsPointer = useRef()
    const aboutPointer = useRef()
  
    //used to keep track of which navbar button was last clicked.
    const [screen, setScreen] = useState(["start", true])
  
    //Every time the screen variable is updated (i.e. one of the navbar buttons is clicked) this useEffect updated.
    useEffect(() => {
      //scrolls screen into the view for selected input.
      if (screen[0] === "home"){
        homePointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
      }else if (screen[0] === "projects"){
        projectsPointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
      }else if (screen[0] === "about"){
        aboutPointer.current?.scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
      }
    }, [screen])

    /*         
      Span blocks wrap around each 'screen' element to point to where the screen must scroll to if selected.
      The screen setting method is sent to the custom navbar to handle the update.    
    */
    return(
        <span className='App' ref={homePointer}>
          <Navbar setScreen={setScreen} />
          <Home />

          <span ref={projectsPointer}>
              <Projects />
          </span>

          <span ref={aboutPointer}>
              <About />
          </span>

          <Footer />
        </span>
    )
}

export default App
