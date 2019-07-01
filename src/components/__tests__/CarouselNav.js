import React from 'react'
import {
	render,
	fireEvent,
	cleanup
} from '@testing-library/react'
import CarouselNav from './../CarouselNav'

const handleNavigation = jest.fn()
const right = true, left = true

describe('<CarouselNav />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<CarouselNav handleNavigation={handleNavigation} left={left} right={right} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('left button disabled', () => {
		const { getByText } = render(<CarouselNav handleNavigation={handleNavigation} left={false} right={right} />)
		expect(getByText('nav to left')).toHaveAttribute('disabled')
	})

	it('right button disabled', () => {
		const { getByText } = render(<CarouselNav handleNavigation={handleNavigation} left={left} right={false} />)
		expect(getByText('nav to right')).toHaveAttribute('disabled')
	})

	it('fire event click', () => {
		const { getByText } = render(<CarouselNav handleNavigation={handleNavigation} left={left} right={right} />)

		fireEvent.click(getByText('nav to left'))
		expect(handleNavigation).toHaveBeenCalledWith('left')

		fireEvent.click(getByText('nav to right'))
		expect(handleNavigation).toHaveBeenCalledWith('right')
	})
})
