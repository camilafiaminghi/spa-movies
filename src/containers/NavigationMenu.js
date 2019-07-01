import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavigationMenu.scss';

class NavigationMenu extends Component {
	static propTypes = {
		items: PropTypes.array
	}

	state = {
		active: false
	}

	handleToggle = () => {
		const { active } = this.state;
		this.setState((oldState) => ({...oldState, active: !active}));
	}

	render() {
		const { items } = this.props;
		const { active } = this.state;

		return (
			<nav
				role="navigation"
				className="navigation-menu">
				<button
					className={(active) ? 'active' : ''}
					type="button"
					onClick={() => this.handleToggle()}>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{items
					&& <ul className={(active) ? 'navigation-list active' : 'navigation-list'}>
					{items.map((item, index) => (
						<li
							key={`menuitem-index-${index}`}
							className="navigation-item">
							<a href={item.url}>{item.title}</a>

							{item.subitems && <ul>
								{item.subitems.map((subitem, index) => (
									<li
										key={`submenuitem-index-${index}`}
										className="navigation-subitem">
										<a href={subitem.url}>{subitem.title}</a>
									</li>
								))}
							</ul>}
						</li>
					))}
				</ul>}
			</nav>
		)
	}
}

export default NavigationMenu
