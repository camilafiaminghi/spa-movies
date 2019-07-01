import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './CarouselNav.scss';

const CarouselNav = ({handleNavigation, left, right}) => {

	return (
		<Fragment>
			<button
				onClick={() => handleNavigation('left')}
				disabled={!left}
				className={left ? 'carousel-button carousel-left active' : 'carousel-button carousel-left'}
				tabIndex="0"
				type="button">nav to left</button>
			<button
				onClick={() => handleNavigation('right')}
				disabled={!right}
				className={right ? 'carousel-button carousel-right active' : 'carousel-button carousel-right'}
				tabIndex="0"
				type="button">nav to right</button>
		</Fragment>
	)
}

CarouselNav.propTypes = {
	handleNavigation: PropTypes.func.isRequired,
	left: PropTypes.bool.isRequired,
	right: PropTypes.bool.isRequired
}

export default CarouselNav
