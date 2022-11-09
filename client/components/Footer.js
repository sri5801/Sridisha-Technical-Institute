import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import {Envelope,Compass,Telephone} from "react-bootstrap-icons"

const Footer = () => {
    return (
      <footer
        style={{ height: "120px" }}
        className="bg-dark bg-gradient mt-5"
      >
        <Container className="d-flex flex-column">
          <h4 className="text-white my-3">Contact Us</h4>
          <Container className="d-flex mx-auto justify-content-center">
            <div className="d-flex align-items-center justify-content-center mx-4">
              <Compass size={40} className="text-white" />
              <p className="text-white mx-2">Lodi Estate, New Delhi 1100 03</p>
            </div>
            <div className="d-flex align-items-center mx-4">
              <Envelope size={40} className="text-white" />
              <p className="text-white mx-2">
                abccollegeoftechnology@gmail.com
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center mx-4">
              <Telephone size={40} className="text-white my-" />
              <p className="text-white mx-2">011-2338983</p>
            </div>
          </Container>
        </Container>
      </footer>
    );
}
 
export default Footer;