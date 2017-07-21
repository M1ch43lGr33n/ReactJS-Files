import React from 'react';
import {Title} from './Title';
import {MainNav} from './MainNav';

export function Header(){
	return (
		<div className="top-bar">
			<Title />
			<MainNav />
		</div>
	);
}