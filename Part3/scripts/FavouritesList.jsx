import React from 'react';
import FavouriteItem from './FavouritesItem';

export default class FavouritesList extends React.Component{

	render(){
		let self = this;
		let favouriteLocations = this.props.favouriteLocations.map(function(location){
			let active = self.props.activeLocationAddress === location.address;
			
			return <FavouriteItem address={location.address} key={location.timestamp} timestamp={location.timestamp}
          active={active} onClick={self.props.onClick.bind(this)} />;
		});
		
		if(!favouriteLocations.length) {
			return null;
		}
	
		return(
		<div className ="list-group col-xs-12 col-md-6 col-md-offset-3">
			<span className="list-group-item active">Saved Location</span>
			{favouriteLocations}
		</div>
		);
	}
}