import React from 'react'
//import Content from './Content'

function User(props) {
    const {payload} = props;
    const listItems = payload.items.map((item) => <li>{item}</li>); 
    return (
        <ul>{listItems}</ul>);
}
    


export default User