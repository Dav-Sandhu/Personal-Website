const Navbar = ({title, setScreen}) => {
  return(
    <nav className="navbar">
      <span className="navbar-title">{title}</span>
      <ul>
        <li><span className="navbar-item" onClick={() => setScreen(prev => ["home", !prev[1]])}>Home</span></li>
        <li><span className="navbar-item" onClick={() => setScreen(prev => ["projects", !prev[1]])}>Projects</span></li>
        <li><span className="navbar-item" onClick={() => setScreen(prev => ["about", !prev[1]])}>About</span></li>
      </ul>
    </nav>
  )
}

export default Navbar