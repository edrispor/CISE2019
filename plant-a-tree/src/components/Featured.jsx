import React, { Component } from "react";

export default function Featured({ children, title, subtitle }) {
  return (
    <section className="feature-section">
      <div className="feature">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
