import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import RelatedITems from './../RelatedItems'
import related from './../../__mocks__/related.json'

describe('<RelatedITems />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<RelatedITems items={related} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has items', () => {
		const { getAllByTestId } = render(<RelatedITems items={related} />)
		expect(getAllByTestId('related-item')).toHaveLength(related.length)
	})
})
