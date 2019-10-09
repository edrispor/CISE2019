import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import menu from "./menu-24px.svg";
import treelogo2 from "./treelogo2.svg";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: -webkit-linear-gradient(#006b38ff, #101820ff);
  color: white;
  height: 20vh;

  .nav-links2 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 35vw;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .nav-links2 li a:active,
  .nav-links2 li a:hover,
  .nav-links2 li a.active {
    color: var(--mainPinky);
    text-decoration: none;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DesktopNavbar = props => {
  return (
    <MyDesktopNavbar>
      <Link to="/">
        <img src={treelogo2} width="200" height="100" alt="Plant a Tree" />
      </Link>

      <Navlinks />

      <MyMobileNavButton onClick={props.toggleMobileNavbar}>
        <img src={menu} />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;
