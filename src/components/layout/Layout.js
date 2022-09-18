import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import LandingPage from "../pages/LandingPage";
import Checkout from "../pages/Checkout";
import GameId from "../pages/game/[id]";

function Layout() {
  return (
    <Router>
      <Navbar className="container-nav" variant="dark" expand="lg">
        <Container className="nav-line">
          <Navbar.Brand className="nav-logo">BITS & BOTS</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-line1">
              <NavLink to="/home" activeclassname="active" className="nav-link">
                Games
              </NavLink>
              <NavLink to="/cart" activeclassname="active" className="nav-link">
                Cart
              </NavLink>
            </Nav>
            <div className="nav-button">
              <button>
                <a href="/" className="button-logout">
                  log out
                </a>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
        <div className="nav-line2">
          <p className="nav-logo-slogan">Video game store</p>
        </div>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/game/:id" element={<GameId />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Layout;
