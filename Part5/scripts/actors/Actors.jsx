import React from 'react';
import ActorLinks from './ActorLinks';

export default class Actors extends React.Component{
	render(){
		return(
			<div>
				<h3>"When 900 years old, you reach...look as good, you'll not..."</h3>
				<ActorLinks />
				<div>{this.props.children}</div>
			</div>
		);
	}
}