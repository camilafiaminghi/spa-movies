import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarouselItems from './../components/CarouselItems';
import './Carousel.scss';

class Carousel extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		perPage: PropTypes.number.isRequired,
		title: PropTypes.string
	}

	state = {
		current: 0,
		pages: 0,
		pagesList: [],
		pageWidth: 0,
		itemsPerPage: 0,
		wrapperWidth: 0,
		isMobile: false
	}

	handlePagination = (direction) => {
		const current = (direction === 'left') ? this.state.current + 1 : this.state.current - 1;
		this.setState((oldState) => ({...oldState, current}));
	}

	setPages = () => {
		const { items, perPage } = this.props;
		const isMobile = (window.innerWidth <= 544) ? true : false;
		const itemsPerPage = (window.innerWidth > 544) ? (window.innerWidth <= 992 ? Math.floor(perPage/2) : perPage) : 1;
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
			itemsPerPage,
			isMobile
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
		const { title } = this.props;
		const wrapperWidth = (!isMobile) ? pageWidth * pagesList.length : pageWidth;
		const translate = (!isMobile) ? `translate(${(-pageWidth * current)}px, 0)` : 'translate(0,0)';

		return (
			<section className="carousel" ref={this.refCallback}>
				<h1 className="carousel-title">{title}</h1>
				<div
					style={{width:`${wrapperWidth}px`, transform:translate}}
					className="carousel-pages">

					{pagesList.map((page, index) => (
						<div
							key={`item-${index}`}
							style={{width:`${pageWidth}px`}}
							className={(current === index) ? 'carousel-page active' : 'carousel-page'}>

							<CarouselItems
								itemWidth={itemsPerPage}
								items={page} />

						</div>
					))}

				</div>

				<button
					onClick={() => this.handlePagination('right')}
					className={(current >= 1) ? 'carousel-left active' : 'carousel-left'}></button>
				<button
					onClick={() => this.handlePagination('left')}
					className={(current < (pagesList.length - 1)) ? 'carousel-right active' : 'carousel-right'}></button>
			</section>
		);
	}
}

export default Carousel
