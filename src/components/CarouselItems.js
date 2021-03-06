import React from 'react'
import PropTypes from 'prop-types'
import { checkIsMobile } from './../utils/device'
import './CarouselItems.scss';

const CarouselItems = ({items, itemWidth}) => {

	const isMobile = checkIsMobile();

	return (
		<div className="carousel-items" role="list">
			{items.map((item, index) => (
				<div
					role="listitem"
					className="carousel-item"
					key={`item-${index}`}
					style={{width:`${100/itemWidth}%`}}>
					<div>
						<img alt="" src={require(`./../${item.image}`)} />
					</div>
					{(item.name) && <div className={(!isMobile) ? `h4` : ''}>{item.name}</div>}
					{(item.character) &&
						<div className={(!isMobile) ? `h5` : ''}>
							<strong>{item.character}</strong>
						</div>
					}
				</div>
			))}
		</div>
	)
}

CarouselItems.propTypes = {
	items: PropTypes.array.isRequired,
	itemWidth: PropTypes.number.isRequired
}

export default CarouselItems
