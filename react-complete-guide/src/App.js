import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person.js"


class App extends Component {
  state = {
    persons: [
      {name:"Ladan", age: 45 },
      {name:"Armin", age: 42 },
      {name:"Laleh", age: 37 },
      {name:"Ramin", age: 35 },
    ],
    otherProperty: "other value"
  }
  
  changeHandler = (newName) =>{ // by the clicking this button, the event change the DOM and then re-render the page.
    // console.log("was clicked")
    // DONOT DO THIS : this.state.persons[0].name = "LOLO"
    this.setState({ // we just change the persons property
      persons: [
        {name: newName, age: 45 },
        {name:"Armin", age: 42 },
        {name:"Laleh", age: 37 },
        {name:"Ramin_Old", age: 40 },
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick = {this.changeHandler.bind(this, "LADAN!")}>change</button> 
          
          <Person 
            name = {this.state.persons[0].name} 
            age={this.state.persons[0].age}> 
          </Person>
          
          <Person 
            name = {this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click = {this.changeHandler.bind(this, 'Ladan')}>
              
          </Person>
          
          <Person 
            name = {this.state.persons[2].name} 
            age={this.state.persons[2].age}> 
          </Person>
          
          <Person 
            name = {this.state.persons[3].name} 
            age={this.state.persons[3].age}> 
          </Person>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
      // React.createElement("div", {className : 'App-header'}, React.createElement("h1", null, "Does this work now?"))
    );
  }
}

export default App;
