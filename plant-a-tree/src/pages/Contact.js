import React from "react";
import GroupPhoto from "../images/grouppicplaceholder.jpg";
import Logo from "../images/treelogo2.svg";

export default function Contact() {
  return (
    <div className="pagelayout">
      <main className="contactpage">
        <h1>Get In Touch With Us</h1>
        <p>
          Feel free to send us a message. We will try our best to get back to
          you ASAP!
        </p>
        <p>Email: terrabyte@gmail.com</p>
        <img src={GroupPhoto} alt="Group Photo Placeholder" />
        <img src={Logo} width="200" height="100" alt="the logo" />
      </main>
    </div>
  );
}
