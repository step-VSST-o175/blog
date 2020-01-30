import React from 'react';
import UserList from './UserList.jsx';

const App = (props) => {
    console.log('props', props);
    return (
        <div>
            <h1 onClick={props.onClick}>Hello react!!!!</h1>
            <h2 className="sds" style={ { color: 'red' } }>{props.title}</h2>
            <span>{props.str}</span>
            <span>{props.someNum}</span>
            <span>{props.someObj.a}</span>
            <ul>{
                props.arr.map(item => (
                    <li>{item}</li>
                ))
            }</ul>
            {
                props.selected ? <p>Selected</p> : <div>not selected</div>
            }
            <UserList arr={props.arr} />
        </div>
    );
}

export default App;
