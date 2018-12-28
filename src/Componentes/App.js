import React, { Component } from 'react';
import Header from './Header';
import FormularioGasto from './Formulario';
import '../Css/App.css';
import Listado from './Listado';

class App extends Component {

state={
  presupuesto:0,
  restante:0,
  gastos:{}
}
  //agregar un nuevo gasto al state 
agregarGasto=gasto=>{
//tomar una copia de el state actual
const gastos={...this.state.gastos}
//agregar el gasto al objeto del
gastos[`gasto${Date.now()}`]=gasto;
//ponerlo en state
this.setState({gastos})
}
  render() {
    return (
      <div className="App">
      <Header titulo="Gasto Semanal"/>
      <div className='contenido-principal contenido'>
      <div className='row'>
        <div className='one-half column'>
         <FormularioGasto 
         agregarGasto={this.agregarGasto}/>
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
