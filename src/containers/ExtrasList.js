import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExtraComment from './../components/ExtraComment'
import ExtraRate from './../components/ExtraRate'
import './ExtrasList.scss'

class ExtrasList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired
	}

	state = {
	}

	render() {
		const { items, title } = this.props;

		return (
			<section className="extras-list">
				<h2 className="extras-list-title">{title}</h2>
				<div className="extra-items">
					{items.map((item, index) => (
						<div
							key={`extra-item-${index}`}
							className="extra-item">
							{(item.type === 'comment') && <ExtraComment {...item} />}
							{(item.type === 'rate') && <ExtraRate {...item} />}
						</div>
					))}
				</div>
			</section>
		)
	}
}

export default ExtrasList
