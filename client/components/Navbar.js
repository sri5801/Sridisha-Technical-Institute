import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import {useDispatch , useSelector} from "react-redux";
import { logout } from "../Redux/userSlice";

const NavbarHeader = () => {
    const user = useSelector((state)=>state.user.currentUser);
    const dispatch = useDispatch();
    const handleLogout = () =>{
      dispatch(logout());
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <img
              style={{ height: "30px", width: "40px" }}
              src="/images/logo/logo.jpeg"
              alt="logo"
              className="mx-1"
            />
            <span className="text-decoration-none">
              Sridisha Technical Institute
            </span>
          </Navbar.Brand>
        </Link>

        <Navbar.Collapse className="justify-content-end">
          <Link href="/contact">
            <Navbar.Text className="mx-2">Contact Us</Navbar.Text>
          </Link>
          <Link href="/gallery">
            <Navbar.Text>Gallery</Navbar.Text>
          </Link>

          {user ? (
            <>
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <Link href="/login">
              <Navbar.Text className="mx-2">Login</Navbar.Text>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
