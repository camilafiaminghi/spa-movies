import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './NavigationControls.scss';

const NavigationControls = ({handleNavigation, left, right}) => {

	return (
		<Fragment>
			<button
				onClick={() => handleNavigation('left')}
				disabled={!left}
				className={left ? 'navigation-control left active' : 'navigation-control left'}
				tabIndex="0"
				type="button"
				aria-label="nav to left"></button>
			<button
				onClick={() => handleNavigation('right')}
				disabled={!right}
				className={right ? 'navigation-control right active' : 'navigation-control right'}
				tabIndex="0"
				type="button"
				aria-label="nav to right"></button>
		</Fragment>
	)
}

NavigationControls.propTypes = {
	handleNavigation: PropTypes.func.isRequired,
	left: PropTypes.bool.isRequired,
	right: PropTypes.bool.isRequired
}

export default NavigationControls
