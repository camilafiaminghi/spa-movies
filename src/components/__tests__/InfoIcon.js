import React from 'react'
import {
  render,
  cleanup
} from '@testing-library/react'
import InfoIcon from './../InfoIcon'

import infos from './../../__mocks__/infos.json'
const info = infos.filter((item) => (item.type === 'icon'))[0].content[0]

describe('<InfoIcon />', () => {

	afterEach(cleanup)

	it('renders the component', () => {
		const container = render(<InfoIcon {...info} />)
  	expect(container.firstChild).toMatchSnapshot()
  })

  it('has an img tag and description text', () => {
  	const { getByAltText, getByText } = render(<InfoIcon {...info} />)

  	expect(getByAltText(info.title)).toBeDefined()
  	expect(getByText(info.description)).toBeDefined()
  })
})
