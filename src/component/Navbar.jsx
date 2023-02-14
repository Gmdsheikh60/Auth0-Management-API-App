import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ "backgroundColor": "#FFD8A9" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="60"
            height="50"
            alt="Auth0 logo"
            style={{ paddingLeft: "10px", paddingRight: "5px" }}
          />
          Auth App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Users
            </a>
            <a className="nav-link active" href="/connections">
              Connections
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
