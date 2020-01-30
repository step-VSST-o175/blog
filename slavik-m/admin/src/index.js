import React from 'react';
import { render } from 'react-dom';

import App from './App.jsx';

const str = "someStr";

function onClick (ev) {
    console.log('click', ev);
}

render(<App title="some title" str={str} someNum={20} someObj={ { a: 'ddd' } } arr={ [1, 2, 3] } onClick={onClick} selected />, document.getElementById('root'));
