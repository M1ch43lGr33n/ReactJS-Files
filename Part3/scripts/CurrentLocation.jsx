import React from 'react';

export default class CurrentLocation extends React.Component {

	toggleFavourite(){
		console.log("toggle fav");
		this.props.onFavouriteToggle(this.props.address);
	}
	
	render(){
		let varClassName = '';
		if(this.props.address !== "Location not found"){
			console.log("found location");
			if(this.props.favourite){
					console.log("not running this");
					varClassName="glyphicon glyphicon-star";
				}
				else{
					console.log("always runs this");
					varClassName="glyphicon glyphicon-star-empty";
				}
			}
			
		return(
			<div className= "col-xs-12 col-md-6 col-md-offset-3 current-location">
				<h4 id="save-location">{this.props.address}</h4>
				<span className={varClassName} onClick={this.toggleFavourite.bind(this)} aria-hidden="true"></span>
			</div>
		)
	}
}	