import React, { Component } from "react";
import Header from "./Header";
import "./style.scss";
import { container, header, sidebar, body } from "./style.module.scss";

class GooglePlay extends Component {
  render() {
    return (
      <div className={container}>
        <header className={header}>Header</header>
        <div className={sidebar}>Sidebar</div>
        <div className={body}>Body</div>
      </div>
    );
  }
}

export default GooglePlay;
