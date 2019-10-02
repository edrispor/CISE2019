import React from "react";
import Profile from "../components/Profile";

export default function Account() {
  return (
    <div className="pagelayout">
      <div className="account-page">
        <p>
          Account
          <Profile></Profile>
        </p>
      </div>
    </div>
  );
}
