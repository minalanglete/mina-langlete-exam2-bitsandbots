import Heading from "../layout/Heading";
import FormLogin from "../layout/FormLogin";
import { Tab, Tabs } from "react-bootstrap";
import video from "../../media/triangle.mp4";
import Form from "../login/Registration";
import Login from "../login/login";

export default function LandingPage() {
  return (
    <div className="container-landingpage">
      <Heading title="Landing page" />

      <div className="video">
        <video src={video} autoPlay loop muted />
      </div>
      <div className="landingpage-container-logo">
        <div>
          <h2 className="landingpage-logo">BITS & BOTS</h2>
        </div>
        <div className="landingpage-logo-slogan">
          <p>Video game store</p>
        </div>
      </div>
      <div className="container-landingpage-form">
        <div className="landingpage-form">
          <Tabs defaultActiveKey="second" className="landingform-tabs">
            <Tab eventKey="first" title="Login" className="landingform-tab">
              <Login />
            </Tab>
            <Tab eventKey="second" title="Registrer">
              <p className="landingpage-registrer-text">make a profile</p>
              <Form />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
