import React, { Component } from 'react';


class Command extends Component {

  render(){return(

	  <tr>
	   <td>{this.props.name}</td>
	   <td>{this.props.file}</td>
	  </tr>
	
)
}
}
export default Command;