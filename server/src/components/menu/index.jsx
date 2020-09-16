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

// RSuite UI Library
import {
  Sidenav,
  Toggle,
  Navbar,
  Nav,
  Dropdown,
  Icon,
  Sidebar,
  Row,
  Col,
} from "rsuite";

import AuthHelper from "../../helpers/authHelper";
import { collect, batch } from "react-recollect";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;

    this.state = {
      expanded: false,
      activeKey: props.activeKey || "1",
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentDidMount() {
    this.setState({
      expanded: this.store.expanded || false,
    });
  }
  handleToggle() {
    let expanded = this.store.expanded ? false : true;
    batch(() => {
      this.store.expanded = expanded;
    });
    this.setState({ expanded: expanded });
  }
  render() {
    const { expanded, activeKey } = this.state;
    return AuthHelper.isAuthenticated() ? (
      <Sidenav
        expanded={expanded}
        style={{
          maxWidth: "200px",
          minWidth: expanded ? "200px" : "56px",
        }}
      >
        <Sidenav.Header>
          <div
            style={{
              display: "inline-block",
              width: "100%",
              height: "56px",
              marginTop: "-5px",
              padding: "1px 0 0 0",
              background: "linear-gradient(45deg,indigo,black)",
            }}
          >
            <img
              style={{ width: "56px" }}
              src={require("../../assets/logo.svg")}
            />
            {expanded && (
              <div
                style={{
                  display: "inline-block",
                  fontSize: "22px",
                  fontFamily: "amerika-sans",
                }}
              >
                Wet Bat
              </div>
            )}
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav appearance="subtle">
            <Link>
              <Nav.Item
                onSelect={this.handleToggle}
                icon={
                  expanded ? (
                    <Icon icon="align-left" />
                  ) : (
                    <Icon icon="align-justify" />
                  )
                }
              >
                Collapse
              </Nav.Item>
            </Link>
            <Link to="/">
              <Nav.Item
                active={"1" == activeKey}
                eventKey="1"
                icon={<Icon icon="dashboard" />}
              >
                Home
              </Nav.Item>
            </Link>
            <Link to="/quotes">
              <Nav.Item
                active={"2" == activeKey}
                eventKey="2"
                icon={<Icon icon="calendar" />}
              >
                Quote
              </Nav.Item>
            </Link>
            <Link to="/leads">
              <Nav.Item
                active={"3" == activeKey}
                eventKey="3"
                icon={<Icon icon="building" />}
              >
                Leads
              </Nav.Item>
            </Link>
            <Link to="/tours">
              <Nav.Item
                active={"4" == activeKey}
                eventKey="4"
                icon={<Icon icon="group" />}
              >
                Tours
              </Nav.Item>
            </Link>
          </Nav>
          <Nav appearance="subtle">
            <Link to="/invoices">
              <Nav.Item
                active={"5" == activeKey}
                eventKey="5"
                icon={<Icon icon="dashboard" />}
              >
                Home
              </Nav.Item>
            </Link>
            <Link to="/analytics">
              <Nav.Item
                active={"6" == activeKey}
                eventKey="6"
                icon={<Icon icon="calendar" />}
              >
                Quote
              </Nav.Item>
            </Link>
            <Link to="/teams">
              <Nav.Item
                active={"7" == activeKey}
                eventKey="7"
                icon={<Icon icon="building" />}
              >
                Leads
              </Nav.Item>
            </Link>
            <Link to="/admin">
              <Nav.Item
                active={"4" == activeKey}
                eventKey="4"
                icon={<Icon icon="group" />}
              >
                Tours
              </Nav.Item>
            </Link>
          </Nav>
          <Nav appearance="subtle">
            <Link to="/support">
              <Nav.Item
                active={"5" == activeKey}
                eventKey="5"
                icon={<Icon icon="gear" />}
              >
                Settings
              </Nav.Item>
            </Link>
            <Link to="/logout">
              <Nav.Item
                active={"6" == activeKey}
                eventKey="6"
                icon={<Icon icon="sign-out" />}
              >
                Logout
              </Nav.Item>
            </Link>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    ) : null;
  }
}

export default collect(SideMenu);
