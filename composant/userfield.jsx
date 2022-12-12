import React from "react";
import UserParam from "./userparam";
import UserContact from "./usercontact";

class UserField extends React.Component{
    render(){
        return (
            <div id="userfield">
                <UserParam />
                <UserContact setMessageField={this.props.setMessageField}/>
            </div>
        );
    }
}

export default UserField;