import React, { Component } from "react";

export default class Filter extends Component {
  onclickproduct(product_id) {
    var resultID = this.state.maintenance.findIndex(
      entry => entry.product_id === product_id
    );
    localStorage.setItem("maintenanceID", resultID);
    console.log(localStorage.getItem("maintenanceID"));
  }
  render() {
    return (
      <div>
        <button width="135px" color="#F4FF77" radius="50px" class="btnitem">
          Filter by price
        </button>
      </div>
    );
  }
}
