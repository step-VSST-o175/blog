import React from 'react';

const UserList = (props) => {
    console.log('props', props);
    return (
        <div>
            <ul>
                {
                    props.arr.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UserList;
