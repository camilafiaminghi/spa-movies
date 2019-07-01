import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import CarouselItems from './../CarouselItems'

import items from './../../__mocks__/actors.json'
const itemWidth = 1200

describe('<CarouselItems />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<CarouselItems items={items} itemWidth={itemWidth} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has one image per item', () => {
		const { getAllByAltText } = render(<CarouselItems items={items} itemWidth={itemWidth} />)
		expect(getAllByAltText('')).toHaveLength(items.length)
	})
})
