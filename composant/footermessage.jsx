import React from "react";

class FooterMessage extends React.Component{
    constructor(props){
          super(props);
          this.state = {"value": ""};
          this.handleChange = this.handleChange.bind(this);
          this.handleKeyUp = this.handleKeyUp.bind(this);    
    }

    handleChange(e){
            this.setState({"value": e.target.value});
    }

    handleKeyUp(e){
        if(e.key == "Enter"){
            this.props.getValue(this.state.value);
            this.setState({"value": ""});
        }
    }

    render(){
        
        
        return(
            <div className="footerMessage">
                <input type="text" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default FooterMessage;