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
    const { value, name } = target;
    
    this.setState({ [name]: value });
  }

  formSubmit = e => {
    e.preventDefault();

    
  };

  render() {

    const { formChange, formSubmit } = this;

    return (
      <form onChange={formChange} onSubmit={formSubmit}>
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
