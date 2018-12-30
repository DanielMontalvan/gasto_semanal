import React, { Component } from "react";
import { revisarPresupuesto } from "./helper";
class Restante extends Component {
  render() {
    let presupuesto = this.props.presupuesto;
    let restante = this.props.restante;
    let re= revisarPresupuesto(presupuesto,restante)
    return(
    <div>
        clase: {re}
        <br/>
        Restante: {restante}</div>
)  }
}

export default Restante;
