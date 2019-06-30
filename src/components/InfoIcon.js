import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const InfosIcon = ({title, icon, description}) => {

	return (
		<Fragment>
			<dt>
				<img className="img-icon" src={require(`./../${icon}`)} alt={title} />
			</dt>
			<dd>{description}</dd>
		</Fragment>
	)
}

InfosIcon.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.string
}

export default InfosIcon
