import React from "react";

export default function Contact() {
  return (
    <div className="pagelayout">
      <main className="contactpage">
        <h1>Get In Touch With Us</h1>
        <p>
          Feel free to send us a message. We will try our best to get back to
          you ASAP!
        </p>
        <form>
          Name:
          <br>
            <input type="text" name="Name" />>
          </br>
          Email:
          <br>
            <input type="text" name="Email" />>
          </br>
          Query:
          <br>
            <input type="text" name="Query" />>
          </br>
        </form>
        <p>
          Plant A Tree by TreeCo
          <br />
          123 HelloWorld Street
          <br />
          Auckland
          <br />
          1111
          <br />
          Email: treeco@gmail.com
        </p>
      </main>
    </div>
  );
}
