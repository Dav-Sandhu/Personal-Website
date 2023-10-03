import './Navbar.scss'

//A custom navigation bar that uses BootstrapV5.0 to stylize itself.
const Navbar = ({setScreen}) => {
    return(
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <a className="navbar-brand ms-2" href="#">Davanjit Sandhu</a>

            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navContent" 
                aria-controls="navContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-2" id="navContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        {/* used to update selected screen element, the second argument is to make sure it updates no matter what. */}
                        <span className="nav-link" onClick={() => setScreen(prev => ["home", !prev[1]])}>
                            Home
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setScreen(prev => ["about", !prev[1]])}>
                            About
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setScreen(prev => ["projects", !prev[1]])}>
                            Projects
                        </span>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar