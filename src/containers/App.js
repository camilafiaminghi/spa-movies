import React, { Component } from 'react';
import './App.scss';
import InfosList from './InfosList.js'
import infos from './../__mocks__/infos.json'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Frontend Test Task.
					</p>
					<p>
						Movies, categories, actors and info.
					</p>
					<InfosList infos={infos}></InfosList>
				</header>
			</div>
		);
	}
}

export default App;
