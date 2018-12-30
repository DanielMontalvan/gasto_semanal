import React, { Component } from "react";
import Header from "./Header";
import FormularioGasto from "./Formulario";
import ControlPresupuesto from "./ControlPresupuesto";
import "../Css/App.css";
import Listado from "./Listado";
import { validarPresupuesto } from "./helper";


class App extends Component {
  state = {
    presupuesto: 0,
    restante: 0,
    gastos: {}
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("Cual es el presupuesto?");
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({ presupuesto: resultado, restante: presupuesto });
    } else {
      this.obtenerPresupuesto();
    }
    this.error = "rojo ";
  };
 
  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
if (gasto.cantidadGasto>0){
  if (gasto.cantidadGasto<=this.state.restante){
    //tomar una copia de el state actual
    const gastos = { ...this.state.gastos };
    //agregar el gasto al objeto del
    gastos[`gasto${Date.now()}`] = gasto;

    //restar de el presupuesto
    this.restarPresupuesto((gasto.cantidadGasto));

    //ponerlo en state
    this.setState({ gastos: gastos}); 
  }else{
    alert("no tiene suficiente para realizar el gasto")
  }
}else{
  alert("La cantidad de el gasto debe ser mayor que ")
}
  };

  //restal de el presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    //leer el gasto
    this.setState({  restante:  this.state.restante - cantidad });
  };
  render() {
    const error = "";
    return (
      <div className="App">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto
                agregarGasto={this.agregarGasto}
                error={this.error}
              />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
