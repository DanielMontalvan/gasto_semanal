import React ,{Component} from 'react';
import PropTypes from 'prop-types';
class Presupuesto extends Component{
    render(){
        return (
            <div>Presupuesto: {this.props.presupuesto}</div>
        )
    }
}

Presupuesto.propTypes={
    presupuesto:PropTypes.number.isRequired
    }
    


export default Presupuesto;