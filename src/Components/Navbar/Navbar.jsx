
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [sticky , setSticky] = useState(false);
  const [mobileMenu,setMobileMenu]=useState(false);

  useEffect(()=>{
  window.addEventListener("scroll",()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  },[])
 
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={ `container ${sticky ? "dark-nav":""}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-220} duration={500} className="btn">Contact</Link></li>
      </ul>
      <GiHamburgerMenu className="menu-icon"  onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
