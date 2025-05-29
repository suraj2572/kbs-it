import React from "react";
import "./Header.css";
import { Link , NavLink } from "react-router-dom";
import { FcAdvertising } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { FcLink } from "react-icons/fc";
import { FaSortNumericDown } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";

const Header = () => {
  return (
    <header className="navbar-container">
      <dir className="navbar">
      <div className="container-logo">
        <img src="https://kbitsolutions.com.au/wp-content/uploads/2022/12/KBS-IT-1.png" alt="Kbit Logo" className="logo" />
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <div className="Hamburger bar1"></div>
        <div className="Hamburger bar2"></div>
        <div className="Hamburger bar3"></div>
      </label>

      <div className="nav-overlay"></div>

      <nav className="nav">
        <div className="mobile-logo">
          <img src="https://kbitsolutions.com.au/wp-content/uploads/2022/12/KBS-IT-1.png" alt="Kbit Logo" className="logo" />
        </div>

        <div className="nav-links">
          <div>
            <NavLink style={(e)=>{return{
              color: e.isActive ? "tomato" : ""
            }}} to="/" className="nav-link"> Home </NavLink>
          </div>

          <div className="dropdown">
            <span className="dropdown-arrow"> Company <span className="arrow"></span> </span>
            <div className="dropdown-menu"> 
              <NavLink style={(e)=>{return{
              color: e.isActive ? "tomato" : "",
            };
            }}  to="/aboutus" className="dropdown-item"> About Us </NavLink>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdown-arrow"> Services <span className="arrow"></span> </span>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item"> <i className="icons"> <FcAdvertising /> </i> Growth Marketing </Link>
              <Link to="/" className="dropdown-item"> <i className="icons"> <FcTemplate /> </i> Web Development </Link>
              <Link to="/" className="dropdown-item"> <i className="icons"> <FcViewDetails /> </i> Mobile App Development </Link> 
              <Link to="/" className="dropdown-item"> <i className="icons"> <FcEnteringHeavenAlive /> </i> Enterprise Software Development </Link>
              <Link to="/" className="dropdown-item"> <i className="icons"> <FcLink /> </i> Blockchain </Link>
            </div>
          </div>

          <div className="dropdown industry">
            <span className="dropdown-arrow"> Industry <span className="arrow"></span> </span>
            <div className="dropdown-menu industry-menu">
              <div className="dropdown-columns">

                <div className="dropdown-section">
                  <h4>FOOD DELIVERY</h4>
                  <hr />
                 
                  <NavLink style={(e)=>{return {
                    color:  e.isActive ? "tomato" : " " ,
                  }}} to="/deliveryapp" className="dropdown-item"> <i className="icons"> <FaSortNumericDown /> </i> Delivery App </NavLink>
                 
                  <NavLink style={(e)=>{return{
                    color : e.isActive ? "tomato" : " " ,}}}
                  
                  to="/ecommercedelivery" className="dropdown-item"> <i className="icons"> <FaMapMarkedAlt /> </i> E-Commerce Delivery </NavLink>
                 
                  <NavLink  style={(e)=>{
                    return{
                      color : e.isActive ? "tomato" : " ",
                    }
                  }}
                  to="/grocerydelivery" className="dropdown-item"> <i className="icons"> <FaCoffee /> </i> Grocery Delivery </NavLink>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaListUl /> </i> Food Delivery </Link>
                </div>

                <div className="dropdown-section">
                  <h4>CRM</h4>
                  <hr />
                  <Link to="/" className="dropdown-item"> <i className="icons"> <GiProcessor /> </i> CRM </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaNewspaper /> </i> Sales CRM </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaRegNewspaper /> </i> Real Estate CRM </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaPaperPlane /> </i> Education CRM </Link>
                </div>

                <div className="dropdown-section">
                  <h4>E-COMMERCE</h4>
                  <hr />
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaBriefcase /> </i> E-mart </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaServer /> </i> Spectacles Store </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaStore /> </i> Liquor Store </Link>
                </div>

                <div className="dropdown-section">
                  <h4>SOFTWARE DEVELOPMENT</h4>
                  <hr />
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaUsersCog /> </i> Web Development </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaUsers /> </i> Mobile App Development </Link>
                  <Link to="/" className="dropdown-item"> <i className="icons"> <FaPeopleArrows /> </i> Partnership </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdown-arrow"> Live Demo <span className="arrow"></span> </span>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item"> Blogs </Link>
              <Link to="/" className="dropdown-item"> Vlogs </Link>
            </div>
          </div>

          <div>
            <Link to="/Contact" className="nav-link"> Contact </Link>
          </div>
        </div>
      </nav>

      <div className="container-call">
        <span className="call-icon"></span>
        <div>
          <h3>Call Any Time</h3>
          <p>+61455 254 491</p>
        </div>
      </div>
      </dir>
    </header>
  );
};

export default Header;
