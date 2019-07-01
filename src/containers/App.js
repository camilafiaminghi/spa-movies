import React, { Component } from 'react';
import './App.scss';
import Banner from './../components/Banner.js'
import Carousel from './Carousel.js'
import InfosList from './InfosList.js'

import banner from './../__mocks__/banner.json'
import infos from './../__mocks__/infos.json'
import actors from './../__mocks__/actors.json'
import category from './../__mocks__/category.json'
import navigation from './../__mocks__/navigation.json'

class App extends Component {
	render() {
		return (
			<div className="app">
				<Banner
					{...banner}
					navigation={navigation} />

				<Carousel
					title="Category Title"
					items={category}
					perPage={10} />

				<Carousel
					title="Title"
					items={actors}
					perPage={6} />

				<InfosList
					infos={infos} />
			</div>
		);
	}
}

export default App;
