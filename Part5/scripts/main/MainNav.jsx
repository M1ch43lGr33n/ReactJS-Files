import React from 'react';
import {IndexLink, Link} from 'react-router';

export function MainNav(){
	return(
		<nav className="top-bar-right" id="menu">
			<h1 className="hide"> "Site Navigation" </h1>
			<ul className="vertical medium-horizontal menu">
				<li><IndexLink to="/" className="pageLink" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/films" className="pageLink" activeClassName="active">Films</Link></li>
				<li><Link to="/actors" className="pageLink" activeClassName="active">Actors</Link></li> 
			</ul>
		</nav>
	);
}