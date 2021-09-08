import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./NavBar.css";

const NavBar = (props) => {
//   const { setSearchTerm } = props;
//   const changeHandler = event => {
//     setSearchTerm(event.target.value);
//   }
  return (
    <div className="search-bar-wrapper">
     {/* <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={changeHandler}
        />
      </form>  */}
      <h1>NASA's Astronomy Picture of the Day</h1>
    </div>
  );
};

export default NavBar;