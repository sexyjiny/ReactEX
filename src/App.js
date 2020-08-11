import React, { Component } from 'react';
import './App.css';
import MyName from './Myname';

let h1 = React.createElement('h1',null,'Hello World!')
ReactDOM.render(
  h1,
  document.getElementById('content')
)

export default h1;
