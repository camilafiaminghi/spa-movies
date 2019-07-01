import React from 'react'
import PropTypes from 'prop-types'
import './CarouselItems.scss';

const CarouselItems = ({items, itemWidth}) => {

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
					<div className="h4">{item.name}</div>
					<div className="h5">
						<strong>{item.character}</strong>
					</div>
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
