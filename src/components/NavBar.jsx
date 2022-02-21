

function NavBar(props) {
    return (
        <>
            <nav className="myNav navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand myPink lettre-space-2" href="#">Formulaire Contact</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active myPink" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myPink" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myPink" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myPink disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default NavBar;