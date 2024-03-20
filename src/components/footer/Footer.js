import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import Avatar from "../Avatar/Avatar.js";
//import ToggleSwitch from "./ToggleSwitch.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className='footer-row'>
        <Avatar/>
        <p className="footer-text" style={{ color: props.theme.secondaryText}}>
          {greeting.title} &nbsp; &nbsp; {new Date().getFullYear()} 
        </p>
        </div>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
