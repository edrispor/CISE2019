import React from "react";
import { Link } from "react-router-dom";
import Tools from "../components/Tools";

export default function Sales() {
  return (
    <div className="pagelayout">
      <div className="sales-page">
        <Link to="/">Home</Link>
        <p> > Sale</p>
        <h1>SPRING SALE ! ! !</h1>
        <p>
          All TOOLS are on sale. Till end of October 2019 or while stocks last.
          Exclusive to Plant-A-Tree members only.
        </p>
        <Tools></Tools>
      </div>
    </div>
  );
}
