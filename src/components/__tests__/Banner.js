import React from 'react'
import {
	render,
	cleanup
} from '@testing-library/react'
import Banner from './../Banner'

import banner from './../../__mocks__/banner.json'

describe('<Banner />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<Banner {...banner} />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
