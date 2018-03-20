import React, { Component } from 'react';


class Command extends Component {

	render() {
		return (

			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.file}</td>
				<td><audio controls><source src={"http://pssbot.avinashraja.com/audio/"+this.props.file} type="audio/mpeg"/>Audio tag not supported</audio></td>
			</tr>

		)
	}
}
export default Command;
