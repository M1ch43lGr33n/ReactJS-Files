import React from 'react';
import Start from './Start';
import Start2 from './Start2';
import GnomeShop from './GnomeShop';

export default class Content extends React.Component{
	constructor(){
		super();
		this.state={
			weather:0,
			weatherResults:'',
			wIndex:0,
			wIndex2:0,
			wIndex3:0,
			badWeather:"../weather.png",
			goodWeather:"../Sun.png",
			weatherImage:0,
		}
	}

	weatherForDay(){
		let rand = Math.floor(Math.random()*12)+1;
		this.setState({weather : rand });
		if( rand ==3 || rand ==5 || rand ==7 || rand == 9 || rand ==11){
			this.setState({weatherResults : "Bad weather, lost all gnomes"});
			this.setState({weatherImage: 1});
		}
		else if(rand ==1){
			this.setState({weatherResults : "Half of the gnomes are lost in the fog, the others bring back 1 piece of gold each"});
		}
		else if(rand === 12){
			this.setState({weatherResults : "Gnomes find large amount of gold, each gnomes struggles back with 3 pieces each!"});
		}
		else{
			this.setState({weatherResults : "Good weather, gnomes bring back gold"});
			this.setState({weatherImage: 2});
		}
		this.setState({wIndex:1});
		this.setState({wIndex2:1});
		this.setState({wIndex3:1});
		console.log(this.state.wIndex);
	}
	
	wIndexRes(){
		this.setState({wIndex:3});
	}
	wIndexRes2(){
		this.setState({wIndex2:3});
	}
	
	nextDay(){
		this.setState({wIndex3:0});
		this.setState({weatherImage: 0});
	}
	
	render(){
		let weatherButtonBox='';
		let nextDay='';
		let goodWeather='';
		let badWeather='';
		if(this.state.wIndex3 === 0){
			nextDay="hiddenDiv";
			weatherButtonBox = 'shownDiv';
		}
		else if(this.state.wIndex === 3 && this.state.wIndex2 === 3){
			nextDay = "shownDiv";
		}
		else{
			nextDay = "hiddenDiv";
		}
		
		if(this.state.wIndex3 === 1){
			weatherButtonBox = 'hiddenDiv';
		}
		else{
			weatherButtonBox = 'shownDiv';
		}
		
		if(this.state.weatherImage === 1){
			goodWeather='hiddenDiv';
			badWeather='shownDiv';
		}
		else if(this.state.weatherImage === 2){
			goodWeather='shownDiv';
			badWeather='hiddenDiv';
		}
		else{
			goodWeather='hiddenDiv';
			badWeather='hiddenDiv';
		}


		return( 
		<div className="col-sm-12">		
			<div className="text">
				Welcome to the gnome game. You start with 10 gnomes, you can choose how many gnomes to send out to mine gold each day.
				If the weather is good then the gnomes return 2 gold each, however if the is weather bad the gnomes will die.
				New gnomes can be bought from the shop for 3 gold each.
			</div>
			
			<p></p>
			
			<div className="weatherBox">
				<div className={weatherButtonBox}>
				<button onClick={this.weatherForDay.bind(this)}> Random weather </button>
				</div>
				<p></p>
				<p> {this.state.weatherResults}</p>
				<div className={nextDay}>
					<button onClick={this.nextDay.bind(this)}> Next Day </button>
				</div>
			</div>		
			<p></p>
			<div className="col-sm-4">
				<div className="Player1">
					<Start weather={this.state.weather} wIndex={this.state.wIndex} wIndexRes={this.wIndexRes.bind(this)}> </Start>
				</div>
			</div>
			<div className="col-sm-4">
				<div className={badWeather}>
					<img id="1" className="badWeather" src={this.state.badWeather} />
				</div>
				<div className={goodWeather}>
					<img id="2" className="sun" src={this.state.goodWeather} />
				</div>
			</div>
			<div className="col-sm-4">
				<div className="Player2" >
					<Start2 weather={this.state.weather} wIndex2={this.state.wIndex2} wIndexRes2={this.wIndexRes2.bind(this)}> </Start2>
				</div>
			</div>
		</div>
		);
	}
}