import React from 'react';
import './App.css';
import UserField from './composant/userfield';
import UserMessage from './composant/usermessage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.listUserMessage = [];
    this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.setMessageField = this.setMessageField.bind(this);
  }
  setMessageField(utilisateur){
    for(let i=1; i<document.getElementsByClassName("usermessage").length; i++){
      document.getElementsByClassName("usermessage")[i].style.zIndex = 0;
    }
    document.getElementById(utilisateur).style.zIndex = 10;
  }
    
  render(){
    this.listUserMessage = this.numbers.map((i) => <UserMessage key={i} utilisateur={"utilisateur " + i}/>);
    return (
      <div className="App">
        <UserField setMessageField={this.setMessageField}/>
        {this.listUserMessage}
        
      </div>
    );
  }
  
}

export default App;
