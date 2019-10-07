import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";

const MyMobileNavbar = styled.nav`
  width: 100%;
  background: #572f14;

  margin-bottom: 15px;

  align-self: flex-end;

  transition: transform 1s;
  transform: translateX(
    ${props => (props.displayMobileNavbar ? "0%" : "100%")}
  );

  .nav-links2 {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    height: 20vh;
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

const MobileNavbar = props => {
  return (
    <div>
      {console.log(props.displayMobileNavbar)}
      <MyMobileNavbar displayMobileNavbar={props.displayMobileNavbar}>
        <Navlinks />
      </MyMobileNavbar>
    </div>
  );
};

export default MobileNavbar;
