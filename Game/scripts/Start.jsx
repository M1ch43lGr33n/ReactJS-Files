import React from 'react';
import GnomeShop from './GnomeShop';

export default class Start extends React.Component{
	
	constructor(props){
		super(props);
		this.state ={
			gnomeIn:10,
			gnomeOut:0,
			warning:'',
			gold:5,
			weather:this.props.weather,
			index:0,
			index2:0,
			index3:0,
			failCond:'',
			zeroGnomes: this.zeroGnomes.bind(this),
		}
	}
	
	zeroGnomes(){
		if(this.state.gnomeIn === 0){
			this.setState({failCond : "out of gnomes!"});
			this.setState({index3 : 1})
		}
	}
	
	handleChange(e){
		if(e.target.value <= this.state.gnomeIn && e.target.value > 0){
			this.setState({gnomeOut : e.target.value});
			this.setState({warning : "sending out Gnomes: "})
		}
		else{
			this.setState({warning : "please enter a valid number of Gnomes:"})
		}
	}
	
	setReady(){
		this.zeroGnomes();
		this.setState({gnomeIn : this.state.gnomeIn - this.state.gnomeOut});
		this.setState({index : 1});
		this.setState({index2 : 1});
	}
			
	resetDay(){
		let wNum = this.props.weather;
		if(wNum ==2 || wNum ==4 || wNum ==6 || wNum ==8 || wNum ==10){
			let returnGold = this.state.gnomeOut * 2;
			this.setState({gold : +this.state.gold + + returnGold});
			this.setState({gnomeIn : +this.state.gnomeIn + + this.state.gnomeOut});
		}
		else if(wNum ==1){
			let returnGold = this.state.gnomeOut * 1;
			this.setState({gold : +this.state.gold + + returnGold});
			let lostGnomes = Math.floor(this.state.gnomeOut / 2);
			this.setState({gnomeIn : +this.state.gnomeIn + + lostGnomes});
		}
		else if(wNum ==12){
			let returnGold = this.state.gnomeOut * 3;
			this.setState({gold : +this.state.gold + + returnGold});
			this.setState({gnomeIn : +this.state.gnomeIn + + this.state.gnomeOut});
		}
		else{
			this.setState({gnomeIn : this.state.gnomeIn});
		}
		this.setState({index : 0});
		this.setState({gnomeOut: 0});
		this.refs.inputCount.value = '';
		this.setState({weather: ''});
		this.props.wIndexRes();
	}
			
	buyGnome(n){
		this.setState({gnomeIn : +this.state.gnomeIn + +n});
	}
	
	loseGold(n){
		this.setState({gold: this.state.gold - n})
	}

	render(){
		let visibilityDiv='';
		let visibilityDiv2='';
		let inputDiv = '';
		
		if(this.state.index === 1){
			visibilityDiv = "hiddenDiv"
		}
		else{
			visibilityDiv = "shownDiv";
		}
		
		if(this.props.wIndex === 1){
			visibilityDiv2 = "shownDiv";
		}
		else{
			visibilityDiv2 = "hiddenDiv";
		}
		
		if(this.state.index3 === 0){
			inputDiv = "shownDiv";
		}
		else{
			inputDiv = "hiddenDiv";
		}

		return(
		<div>
		Player 1
			<p></p>
			<div className="UserSection">
				<p> </p>
				<p>You currently have:  {this.state.gnomeIn} Gnomes </p>
				<p>You currently have: {this.state.gold} Gold </p>
				<p> {this.state.warning} {this.state.gnomeOut}</p>
				<p> {this.state.failCond} </p>
				<div className={inputDiv}>
					<div className={visibilityDiv}>
						<input ref="inputCount" type="number" min="1" placeholder="enter a number" onChange={e => this.handleChange(e)}/> 
						<button onClick={this.setReady.bind(this)}> Ready </button>
					</div>
					<div className={visibilityDiv2}>
						<button onClick={this.resetDay.bind(this)}> Reset Day </button>
					</div>
				</div>
				<p></p>
			</div>
			<p></p>
			<div>
				<GnomeShop gnomeIn={this.state.gnomeIn} buyGnome={this.buyGnome.bind(this)}
				gold={this.state.gold} loseGold={this.loseGold.bind(this)}> </GnomeShop>
			</div>
		</div>
		);
	}
}