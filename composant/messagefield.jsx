import React from "react";

class MessageField extends React.Component{
    render(){
        return (
            <div className="messageField">
                <div className="container">
                    {this.props.value}
                    <div className="space"></div>
                </div>
                
            </div>
        );
    }
}

export default MessageField;