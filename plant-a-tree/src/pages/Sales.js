import React from "react";
import { Link } from "react-router-dom";

export default function Sales() {
  return (
    <div className="pagelayout">
      <div className="sales-page">
        <Link to="/">Home</Link>
        <p> > Sale</p>
        <h1>SPRING SALE ! ! !</h1>
        <p>
          Selected trees are up to 15% off. Till end of October 2019 or while
          stocks last. Exclusive to Plant-A-Tree members only.
        </p>
      </div>
    </div>
  );
}
