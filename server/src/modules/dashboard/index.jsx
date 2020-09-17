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
import { collect, batch, store, useProps} from "react-recollect";

// RSuite UI Library
import {
  Container,
  Content,
  Notification,
  Placeholder,
  Row,
  Col,
  Panel,
  Table,
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
import QuickQuoteForm from "../../components/form/quote";

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
    try {
      let leads = await Leads.getAll();
      let quotes = await Quotes.getAll();
      let airports = await Tours.getAirports();
      let tours = await Tours.getAll();
      console.log(leads, quotes, airports, tours);
      // Load into Store (for other page access)
      batch(() => {
        store.leads = leads;
        store.quotes = quotes;
        store.airports = airports;
        store.tours = tours;
      });
      this.setState({ leads, quotes, airports, tours });
    } catch (e) {
      console.error(e);
    }

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
    return (
      <React.Fragment>
        <QuickQuoteForm />
      </React.Fragment>
    );
  }

  renderLeadsList() {
    const { leads } = store;
    useProps([leads]);
    return (
      <React.Fragment>
        <Table
          virtualized
          height={400}
          data={leads}
          onRowClick={(data) => {
            console.log(data);
            this.setState({ lead: data.id });
          }}
        >
          <Table.Column width={70} align="center" fixed>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
          <Table.Column width={130}>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.Cell dataKey="name" />
          </Table.Column>
          <Table.Column width={130}>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.Cell dataKey="phone" />
          </Table.Column>
          <Table.Column width={200}>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.Cell dataKey="email" />
          </Table.Column>
          <Table.Column width={200}>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.Cell dataKey="city" />
          </Table.Column>
          <Table.Column width={200}>
            <Table.HeaderCell>Preferred Method</Table.HeaderCell>
            <Table.Cell dataKey="preferredContact" />
          </Table.Column>
        </Table>
      </React.Fragment>
    );
  }

  renderToursList() {
    const { tours } = store;
    useProps([tours]);
    return (
      <React.Fragment>
        <Table
          virtualized
          height={400}
          data={tours}
          onRowClick={(data) => {
            console.log(data);
            this.setState({ lead: data.id });
          }}
        >
          <Table.Column width={70} align="center" fixed>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
          <Table.Column width={130}>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.Cell dataKey="destination" />
          </Table.Column>
          <Table.Column width={130}>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.Cell dataKey="description" />
          </Table.Column>
        </Table>
      </React.Fragment>
    );
  }

  renderQuotesList() {
    const { quotes } = store;
    useProps([quotes]);
    return (
      <React.Fragment>
        <Table
          virtualized
          height={400}
          data={quotes}
          onRowClick={(data) => {
            console.log(data);
          }}
        >
          <Table.Column width={70} align="center" fixed>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.Cell dataKey="id" />
          </Table.Column>
        </Table>
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
              {this.renderQuotePanel()}
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="Pending Quotes">
              {this.renderQuotesList()}
            </Panel>
          </Col>
          <Col md={8}>
            <Panel bordered header="New Leads">
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
      </div>
    );
  }
}

export default collect(Dashboard);
