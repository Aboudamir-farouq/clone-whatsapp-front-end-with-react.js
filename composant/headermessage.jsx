import React from "react";
import Contact from "./contact";
import Icon from "./icon";

class HeaderMessage extends React.Component{
    render(){
        return (
            <div className="headerMessage">
                <Contact nbre="0" src={this.props.user} title={this.props.utilisateur} desc="description de l'utilisateur"/>
                <Icon src={this.props.param}/>
            </div>
        );
    }
}

export default HeaderMessage;