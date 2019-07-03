import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import ExtraRate from './../ExtraRate'

import extras from './../../__mocks__/extras.json'
const item = extras.filter((item) => (item.type === 'rate'))[1]

describe('<ExtraRate />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<ExtraRate {...item} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has an img tag, description, title, subtitle', () => {
		const { getByAltText, getByText } = render(<ExtraRate {...item} />)

		expect(getByAltText(item.title)).toBeDefined()
		expect(getByText(item.title)).toBeDefined()
		expect(getByText(item.subtitle)).toBeDefined()
		expect(getByText(item.description)).toBeDefined()
	})
})
