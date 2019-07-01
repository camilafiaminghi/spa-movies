import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import InfoText from './../InfoText'

import infos from './../../__mocks__/infos.json'
const info = infos.filter((item) => (item.type === 'text'))[0].content[0]

describe('<InfoText />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<InfoText {...info} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('has a title and description text', () => {
		const { getByText } = render(<InfoText {...info} />)

		expect(getByText(info.title)).toBeDefined()
		expect(getByText(info.description)).toBeDefined()
	})
})
