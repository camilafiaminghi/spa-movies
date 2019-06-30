import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './InfosList.scss';
import InfoText from './../components/InfoText'
import InfoIcon from './../components/InfoIcon'

class InfosList extends Component {
	static propTypes = {
		infos: PropTypes.array.isRequired
	}

	state = {
		target: null
	}

	handleUpdateTarget = (index) => {
		const { target } = this.state;
		const newTarget = (index === target) ? null : index;
		this.setState(oldState => ({...oldState, target : newTarget}));
	}

	render() {
		const { target } = this.state;
		const { infos } = this.props;

		return (
			<div className="infos-list">
				{infos.map((info, index) => {
					return (
						<div key={`info-${index}`} className="info-list-section">
							<button
								data-testid={`button-${index}`}
								aria-expanded={(target === index) ? true : false}
								aria-controls={`info-list-content-${index}`}
								className={(target === index) ? 'active' : ''}
								onClick={() => this.handleUpdateTarget(index)}>
								<h2>{info.section}</h2>
							</button>

							<div
								data-testid={`info-list-content-${index}`}
								id={`info-list-content-${index}`}
								className={(target === index) ? 'info-list-content active' : 'info-list-content'}>
								<dl>
									<dd className="info-list-title"><h2>{info.section}</h2></dd>

									{(info.type === 'text') && info.content.map((content, index) => (
											<InfoText key={`content-text-${index}`} {...content} />
									))}

									{(info.type === 'icon') && info.content.map((content, index) => (
											<InfoIcon key={`content-icon-${index}`} {...content} />
									))}
								</dl>
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}

export default InfosList
