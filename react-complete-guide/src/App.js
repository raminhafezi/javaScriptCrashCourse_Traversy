import React, { Component } from 'react';
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
    otherProperty: "other value",
    showPersons : false
  }
  
  changeHandler = (newName) =>{ // by the clicking this button, the event change the DOM and then re-render the page.
    // console.log("was clicked")
    // DONOT DO THIS : this.state.persons[0].name = "LOLO"
    this.setState({ // we just change the persons property setState is the method of the Component
      persons: [
        {name: newName, age: 45 },
        {name:"Armin", age: 42 },
        {name:"Laleh", age: 37 },
        {name:"Ramin_Old", age: 40 },
      ]
    })
  };

  namedChangedHandler = (event) => {
    this.setState({ // we just change the persons property setState is the method of the Component
      persons: [
        {name: "Ladan", age: 45 },
        {name:"Armin", age: 42 },
        {name:"Laleh", age: 37 },
        {name: event.target.value, age: 40 },
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});

  }

  render() {
    const style ={ //inline style, we used it in the button style, or add custome css in the App.css
      backgroundColor : "white",
      font : "tahoma",
      border : '1.8px solid orange',
      padding : '6px',
      cursor : 'pointer'
    };

    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
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
=======
          <button 
            style = {style}
            onClick = {this.togglePersonsHandler}>
            change
          </button>
          {
            this.state.showPersons === true ? 
              <div >
                <Person // must have Upper case otherwise the react confused with the html tag element. so Div is also acceptable
                  name = {this.state.persons[0].name} 
                  age  = {this.state.persons[0].age}/> 
                    
                <Person // click is the reference to the Person.js, that. we defined the element there but handle the event here via binding the event.
                  name  = {this.state.persons[1].name} 
                  age   = {this.state.persons[1].age}
                  click = {this.changeHandler.bind(this, 'Ladan')}/>

                <Person 
                  name = {this.state.persons[2].name} 
                  age  = {this.state.persons[2].age}/> 
                <Person 
                  name = {this.state.persons[3].name} 
                  age  = {this.state.persons[3].age}
                  changed = {this.namedChangedHandler}/>
>>>>>>> 3d57ec8cd0fb183d8190c80964eaab572ff5a712
              
              </div> 
            :null
          }     
      </div>
      // React.createElement("div", {className : 'App-header'}, React.createElement("h1", null, "Does this work now?"))
    );
  }
}

export default App;
