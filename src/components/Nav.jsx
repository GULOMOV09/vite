import React from 'react'
import uzflag from "../assets/images/Uzbekistan-flag.webp";
import ruflag from "../assets/images/russia.png";
import { FaSearchDollar } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav_lang">
        <button className="nav_lang_btn">
          <span>uzb</span>
          <img src={uzflag} alt="" />
        </button>
        <button className="nav_lang_btn">
          <span>rus</span>
          <img src={ruflag} alt="" />
        </button>
      </div>
      <div className="container">
        <h2 className="nav_title">ESLATMALAR</h2>
      </div>
      <button className="nav_search">
        <img src={FaSearchDollar} alt="" />
      </button>
    </nav>
    
  )
}

export default Nav