import React, { Component } from 'react';
import Command from './Command';
import style from '../Styles/Style';

class CommandList extends Component {

  render(){
    
   let commands = this.props.data.map(command=>{
      
     return(
	<Command name={command.Commandname} file={command.Filename} key={command._id} />
	)

})


return(<div style={style.commandList}>
	<table>
	<tbody>
	<tr>
	<th>Command</th>
	<th>Filename</th>
	</tr>
{commands}
</tbody>
</table>

</div>)
}

}

export default CommandList;