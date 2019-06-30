import React from 'react'
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'
import InfosList from './../InfosList'

import infos from './../../__mocks__/infos.json'

describe('<InfosList />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<InfosList infos={infos} />)
  	expect(container.firstChild).toMatchSnapshot()
  })

  it('handle update click', () => {
		const { getByTestId } = render(<InfosList infos={infos} />)
		const button = getByTestId('button-0')
		const content = getByTestId('info-list-content-0')
		fireEvent.click(button)
		expect(button).toHaveClass('active')
		expect(content).toHaveClass('active')

		fireEvent.click(button)
		expect(content).toHaveClass('info-list-content')
  })
})
