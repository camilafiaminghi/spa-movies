import React from 'react'
import {
	render,
	fireEvent,
	cleanup
} from '@testing-library/react'
import NavigationControls from './../NavigationControls'

const handleNavigation = jest.fn()
const right = true, left = true

describe('<NavigationControls />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<NavigationControls handleNavigation={handleNavigation} left={left} right={right} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('left button disabled', () => {
		const { getByLabelText } = render(<NavigationControls handleNavigation={handleNavigation} left={false} right={right} />)
		expect(getByLabelText('nav to left')).toHaveAttribute('disabled')
	})

	it('right button disabled', () => {
		const { getByLabelText } = render(<NavigationControls handleNavigation={handleNavigation} left={left} right={false} />)
		expect(getByLabelText('nav to right')).toHaveAttribute('disabled')
	})

	it('fire event click', () => {
		const { getByLabelText } = render(<NavigationControls handleNavigation={handleNavigation} left={left} right={right} />)

		fireEvent.click(getByLabelText('nav to left'))
		expect(handleNavigation).toHaveBeenCalledWith('left')

		fireEvent.click(getByLabelText('nav to right'))
		expect(handleNavigation).toHaveBeenCalledWith('right')
	})
})
