import React from 'react'
import {
  render,
  cleanup
} from '@testing-library/react'
import Carousel from './../Carousel'
import actors from './../../__mocks__/actors.json'

const title = 'Carousel Title'
const perPage = [6,4,3]

describe('<Carousel />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<Carousel title={title} perPage={perPage} items={actors} />)
  	expect(container.firstChild).toMatchSnapshot()
  })

  it('has title', () => {
		const { getByText } = render(<Carousel title={title} perPage={perPage} items={actors} />)
  	expect(getByText(title)).toBeDefined()
  })
})
