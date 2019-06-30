import React, { Component } from 'react';
import './App.scss';
import Carousel from './Carousel.js'
import InfosList from './InfosList.js'
import infos from './../__mocks__/infos.json'
import actors from './../__mocks__/actors.json'
import extras from './../__mocks__/extras.json'

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

					<Carousel
						title="Title"
						items={actors}
						perPage={6} />

					<InfosList
						infos={infos} />
				</header>
			</div>
		);
	}
}

export default App;
