import React from "react";
import HeaderMessage from "./headermessage";
import FooterMessage from "./footermessage";

import user from "../icon/user.png";
import param from "../icon/param.png";
import MessageField from "./messagefield";

class UserMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {"value":[]}
        this.getValue = this.getValue.bind(this);
    }

    getValue(value){
        this.setState(function(state) {
            const element = [<li key={this.state.value.length}><p>{value}</p></li>];
            let listElement = state.value.concat(element);
            return (
                {"value": listElement}
            );
        });
        for(let i=0; i<document.getElementsByClassName("messageField").length; i++){
            document.getElementsByClassName("messageField")[i].scrollTo(0, 1000); 
        }
        
    }    

    render(){
        return (
            <div className="usermessage" id={this.props.utilisateur}>
                <HeaderMessage user={user} utilisateur={this.props.utilisateur} param={param} />
                <MessageField value={this.state.value}/>
                <FooterMessage getValue={this.getValue}/>
            </div>
        );
    }
}

export default UserMessage;