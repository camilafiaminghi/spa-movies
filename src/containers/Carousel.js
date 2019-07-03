import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarouselItems from './../components/CarouselItems';
import NavigationControls from './../components/NavigationControls';
import { checkIsMobile, compareDevice } from './../utils/device'
import './Carousel.scss';

class Carousel extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		perPage: PropTypes.array.isRequired,
		title: PropTypes.string,
		heading: PropTypes.string
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
		const itemsPerPage = compareDevice(...perPage);

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

	refCallback = (el) => {
		const pageWidth = (el) ? window.getComputedStyle(el, null).width.split('px')[0] : 0;
		this.setState((oldState) => ({...oldState, pageWidth}));
	}

	componentDidMount() {
		this.setPages();
	}

	render() {
		const { current, pagesList, pageWidth, itemsPerPage, isMobile } = this.state;
		const { title, heading } = this.props;
		const translate = (!isMobile) ? `translate(${(-pageWidth * current)}px, 0)` : 'translate(0,0)';

		return (
			<section className="carousel">
				<h1 className={(heading) ? `carousel-title ${heading}` : `carousel-title h2`}>{title}</h1>

				<div className="carousel-pagination" ref={this.refCallback}>
					<div
						role="complementary"
						style={(!isMobile) ? {width:`${pageWidth * pagesList.length}px`, transform:translate} : {}}
						className="carousel-pages">

						{pagesList.map((page, index) => (
							<div
								key={`page-${index}`}
								style={{width:`${pageWidth}px`}}
								className={(current === index) ? 'carousel-page active' : 'carousel-page'}>

								<CarouselItems
									itemWidth={itemsPerPage}
									items={page} />
							</div>
						))}

					</div>

					<NavigationControls
						left={current >= 1}
						right={current < (pagesList.length - 1)}
						handleNavigation={this.handlePagination} />
				</div>
			</section>
		);
	}
}

export default Carousel
