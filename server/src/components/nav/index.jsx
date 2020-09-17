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

import { Link } from "react-router-dom";

import {
  Button,
  Colors,
  Navbar,
  Alignment,
  ControlGroup,
  InputGroup,
} from "@blueprintjs/core";
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import { Avatar, Icon } from "rsuite";

// ASSETS & APP STYLES
import "../../styles/less/App.less";
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
    return <React.Fragment>{/* // Nothing */}</React.Fragment>;
  }

  renderRight() {
    return (
      <React.Fragment>
        <ControlGroup>
          <InputGroup></InputGroup>
          <Button>
            <Icon icon="search" size="lg" />
          </Button>
        </ControlGroup>
        <Link to="/notifications">
          &nbsp;&nbsp;
          <Icon style={{ color: "white" }} icon="bell" size="lg" />
          &nbsp;&nbsp;
        </Link>
        <Link to="/chat">
          &nbsp;&nbsp;
          <Icon style={{ color: "white" }} icon="comment" size="lg" />
          &nbsp;&nbsp;
        </Link>
        <Link to="/settings">
          &nbsp;&nbsp;
          <Icon style={{ color: "white" }} icon="cog" size="lg" />
          &nbsp;&nbsp;
        </Link>
        <Link to="/settings">
          <Avatar
            src={
              "https://www.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            }
          ></Avatar>
        </Link>
        <Link to="/logout">
          <Button
            style={{ color: "white" }}
            className="bp3-minimal"
            icon="log-out"
            text="Logout"
          />
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
