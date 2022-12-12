import React from "react";
import Img from "./img";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(this.props.nbre == 1){
            for(let i=0; i<document.getElementsByClassName("contact").length; i++){
                document.getElementsByClassName("contact")[i].style.backgroundColor = "white";
            }
        
            e.currentTarget.style.backgroundColor = 'rgba(85,102,109,0.5)';
            this.props.setMessageField(this.props.title);
        }  
    }

    render(){
        return (
            <div nbre={this.props.nbre} className="contact" onClick={this.handleClick}>
                <Img src={this.props.src} />
                <h5>{this.props.title}</h5>
                <p>{this.props.desc}</p>
            </div>
            
        );
    }
}

export default Contact;