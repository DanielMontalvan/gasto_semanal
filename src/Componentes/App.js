import React, { Component } from 'react';
import Header from './Header';
import FormularioGasto from './Formulario';
import '../Css/App.css';
import Listado from './Listado';
import {validarPresupuesto} from './helper';
import {revisarPresupuesto} from './helper';

class App extends Component {
state={
  presupuesto:0,
  restante:0,
  gastos:{}
}

componentDidMount(){
  this.obtenerPresupuesto();
}

obtenerPresupuesto=()=>{
  let presupuesto= prompt("Cual es el presupuesto?");
  let resultado=validarPresupuesto(presupuesto);
  if (resultado){
this.setState({presupuesto:presupuesto,
  restante:presupuesto})
  }else{
    this.obtenerPresupuesto();
  }
  this.error="rojo ";
}

  //agregar un nuevo gasto al state 
agregarGasto=gasto=>{
  //tomar una copia de el state actual
const gastos={...this.state.gastos}
//agregar el gasto al objeto del
gastos[`gasto${Date.now()}`]=gasto;
//ponerlo en state
let restante= this.state.restante-gasto.cantidadGasto
this.setState({gastos:gastos,restante:restante})
}
  render() {
const error="";
    return (
      <div className="App">
      <Header titulo="Gasto Semanal"/>
      <div className='contenido-principal contenido'>
      <div className='row'>
        <div className='one-half column'>
         <FormularioGasto 
         agregarGasto={this.agregarGasto}
         error ={this.error}/>
         </div>
         <div className='one-half column'>
          <Listado gastos={this.state.gastos}/>
         </div>

      </div>
      </div>
      </div>
    );
  }
}

export default App;
