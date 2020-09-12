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

import { Component } from "react";
import { collect } from "react-recollect";

import { WBPanel } from "./index";

class ListPanel extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <WBPanel></WBPanel>;
  }
}

export default collect(ListPanel);
