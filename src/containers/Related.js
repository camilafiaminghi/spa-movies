import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { checkIsMobile, compareDevice } from './../utils/device'
import './Related.scss';

class Related extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	}

	state = {
		current: 0,
		pages: 0,
		pagesList: [],
		pageWidth: 0,
		itemsPerPage: 0,
		isMobile: checkIsMobile()
	}

	handlePagination = (direction) => {
		const current = (direction === 'right') ? this.state.current + 1 : this.state.current - 1;
		this.setState((oldState) => ({...oldState, current}));
	}

	setPages = () => {
		const { items, perPage } = this.props;
		const itemsPerPage = 1;

		const pages = !(items.length % itemsPerPage) ? Math.floor(items.length / itemsPerPage) : Math.floor(items.length / itemsPerPage) + 1;
		let pagesList = [];

		if (items.length === itemsPerPage) { return; }

		for (let i = 0; i < pages; i++) {
			pagesList = [...pagesList, [...items.slice((i * itemsPerPage), (itemsPerPage * (i + 1)))]];
		}
		this.setState((oldState) => ({
			...oldState,
			pagesList,
			pages,
			itemsPerPage
		}));
	}

	render() {
		const { current, pagesList, pageWidth, itemsPerPage, isMobile } = this.state;
		const { items } = this.props;

		return (
			<div aria-label="related items" role="complementary" className="related">
				<div className="related-items">
					{items.map((item, index) => (
						<section
							key={`related-item-${index}`}
							className={(current === index) ? 'related-item active' : 'related-item'}>
							<h2 className="related-item-title h3">{item.title}</h2>
							<div className="related-item-content">
								<div>
									<img alt="" src={require(`./../${item.image}`)} />
								</div>
								<p>{item.description}</p>
							</div>
						</section>
					))}
				</div>
			</div>
		);
	}
}

export default Related
