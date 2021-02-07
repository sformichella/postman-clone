import React, { Component } from "react";
import Url from "../../presentation/Url/Url";
import HTTPVerb from "../../presentation/HTTPVerb/HTTPVerb";
import Go from "../../presentation/Go/Go";
import Body from "../../presentation/Body/Body";

export default class Request extends Component {

  state = {
    response: [],
    requestUrl: "",
    body: "",
    verb: "GET",
    loading: false
  }

  render() {
    return (
      <form>
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
