import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import ExtrasList from './../ExtrasList'
import extras from './../../__mocks__/extras.json'

const title = 'ExtrasList Title'
const perPage = [4,2,1]

describe('<ExtrasList />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<ExtrasList title={title} perPage={perPage} items={extras} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has title', () => {
		const { getByText } = render(<ExtrasList title={title} perPage={perPage} items={extras} />)
		expect(getByText(title)).toBeDefined()
	})
})
