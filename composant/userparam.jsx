import React from "react";
import Img from './img';
import Icon from "./icon";

import user from '../icon/user.png';
import refresh from '../icon/refresh.png';
import profil from '../icon/profil.png';
import param from '../icon/param.png';

class UserParam extends React.Component{
    render(){
        return (
            <div id="userparam">
                <Img src={user}/>
                <Icon src={refresh}/> 
                <Icon src={profil}/> 
                <Icon src={param}/>   
            </div>
        );
    }
}

export default UserParam;