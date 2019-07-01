import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const InfoIcon = ({title, icon, description}) => {

	return (
		<Fragment>
			<dt>
				<img className="img-icon" src={require(`./../${icon}`)} alt={title} />
			</dt>
			<dd>{description}</dd>
		</Fragment>
	)
}

InfoIcon.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string.isRequired,
	description: PropTypes.string
}

export default InfoIcon
