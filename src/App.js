import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Components/Person/Person';

class App extends Component {
  state={
    persons : [
      { id:'1',name : 'Max', age: 25},
      { id:'2',name : 'Manu', age: 22},
      { id:'3',name : 'Eliana', age: 15}
    ],
    showPersons: false
  }
  paintPerson = (person,index) =>{
    return  <Person key={person.id} name={person.name} age={person.age}
              changed={(event) => this.changeNameHandler(event,person.id)}
              click ={()=>this.deletePersonHandler(index)}
    >{person.children}</Person>
  }
  changeNameHandler = (event, id) => {
    console.log(event)
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState (
      {
      persons
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

  deletePersonHandler = (personIndex)=>{
    // const { persons } = this.state;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons})
  }

  tooglePersonsHandler = () =>{
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {
    const style= {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      marginTop:'10px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if(this.state.showPersons){
      persons = ( <div>
        {this.state.persons.map((person,index) => this.paintPerson(person,index)) }
      </div>);
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
   let classes =[];
   if(this.state.persons.length<=2){
     classes.push('red');
   }
   if(this.state.persons.length<=1){
     console.log("Debe colocarlo negrita");
     classes.push('bold');
   }

    return (
      <div className="App">
        <p className={classes.join(' ')}>This really working!</p>  
          <button style={style} onClick={this.tooglePersonsHandler}>{this.state.showPersons?'Hide':'Show'} Persons</button>
          {persons}
      </div>
    );
  }
}

export default Radium(App);
