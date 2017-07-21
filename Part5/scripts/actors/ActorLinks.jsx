import React from 'react';
import { Link } from 'react-router';

export default class ActorLinks extends React.Component{
	render(){
		return(
			<nav>
				<ul className="vertical medium-horizontal menu items">
					<li><Link to="/actors/HarrisonFord" activeClassName="active">Han Solo</Link></li>
					<li><Link to="/actors/MarkHamill" activeClassName="active">Luke Skywalker</Link></li>
					<li><Link to="/actors/CarrieFisher" activeClassName="active">Princess Leia</Link></li>
				</ul>
			</nav>
		);
	}
}