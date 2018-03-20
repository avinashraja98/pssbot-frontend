import React, { Component } from "react";

class AddCommand extends Component {

  constructor(props) {
    super(props);
    this.state = {
		pressed: false,
		commandName:"",
		valid: false
		};

    this.addCommand = this.addCommand.bind(this);
    this.cancel = this.cancel.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

addCommand(){

  this.setState({pressed:true});

}

cancel(){

  this.setState({pressed:false});

}

validateForm(e){

  //regex check//
  this.setState({commandName:e.target.value});

}

render(){

if(this.state.pressed){
return(
<form method="post" action="http://pssbot.avinashraja.com/api/commands" encType="multipart/form-data">
 Command Name: <input type="text" onChange={this.validateForm} value={this.state.commandName} name="CommandName" required/><br/>

   <input type="file" id="file" name="Filename" required/><br/>

<input type="submit" value="Add Command" disabled={!this.state.valid}/><br/>

<button onClick={this.cancel}>Cancel</button>

</form>
);
}else{

return(
<button onClick={this.addCommand}> Add Clip</button>
);
}
}
}

export default AddCommand;