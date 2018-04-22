import React from 'react'
import './Person.css';

const Person = (props) => {
    
        return (
                <div className="Person">
                    <h2>My name is {props.name} and i'm {props.age} years old</h2>
                    <input type="text" onChange={props.changed} value={props.name}/>
                    <h3>{props.children}</h3>
                    <button onClick={props.click}>Remove user</button>      
                </div>
        )
}
export default Person;