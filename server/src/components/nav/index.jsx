/*                                            *\
** ------------------------------------------ **
**           Sample - Wet Bat PoC     	      **
** ------------------------------------------ **
**  Copyright (c) 2020 - Kyle Derby MacInnis  **
**                                            **
** Any unauthorized distribution or transfer  **
**    of this work is strictly prohibited.    **
**                                            **
**           All Rights Reserved.             **
** ------------------------------------------ **
\*                                            */

import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

// BLUEPRINT STYLES UI LIBRARY
import {
  Button,
  Colors,
  Blockquote,
  Navbar,
  Elevation,
  Alignment,
  Card,
} from "@blueprintjs/core";
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

// ASSETS & APP STYLES
import "../../styles/App.less";
import { collect } from "react-recollect";

// APP
class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.isLogin || false,
      renderBrand: props.renderBrand || this.renderBrand,
      renderBar: props.renderBar || this.renderBar,
      renderRight: props.renderRight || this.renderRight,
    };
  }

  renderBrand() {
    return (
      <React.Fragment>
        <Navbar.Heading>Wet Bat</Navbar.Heading>
        <Navbar.Divider />
      </React.Fragment>
    );
  }

  renderBar() {
    return (
      <React.Fragment>
        <Link to="/">
          <Button className="bp3-minimal" icon="home" text="Dashboard" />
        </Link>
        <Link to="/meetings">
          <Button className="bp3-minimal" icon="calendar" text="Meetings" />
        </Link>
        <Link to="/clients">
          <Button className="bp3-minimal" icon="office" text="Clients" />
        </Link>
        <Link to="/stakeholders">
          <Button className="bp3-minimal" icon="user" text="Stakeholders" />
        </Link>
      </React.Fragment>
    );
  }

  renderRight() {
    return (
      <React.Fragment>
        <Link to="/settings">
          <Button className="bp3-minimal" icon="badge" text="Account" />
        </Link>
        <Link to="/logout">
          <Button className="bp3-minimal" icon="log-out" text="Logout" />
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return this.state.isLogin ? (
      <Navbar style={{ color: Colors.WHITE, background: Colors.DARK_GRAY4 }}>
        {this.renderBrand()}
      </Navbar>
    ) : (
      <Navbar style={{ color: Colors.WHITE, background: Colors.DARK_GRAY4 }}>
        <Navbar.Group align={Alignment.LEFT}>
          {this.state.renderBrand()}
          {this.state.renderBar()}
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {this.state.renderRight()}
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default collect(TopNav);
