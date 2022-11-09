import NavbarHeader from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( 
        <>
            <NavbarHeader/>
            <main>{children}</main>
            <Footer/>
        </>
     );
}
 
export default Layout;