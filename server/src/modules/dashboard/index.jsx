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
import { collect, batch } from "react-recollect";

// RSuite UI Library
import {
  Container,
  Content,
  Notification,
  Placeholder,
  Row,
  Col,
  Panel,
} from "rsuite";
// import "rsuite/dist/styles/rsuite-dark.css";
import "rsuite/dist/styles/rsuite-default.css";

// BLUEPRINT STYLES
import { Intent, Callout } from "@blueprintjs/core";
import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

// COMPONENTS
import TopNav from "../../components/nav";
import SideMenu from "../../components/menu";

// SERVICES
import * as Leads from "../../services/leads";
import * as Quotes from "../../services/quotes";
import * as Tours from "../../services/tours";

// ASSETS & APP STYLES
import "../../styles/less/App.less";
import Logo from "../../assets/wetbat.png";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.renderLeadsList = this.renderLeadsList.bind(this);
    this.renderQuotePanel = this.renderQuotePanel.bind(this);
    this.renderDashboardTabs = this.renderDashboardTabs.bind(this);
    this.renderQuotesList = this.renderQuotesList.bind(this);

    this.store = props.store;
    this.state = {
      showCallout: true,
      leads: props.store.leads || [],
      quotes: props.store.quotes || [],
      airports: props.store.airports || [],
      tours: props.store.tours || [],
      skipLoad: props.skipLoad || false,
    };
  }

  async componentDidMount() {
    // Fetch Datasets
    let leads = await Leads.getAll();
    let quotes = await Quotes.getAll();
    let airports = await Tours.getAirports();
    let tours = await Tours.getAll();

    console.log(leads, quotes, airports, tours);

    // Load into Store (for other page access)
    this.setState({ leads, quotes, airports, tours }, () =>
      batch(() => {
        this.store.leads = leads;
        this.store.quotes = quotes;
        this.store.airports = airports;
        this.store.tours = leads;
      })
    );

    // Provide example "Notification"
    setTimeout(
      () =>
        Notification.open({
          title: ~~(Math.random() * 20) + " new leads available",
          description: <Placeholder.Paragraph width={320} rows={3} />,
        }),
      ~~(Math.random() * 10000)
    );

    // Hide Callout Display
    setTimeout(() => {
      this.setState({ showCallout: false });
    }, 3000);

    // TODO: Fetch User Info

    // TODO: Calculate Revenue

    // TODO: Calculate Etc..
  }

  renderQuotePanel() {
    return <React.Fragment>{/* //Form  */}</React.Fragment>;
  }

  renderLeadsList() {
    const { leads } = this.state;
    return (
      <React.Fragment>
        <ul>
          {leads.map((x) => (
            <li>x</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  renderQuotesList() {
    const { quotes } = this.state;
    return (
      <React.Fragment>
        <ul>
          {quotes.map((x) => (
            <li>x</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  renderDashboardTabs() {
    const { showCallout } = this.state;
    return (
      <React.Fragment>
        {showCallout && (
          <Callout intent={Intent.SUCCESS} title={"Wet Bat Loaded"}></Callout>
        )}
        <Row>
          <Col>
            <Panel bordered>
              <Row>
                <Col md={8}>
                  <Placeholder.Paragraph rowHeight={10} />
                </Col>
                <Col>
                  <img src={Logo} />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Panel bordered header="Quick Quote">
              {" "}
              <Placeholder.Paragraph width={320} rows={5} />
              {this.renderQuotePanel()}
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="Pending Quotes">
              {" "}
              <Placeholder.Paragraph width={320} rows={5} />
              {this.renderQuotesList()}
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="New Leads">
              {" "}
              <Placeholder.Paragraph width={320} rows={5} />
              {this.renderLeadsList()}
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={16}>
            <Panel bordered header="Popular Destinations &amp; Packages">
              {" "}
              <Placeholder.Paragraph width={780} rows={5} />
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="Team Chat">
              {" "}
              <Placeholder.Paragraph width={320} rows={5} />
            </Panel>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col md={8}>
            <Panel bordered header="Revenue">
              {" "}
              <Placeholder.Paragraph width={320} rows={3} />
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="Potential Revenue">
              {" "}
              <Placeholder.Paragraph width={320} rows={3} />
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="Close Ratios">
              {" "}
              <Placeholder.Paragraph width={320} rows={3} />
            </Panel>
          </Col>
        </Row>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        <SideMenu
          activeKey={"1"}
          style={{ flex: 1, flexShrink: 1, flexGrow: 0 }}
        />
        <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <Container>
            <TopNav isLogin={false} />
            <Content>{this.renderDashboardTabs()}</Content>
          </Container>
        </div>
        {/* MEETING sidebar */}
      </div>
    );
  }
}

export default collect(Dashboard);
