import React, { Component } from "react";
import Url from "../../presentation/Url/Url";
import HTTPMethod from "../../presentation/HTTPMethod/HTTPMethod";
import Go from "../../presentation/Go/Go";
import Body from "../../presentation/Body/Body";
import Response from "../../presentation/Response/Response";

export default class Request extends Component {

  state = {
    response: "",
    url: "",
    body: null,
    Method: "GET",
    loading: false
  }

  formChange = ({ target }) => {
    const { value, name } = target;
    
    this.setState({ [name]: value });
  }

  formSubmit = e => {
    e.preventDefault();

    const { url, method, body } = this.state;

    fetch(url, { method, body })
      .then(res => res.json())
      .then(json => JSON.stringify(json))
      .then(response => this.setState({ response }));
  };

  render() {

    const { formChange, formSubmit } = this;
    const { response } = this.state;

    return (
      <>
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
        <Response response={response}/>
      </>
    );
  }
}
