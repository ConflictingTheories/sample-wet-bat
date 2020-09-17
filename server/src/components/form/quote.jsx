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

import { Avatar, Icon, Panel, Form, FormGroup, FormControl } from "rsuite";

// ASSETS & APP STYLES
import "../../styles/less/App.less";
import { collect, useProps, store } from "react-recollect";

import { create as createQuote } from "../../services/quotes";

// APP
class QuickQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.changeTour = this.changeTour.bind(this);
    this.changeDeparture = this.changeDeparture.bind(this);
    this.changeLead = this.changeLead.bind(this);
    this.changeDeptDate = this.changeDeptDate.bind(this);
    this.changeReturnDate = this.changeReturnDate.bind(this);
    this.changeTransportation = this.changeTransportation.bind(this);
    this.changeTravellers = this.changeTravellers.bind(this);
    this.changeArrival = this.changeArrival.bind(this);
    this.updateCost = this.updateCost.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.submitQuote = this.submitQuote.bind(this);

    this.store = props.store;
    this.state = {
      destination: null,
      departure: null,
      tour: null,
      lead: null,
      cost: null,
      departureDate: new Date(),
      returnDate: new Date(),
      travellers: 1,
      transport: "none",
    };
    // Watch for External Updates / Loads / Refreshes
  }

  // Randomize Cost
  updateCost() {
    // TODO: Actually Calculate Cost based on Tour / Etc.
    this.setState({ cost: (~~Math.random(10000)).toFixed(2) });
  }

  // Clear Entries back to Default
  clearForm() {
    this.setState({
      destination: null,
      departure: null,
      tour: null,
      lead: null,
      cost: null,
      departureDate: new Date(),
      returnDate: new Date(),
      travellers: 1,
      transport: "none",
    });
  }

  // Submit new Quote
  async submitQuote() {
    const {
      departureDate,
      returnDate,
      travellers,
      transport,
      destination,
      departure,
      tour,
      lead,
      cost,
    } = this.state;

    const quoteDetails = {
      departureDate,
      returnDate,
      travellers,
      transport,
      cost,
      tourId: tour,
      leadId: lead,
      deptId: departure,
      destId: destination,
    };
    await createQuote(quoteDetails);
    this.clearForm();
  }

  // Event Change Handlers
  changeLead(el) {
    const newLead = el.target.value;
    this.setState({ lead: newLead });
  }
  changeTour(el) {
    const { tours } = this.store;
    const newTour = el.target.value;
    const newDest = tours.filter((t) => t.id === newTour).destId;
    this.setState({ tour: newTour, destination: newDest }, () =>
      this.updateCost()
    );
  }
  changeDeparture(el) {
    const newLead = el.target.value;
    this.setState({ departure: newLead }, () => this.updateCost());
  }
  changeArrival(el) {
    const newLead = el.target.value;
    this.setState({ destination: newLead }, () => this.updateCost());
  }
  changeDeptDate(el) {
    const newLead = el.target.value;
    // TODO: Filter Tours by Availability
    this.setState({ departureDate: new Date(newLead) }, () =>
      this.updateCost()
    );
  }
  changeReturnDate(el) {
    const newLead = el.target.value;
    // TODO: Filter Tours by Availability
    this.setState({ returnDate: new Date(newLead) }, () => this.updateCost());
  }
  changeTravellers(el) {
    const newLead = el.target.value;
    // TODO: Filter Tours by Availability
    this.setState({ travellers: newLead }, () => this.updateCost());
  }
  changeTransportation(el) {
    const newLead = el.target.value;
    // TODO: Filter Tours by Availability
    this.setState({ transport: newLead }, () => this.updateCost());
  }

  // Component
  render() {

    // Guarantee Refresh
    useProps([
      store.tours,
      store.leads,
      store.quotes,
      store.airports,
    ]);

    const { airports, tours, leads } = store;
    const {
      destination,
      departure,
      tour,
      lead,
      departureDate,
      returnDate,
      travellers,
      transport,
    } = this.state;
    return (
      <Panel>
        <Form fluid>
          <FormGroup>
            <ControlGroup>
              <label>Select Tour</label>
              <select onChange={this.changeTour}>
                {tours &&
                  tours.map((t) => {
                    return t.id == tour ? (
                      <option selected value={t.id}>
                        {t.destination}
                      </option>
                    ) : (
                      <option value={t.id}>{t.destination}</option>
                    );
                  })}
              </select>
            </ControlGroup>
            <ControlGroup>
              <label>Select Lead</label>
              <select onChange={this.changeLead}>
                {leads &&
                  leads.map((l) => {
                    return l.id == lead ? (
                      <option selected value={l.id}>
                        {l.name}
                      </option>
                    ) : (
                      <option value={l.id}>{l.name}</option>
                    );
                  })}
              </select>
            </ControlGroup>
          </FormGroup>
          <FormGroup>
            <ControlGroup>
              <label>Departure Airport</label>
              <select onChange={this.changeDeparture}>
                {airports &&
                  airports
                    .filter((a) => a.id !== destination)
                    .map((a) => {
                      return a.id == departure ? (
                        <option selected value={a.id}>
                          {a.name}
                        </option>
                      ) : (
                        <option value={a.id}>{a.name}</option>
                      );
                    })}
              </select>
            </ControlGroup>
            <ControlGroup>
              <label>Arrival Airport</label>
              <select onChange={this.changeArrival}>
                {airports &&
                  airports
                    .filter((a) => a.id !== departure)
                    .map((a) => {
                      return a.id == destination ? (
                        <option selected value={a.id}>
                          {a.name}
                        </option>
                      ) : (
                        <option value={a.id}>{a.name}</option>
                      );
                    })}
              </select>
            </ControlGroup>
          </FormGroup>
          <FormGroup>
            <ControlGroup>
              <label>Departure Date</label>
              <InputGroup
                value={departureDate}
                onChange={this.changeDeptDate}
              />
            </ControlGroup>
            <ControlGroup>
              <label>Return Date</label>
              <InputGroup value={returnDate} onChange={this.changeReturnDate} />
            </ControlGroup>
          </FormGroup>
          <FormGroup>
            <ControlGroup>
              <label># of Travellers</label>
              <InputGroup
                type={"number"}
                value={travellers}
                onChange={this.changeTravellers}
              />
            </ControlGroup>
            <ControlGroup>
              <label>Transportation</label>
              <select onChange={this.changeTransportation}>
                <option value={"none"}>None</option>
                <option value={"rental"}>Rental</option>
                <option value={"own"}>Own Vehicle</option>
              </select>
            </ControlGroup>
          </FormGroup>
          <FormGroup>
            <ControlGroup>
              <Button onClick={this.submitQuote}>Submit Quote</Button>
            </ControlGroup>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

export default collect(QuickQuoteForm);
