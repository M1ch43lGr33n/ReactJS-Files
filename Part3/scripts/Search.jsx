import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component{
	constructor(){
		super();
		this.state={
			value:""
		}
	}
	
	handleSubmit(e){
		e.preventDefault(),
		this.props.onSearch(this.state.value),
		ReactDOM.findDOMNode(this).querySelector('input').blur()
	}
	
	handleChange(e){
		this.setState({value:e.target.value})
	}
	
	render(){
		return(
		<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
			<div className="form-group">
				<div className="col-xs-12 col-md-6 col-md-offset-3">
					<div className="input-group">
						<input type="text" id="address" className="form-control"
							placeholder="Find a Location" onChange={this.handleChange.bind(this)} value={this.state.value}>
							</input>
							
						<span className="input-group-btn">
							<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</span>
					</div>
				</div>
			</div>
		</form>
		);
	}
}