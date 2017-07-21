import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';

export default class App extends React.Component{
	constructor(){
		super();
		var favourites = [];
		
		if(localStorage.favourites) {
			favourites = JSON.parse(localStorage.favourites);
		}

		this.state = {
			favourites:favourites,
			currentAddress:'Carlisle',
			mapCoordinates: {
							lat: 54.8936667,
							lng: -2.9298952
							}
		}
	}

	isAddressInFavourites(currentAddress) {
		let favourites = this.state.favourites;
		for(let i = 0; i < favourites.length; i++) {
		  if(favourites[i].address === currentAddress) {
			console.log("already in fav");
			return true;
		  }
		}
		console.log("not in fav");
		return false;
	}
	
	onFavouriteToggle(currentAddress){
		console.log("checking to see if already in fav")
		if(this.isAddressInFavourites(currentAddress)){
			this.removeFromFavourites(currentAddress);
			console.log("will be removed");
		}
		else{
			console.log("will be added");
			this.addToFavourites(currentAddress);
		}
	}
	
	removeFromFavourites(currentAddress){
		let favourites = this.state.favourites;
		let index=-1;
		for(let i=0; i<favourites.length; i++){
			if(currentAddress===favourites[i].address){
				index=i;
				break;
			}
		}
		if(index != -1){
			favourites.splice(index,1);
			this.setState({favourites:favourites});
			localStorage.favourites = JSON.stringify(favourites);
		}
	}
	   	
	addToFavourites(currentAddress){
		console.log("adding");
		let favourites = this.state.favourites;
		favourites.push( 
			{address : currentAddress ,
			timestamp : Date.now()
			} );
		this.setState({favourites:favourites});
		localStorage.favourites = JSON.stringify(favourites);
		console.log("added");
	}

	searchForAddress(address){
		let self = this;
		GMaps.geocode({
			address: address,
			callback: function(results, status) {
				if(status !== "OK") {
					self.setState({
						currentAddress : "Location not found…"
					});
					return;
				}
				let latlng = results[0].geometry.location;
				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: latlng.lat(),
						lng: latlng.lng()
					}
				});
				}
			});
	}
	
	
	render(){
		return(
			<div>
				<h1>Google maps locations</h1>
				<Search onSearch={this.searchForAddress.bind(this)}/>
				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
				<CurrentLocation address={this.state.currentAddress} favourite={this.isAddressInFavourites(this.state.currentAddress)} onFavouriteToggle={this.onFavouriteToggle.bind(this)}/>
				<FavouritesList favouriteLocations={this.state.favourites} activeLocationAddress={this.state.currentAddress} onClick={this.searchForAddress.bind(this)} />
			</div>
		);
	}
}