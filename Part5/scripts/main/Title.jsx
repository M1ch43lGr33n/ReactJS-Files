import React from 'react';

export function Title(){
	return(
		<div className="top-bar-title">
			<span data-responsive-toggle="main">
				<button type="button" className="menu-icon" data-toggle></button> 
			</span>
			<h1> a star wars fansite </h1>
		</div>
	);
}