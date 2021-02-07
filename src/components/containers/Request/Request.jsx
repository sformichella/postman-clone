import React, { Component } from "react";
import Url from "../../presentation/Url/Url";
import HTTPMethod from "../../presentation/HTTPMethod/HTTPMethod";
import Go from "../../presentation/Go/Go";
import Body from "../../presentation/Body/Body";

export default class Request extends Component {

  state = {
    response: [],
    url: "",
    body: "",
    Method: "GET",
    loading: false
  }

  formChange = ({ target }) => {
    const { value, name } = target;
    
    this.setState({ [name]: value });
  }

  formSubmit = e => {
    e.preventDefault();

    const { url, Method, body } = this.state;

    fetch(url, {
      method: Method
    });
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
          <HTTPMethod method="GET"/>
          <HTTPMethod method="POST"/>
          <HTTPMethod method="PUT"/>
          <HTTPMethod method="DELETE"/>
        </div>
        <Body/>
      </form>
    );
  }
}
