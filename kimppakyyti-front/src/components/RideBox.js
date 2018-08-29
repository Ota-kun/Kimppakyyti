import React, { Component } from "react";
import RideList from "./RideList";

const urlGetRides =
  "https://kimppakyytiapi.azurewebsites.net/api/ride/getallrides";

class RideBox extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  GetEveryRide = () => {
    fetch(urlGetRides)
      .then(result => result.json())
      .then(data => {
        this.setState({ list: data });
      });
  };

  render() {
    return (
      <div>
        <RideList rides={this.state.list} />
      </div>
    );
  }
}

export default RideBox;
