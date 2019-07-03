import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import ExtraComment from './../ExtraComment'
import truncate from './../../utils/truncate'

import extras from './../../__mocks__/extras.json'
const item = extras.filter((item) => (item.type === 'comment'))[0]

describe('<ExtraComment />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<ExtraComment {...item} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has an img tag, description, title, author, date', () => {
		const { getByAltText, getByText } = render(<ExtraComment {...item} />)

		expect(getByAltText(item.title)).toBeDefined()
		expect(getByText(item.title)).toBeDefined()
		expect(getByText(truncate(item.description, 155))).toBeDefined()
		expect(getByText(`${item.author}, ${item.date}`)).toBeDefined()
	})
})
