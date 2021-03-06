import React, { Component } from 'react';
import './App.scss';
import Banner from './../components/Banner.js'
import Carousel from './Carousel.js'
import RelatedItems from './RelatedItems.js'
import ExtrasList from './ExtrasList.js'
import InfosList from './InfosList.js'

import banner from './../__mocks__/banner.json'
import infos from './../__mocks__/infos.json'
import actors from './../__mocks__/actors.json'
import category from './../__mocks__/category.json'
import navigation from './../__mocks__/navigation.json'
import related from './../__mocks__/related.json'
import extras from './../__mocks__/extras.json'

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
					perPage={[10,5,3]}
					heading="h4" />

				<RelatedItems items={related} />

				<ExtrasList
					title="Extras"
					items={extras}
					perPage={[4,2,1]} />

				<Carousel
					title="Title"
					items={actors}
					perPage={[6,4,3]}
					heading="h3" />

				<InfosList
					infos={infos} />
			</div>
		);
	}
}

export default App;
