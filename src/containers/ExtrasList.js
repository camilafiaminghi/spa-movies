import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExtraComment from './../components/ExtraComment'
import ExtraRate from './../components/ExtraRate'
import NavigationControls from './../components/NavigationControls';
import { checkIsMobile, compareDevice } from './../utils/device'
import './ExtrasList.scss'

class ExtrasList extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		perPage: PropTypes.array.isRequired
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
		const { items } = this.props;
		const width = (el) ? window.getComputedStyle(el, null).width.split('px')[0] : 0;
		const pageWidth = (items.length > 1) ? Math.round(width - (width/6)) : Math.round(width);
		this.setState((oldState) => ({...oldState, pageWidth}));
	}

	componentDidMount() {
		this.setPages();
	}

	render() {
		const { current, pagesList, pageWidth, isMobile } = this.state;
		const { title } = this.props;
		const translate = (!isMobile) ? `translate(${(-pageWidth * current)}px, 0)` : 'translate(0,0)';

		return (
			<section className="extras-list">
				<h2 className="extras-list-title">{title}</h2>

				<div className="extras-pagination" ref={this.refCallback}>
					<div
						style={(!isMobile) ? {width:`${pageWidth * pagesList.length}px`, transform:translate} : {}}
						className="extras-pages">
						{pagesList.map((page, index) => (
							<div
								style={(!isMobile) ? {width:`${pageWidth}px`}: {}}
								key={`page-${index}`}
								className={(current === index) ? 'extras-page active' : 'extras-page'}>

								<div
									style={(isMobile) ? {width:`${pageWidth}px`}: {}}
									className="extras-items">

									{page.map((item, index) => (
										<div
											style={(isMobile) ? {width:`${pageWidth}px`}: {}}
											key={`extras-item-${index}`}
											className={`extras-item extras-item-${item.type}`}>
											{(item.type === 'comment') && <ExtraComment {...item} />}
											{(item.type === 'rate') && <ExtraRate {...item} />}
										</div>
									))}

								</div>
							</div>
						))}
					</div>

					<NavigationControls
						left={current >= 1}
						right={current < (pagesList.length - 1)}
						handleNavigation={this.handlePagination} />
				</div>
			</section>
		)
	}
}

export default ExtrasList
