import React from "react";
import GroupPhoto from "../images/groupphoto.jpg";
import Logo from "../images/treelogo2.svg";

export default function About() {
  return (
    <div className="pagelayout">
      <div className="aboutpage">
        <h1>About Us - TreeCo</h1>
        <img
          src={GroupPhoto}
          alt="Group Photo Placeholder"
          width="400"
          height="370"
        />
        <br />
        <br />
        <p>
          TreeCo is a tree company. We sell trees, hedges, fertilisers and
          gardening maintenance tools. Plant A Tree was created by the company
          Terra-Byte in order to help reach our customers better.
        </p>
        <br />
        <img src={Logo} width="200" height="100" alt="the logo" />
      </div>
    </div>
  );
}
