import React from 'react';

export class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>header</h1>
			</div>
		);
	}
}


export class Content extends React.Component{
	render(){
		return(
			<div>
				content goes here
				<p>more text</p>
			</div>
		);
	}
}

export class Content2 extends React.Component{
	render(){
		return(
			<div>
				<p>this is a seperate class in the App file</p>
			</div>
		);
	}
}