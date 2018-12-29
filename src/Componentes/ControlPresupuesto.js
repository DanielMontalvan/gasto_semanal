import React ,{Component} from 'react'
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends Component{
render(){
return (
<div>
<Presupuesto presupuesto={this.state.presupuesto}/>
         <Restante restante={this.state.restante}/>

</div>
)
}
}
export default ControlPresupuesto;