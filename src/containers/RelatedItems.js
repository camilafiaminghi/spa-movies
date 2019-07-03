import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextTruncate from './TextTruncate'
import NavigationControls from './../components/NavigationControls';
import { checkIsMobile } from './../utils/device'
import './RelatedItems.scss';

class RelatedItems extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	}

	state = {
		current: 0,
		maxWidth: 0,
		isMobile: checkIsMobile()
	}

	handlePagination = (direction) => {
		const current = (direction === 'right') ? this.state.current + 1 : this.state.current - 1;
		this.setState((oldState) => ({...oldState, current}));
	}

	refCallback = (el) => {
		const { items } = this.props;
		const width = (el) ? window.getComputedStyle(el, null).width.split('px')[0] : 0;
		const maxWidth = (items.length > 1) ? Math.round(width - (width/4)) : Math.round(width);

		this.setState((oldState) => ({...oldState, maxWidth}));
	}

	render() {
		const { current, maxWidth, isMobile } = this.state;
		const { items } = this.props;
		const translate = (!isMobile) ? `translate(${(-maxWidth * current)}px, 0)` : 'translate(0,0)';

		return (
			<div className="related" ref={this.refCallback}>
				<div aria-label="related items" role="complementary" className="related-wrapper">
					<div
						style={(!isMobile) ? {width:`${maxWidth * items.length}px`, transform:translate} : {}}
						className="related-items">

						{items.map((item, index) => (
							<section
								data-testid='related-item'
								style={{width:`${maxWidth}px`}}
								key={`related-item-${index}`}
								className={(current === index) ? 'related-item active' : 'related-item'}>
								<h2 className="related-item-title h3">{item.title}</h2>
								<div className="related-item-content">
									<img alt="" src={require(`./../${item.image}`)} />
									<p>
										<TextTruncate text={item.description} len={255}/>
									</p>
								</div>
							</section>
						))}

					</div>

					<NavigationControls
						left={current >= 1}
						right={current < (items.length - 1)}
						handleNavigation={this.handlePagination} />
				</div>
			</div>
		);
	}
}

export default RelatedItems
