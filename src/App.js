import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state={
    persons : [
      {name : 'Max', age: 25},
      {name : 'Manu', age: 22},
      {name : 'Eliana', age: 15}
    ],
    showPersons: false
  }
  paintPerson = (person,index) =>{
    console.log(person,index)
    return  <Person key={index} name={person.name} age={person.age}
              changed={this.changeNameHandler}
    >{person.children}</Person>
  }
  changeNameHandler = (event) => {
    console.log(event)
    this.setState (
      {
      persons : [
        {name : 'Max', age: 251},
        {name : event.target.value, age: 222},
        {name : 'Eliana', age: 151, children: 'I am the children'}
      ]
    }
  )
  }
  switchNameHandler = () =>{
    console.log("Was Clicked!");
    this.setState(
      {
        //...this.state,
        persons : [
          {name : 'Max', age: 251},
          {name : 'Manu', age: 222},
          {name : 'Eliana', age: 151, children: 'I am the children'}
        ]
      }
    )
  }

  tooglePersonsHandler = () =>{
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      marginTop:'10px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = ( <div>
        {this.state.persons.map((person,index) => this.paintPerson(person,index)) }
      </div>);
    }
   
    return (
      <div className="App">
          <button style={style} onClick={this.tooglePersonsHandler}>{this.state.showPersons?'Hide':'Show'} Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
