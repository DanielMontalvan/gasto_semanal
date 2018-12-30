import React ,{Component} from 'react';
import PropTypes from 'prop-types';


class FormularioGasto extends Component{
    //ref para los gastos del formulario 
    nombreGasto= React.createRef();
    cantidadGasto= React.createRef();
    crearGasto=(e)=>{
        //prevenir el default
    e.preventDefault();
       //crear el objeto
       const gasto={
        nombreGasto:(this.nombreGasto.current.value),
    cantidadGasto:(this.cantidadGasto.current.value)
}
this.props.agregarGasto(gasto)
;

//resetear el formulario 
e.currentTarget.reset();

}

    render(){
        return(
    <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
            </div>
            <br/>
            <label>{this.props.error}</label>
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
    </form>
        )
    }
}
FormularioGasto.propTypes={
agregarGasto:PropTypes.func.isRequired
}

export default FormularioGasto;