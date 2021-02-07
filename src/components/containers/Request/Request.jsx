import React, { Component } from "react";
import Url from "../../presentation/Url/Url";
import HTTPVerb from "../../presentation/HTTPVerb/HTTPVerb";
import Go from "../../presentation/Go/Go";
import Body from "../../presentation/Body/Body";

export default class Request extends Component {

  state = {
    response: [],
    url: "",
    body: "",
    verb: "GET",
    loading: false
  }

  formChange = ({ target }) => {
    const { value, id, name } = target;
    
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onChange={this.formChange}>
        <div>
          <Url/>
          <Go/>
        </div>
        <div>
          <HTTPVerb method="GET"/>
          <HTTPVerb method="POST"/>
          <HTTPVerb method="PUT"/>
          <HTTPVerb method="DELETE"/>
        </div>
        <Body/>
      </form>
    );
  }
}
