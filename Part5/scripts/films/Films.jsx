import React from 'react';
import { Link } from 'react-router';
import FilmLinks from './FilmLinks';

export default class Films extends React.Component{
	render(){
		return(
			<div>
				<h3>A long time ago in a galaxy far, far away</h3>
				<FilmLinks />
				<div>{this.props.children}</div>
			</div>
		);
	}
}