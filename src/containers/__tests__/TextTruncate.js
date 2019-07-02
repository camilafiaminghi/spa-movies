import React from 'react'
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'
import TextTruncate from './../TextTruncate'

const props = {
	text: 'Ut lectus enim, gravida vestibulum imperdiet ut, efficitur nec erat. Proin ullamcorper auctor erat, sit amet laoreet risus euismod at. Proin vitae mi eget felis consectetur feugiat. Curabitur ornare, nisi et viverra rhoncus, felis mauris fermentum lacus, rutrum pharetra diam enim ut nisl. Integer pellentesque ex eu lorem porta rutrum. Nulla facilisi. Curabitur elementum bibendum ex, ut placerat nisi consequat sit amet. Mauris et ipsum lobortis, dignissim sapien id, tincidunt lorem. Nulla id quam orci. Aliquam et metus elit. Aenean aliquam posuere semper.',
	len: 20
}

describe('<TextTruncate />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<TextTruncate {...props} />)
  	expect(container.firstChild).toMatchSnapshot()
  })

  it(`limit text with max ${props.len} chars`, () => {
		const { container } = render(<TextTruncate {...props} />)
		expect(container.firstChild.length).toBeLessThan(props.len)
  })

  it('handle toggle show/hide whole text', () => {
		const { container, getByTestId } = render(<TextTruncate {...props} />)
		const button = getByTestId('plus')

		fireEvent.click(button)
		expect(container.firstChild.length).toBe(props.text.length)

		fireEvent.click(button)
		expect(container.firstChild.length).toBeLessThan(props.len)
  })
})
