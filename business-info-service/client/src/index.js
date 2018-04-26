import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app.jsx'
const info = require('./app.jsx');
const Header = info.Header;
const SideBar = info.SideBar;
const MainInfo = info.MainInfo;

ReactDOM.render(<MainInfo />,document.getElementById('MainInfo'))
ReactDOM.render(<SideBar />,document.getElementById('SideBar'))
ReactDOM.render(<Header  />,document.getElementById('Header'));
