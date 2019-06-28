import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const InfosText = ({title, description}) => {

	return (
		<Fragment>
			<dt>{title}</dt>
			<dd>{description}</dd>
		</Fragment>
	)
}

InfosText.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
}

export default InfosText
