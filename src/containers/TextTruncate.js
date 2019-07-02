import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import truncate from './../utils/truncate'
import './TextTruncate.scss'

class TextTruncate extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		len: PropTypes.number.isRequired
	}

	state = {
		show: false
	}

	handleToggle = () => {
		const { show } = this.state;
		this.setState((oldState) => ({...oldState, show: !show}));
	}

	render() {
		const { text } = this.props;
		const { show } = this.state;
		const paragraph = (!show) ? truncate(...Object.values(this.props)) : text;

		return (
			<Fragment>
				{paragraph}
				<button
					type="button"
					className="text-truncate-toggle"
					data-testid="plus"
					onClick={() => this.handleToggle()}>{(!show) ? ` show more`: ` show less`}</button>
			</Fragment>
		)
	}
}

export default TextTruncate
