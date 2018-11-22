import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from "./Person/Person.js"


class App extends Component {
  state = {
    persons: [
      {id : "123123", name:"Ladan", age: 45 },
      {id : "1231", name:"Armin", age: 42 },
      {id : "23123", name:"Laleh", age: 37 },
      {id : "1123", name:"Ramin", age: 35 },
    ],

    otherProperty: "other value",
    showPersons : false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons----------> not a good idea, cause array is a reference type and anyc hange would be on a original array
    ///const persons = this.state.persons.slice(); ------------> //slice without  any arguments just create a copy of the element. 
    // So it is a better way to write a code
    // The other method is using the ... methods

    let persons = [...this.state.persons]
    persons.splice(personIndex, 1)              
    this.setState({persons : persons})          
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons : persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
    //console.log(this.state.persons[0])

  }

  render() {
    const style ={ //inline style, we used it in the button style, or add custome css in the App.css
      backgroundColor : "green",
      color : "white",
      font : "tahoma",
      border : '1.8px solid green',
      padding : '6px',
      cursor : 'pointer'
    };

    let persons = null; // prefered way of outputing the conditional content.
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
              name    = {person.name} 
              age     = {person.age}
              click   = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              key     = {person.id}  />
          })}
        </div>
      );
      style.backgroundColor = "#007bff";
    }

    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push(cssClasses.red); // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push(cssClasses.bold); // classes = ['red', 'bold']
    }
    if (this.state.persons.length <=0) {
      classes.push(cssClasses.underline); // classes = ['red', 'bold', 'underline']
    }  

    return (
      <div className={cssClasses.App}>
        <p className = {classes.join(' ')}>This is working!</p>
        <button 
          style = {style}
          onClick = {this.togglePersonsHandler}>
          change
        </button>
        {persons}
      </div>    // React.createElement("div", {className : 'App-header'}, React.createElement("h1", null, "Does this work now?"))
    );
  }
}

export default App;
