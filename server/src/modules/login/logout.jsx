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
import { collect } from "react-recollect";

// RSuite UI Library
import {
  Container,
  Header,
  Content,
  Sidebar,
  FlexboxGrid,
  Panel,
} from "rsuite";
import "rsuite/dist/styles/rsuite-dark.css";

// APP STYLES
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../../styles/less/App.less";

// ASSETS
import Logo from "../../assets/logo.svg";

// Services
import { logout } from "../../services/auth";

// Colors
import colors from "../../styles/colors";

class Logout extends React.Component {
  async componentDidMount() {
    try {
      await logout();
    } finally {
      const { from } = this.props.location.state || {
        from: { pathname: "/login" },
      };
      this.props.history.push(from);
    }
  }
  render() {
    return (
      <Container
        style={{
          background: colors.primaryGrad,
        }}
      >
        <Header></Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={24}>
              <div
                className="app-splash"
                style={{ backgroundColor: "transparent" }}
              >
                <Panel bodyFill>
                  <Container style={{ backgroundColor: colors.secondaryColor }}>
                    <Sidebar style={{ width: "320px" }}>
                      <img
                        src={Logo}
                        height="320"
                        style={{
                          background: colors.secondaryGrad,
                        }}
                      />
                    </Sidebar>
                    <Container style={{ width: "320px" }}>
                      <Content style={{ padding: "1em" }}>
                        Please Wait - Returning to Login
                      </Content>
                    </Container>
                  </Container>
                </Panel>
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    );
  }
}

export default collect(Logout);
