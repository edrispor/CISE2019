import React from "react";
import Albany from "../images/albanybranch.JPG";
import EastT from "../images/easttamakibranch.JPG";
import MtEden from "../images/mtedenbranch.JPG";

export default function StoreLocator() {
  return (
    <div className="pagelayout">
      <h1>Branch Locations</h1>
      <br />
      <div className="gridcontainer">
        <div className="grid-item">
          <h2>Mt Eden</h2>
          <p>
            445 Mount Eden Road, Mount Eden, Auckland.
            <br /> Contact: Stephen Beck
            <br /> Ph: 09 789 4455
            <img src={MtEden} alt="MtEden" width="320" height="340" />
          </p>
        </div>
        <div className="grid-item">
          <h2>East Tamaki</h2>
          <p>
            29 Kerwyn Ave, East Tamaki, Auckland 2013.
            <br /> Contact: Amy Anderson
            <br /> Ph: 09 789 4444
            <img src={EastT} alt="EastT" width="320" height="340" />
          </p>
        </div>
        <div className="grid-item">
          <h2>Albany</h2>
          <p>
            67 Kell Drive, Albany, Auckland 0632
            <br /> Contact: Chris Wilson
            <br /> Ph: 09 789 1458 <br />
            <br />
            <img src={Albany} alt="Albany" width="320" height="340" />
          </p>
        </div>
      </div>
    </div>
  );
}
