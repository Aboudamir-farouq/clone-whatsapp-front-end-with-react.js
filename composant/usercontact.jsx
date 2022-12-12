import React from "react";
import Contact from "./contact";

import user from "../icon/user.png";


class UserContact extends React.Component{
    render(){
        let listContact = [];
        for(let i=1; i<12; i++){
            listContact.push(<Contact key={i} nbre="1" src={user} title={"utilisateur "+i} desc={"description de l'utilisateur "+i} setMessageField={this.props.setMessageField}/>)
        }

        return (
            <div id="usercontact">
                <div id="listContact">
                    {listContact}
                </div>
                
            </div>
        );
    }
}

export default UserContact;