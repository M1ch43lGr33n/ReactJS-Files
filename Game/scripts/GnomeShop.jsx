import React from 'react';
import Start from './Start';

export default class GnomeShop extends React.Component{
	constructor(props){
		super(props);
		this.state={
			gnomesToBuy:0,
			buyResult:"",
			shopIndex:0,
		}
	}
	
	buyGnomes(){
		this.props.buyGnome(this.state.gnomesToBuy);
		let cost = this.state.gnomesToBuy * 3;
		this.props.loseGold(cost);
		this.refs.input.value = '';
		this.setState({gnomesToBuy: 0});
	}
	
	handleChange(e){
		let cost = e.target.value *3;
		if(e.target.value < 0){
			this.setState({buyResult: "You can't sell gnomes"});
		}
		else if(cost <= this.props.gold){
			this.setState({buyResult:"Valid amount"});
			this.setState({gnomesToBuy: e.target.value});
			this.setState({shopIndex : 1});
		}
		else{
			this.setState({buyResult:"not enough money to buy this many gnomes"});
			this.setState({shopIndex : 0});
			this.setState({gnomesToBuy: e.target.value});
		}
	}
	
	render(){
		let visibility='hiddenDiv';
		if(this.state.shopIndex===1){
			console.log("running 1");
			visibility="shownDiv";
		}
		else{
			console.log("running 2");
			visibility="hiddenDiv";
		}
		
		return(
		<div className="shop">
			<p></p>
			<p> Gnome shop: </p>
			<p>You can spend gold here to get more gnomes. Each gnome costs 3 gold</p>
			<p> {this.state.buyResult}</p>
			<p>{this.state.gnomesToBuy}</p>
			<input ref="input" type="number" placeholder="enter a number" onChange={e => this.handleChange(e)}/> 
			<p></p>
			<div className={visibility}>
				<button onClick={this.buyGnomes.bind(this)}> Buy </button>
			</div>
			<p></p>
		</div>	
		);
}
}