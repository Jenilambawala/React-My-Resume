import React from 'react'

export const Header = () => {
  return (
    <React.Fragment>
      {/* Header Start */}
        <header className="header" id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/"> Ambawala </a>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page"
                                    href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page"
                                    href="#AboutMe">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page"
                                    href="#MyExperience">My
                                    Experience</a>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <a className="contact_btn" type="button" href="#ContactMe">
                            Contact Me
                        </a>
                    </form>
                </nav>
            </div>
        </header>
        {/* Header End */}
    </React.Fragment>
  )
}

export default Header
