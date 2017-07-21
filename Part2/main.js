import React from 'react';
import ReactDOM from 'react-dom';
import {Header,Content,Content2} from './App';

ReactDOM.render(
<Header />, document.querySelector('header'));

ReactDOM.render(
<Content />, document.querySelector('#content'));

ReactDOM.render(
<Content2 />, document.querySelector('#content2'));
