import Heading from "../layout/Heading";
import FormLogin from "../layout/FormLogin";
import { Tab, Tabs } from "react-bootstrap";
import video from "../../media/triangle.mp4";

export default function LandingPage() {
  return (
    <div className="container-landingpage">
      <Heading title="Landing page" />
      <div className="video">
        <video src={video} autoPlay loop muted />
      </div>
      <div className="container-landingpage-form">
        <div className="landingpage-form">
          <Tabs defaultActiveKey="second" className="landingform-tabs">
            <Tab eventKey="first" title="Login" className="landingform-tab">
              <FormLogin />
            </Tab>
            <Tab eventKey="second" title="Registrer">
              <p className="landingpage-registrer-text">make a profile</p>
              <FormLogin />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
