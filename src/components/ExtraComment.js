import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextTruncate from './../containers/TextTruncate';

const ExtraComment = ({title, icon, description, author, date}) => {

	return (
		<Fragment>
			<h1>
				<img className="icon" src={require(`./../${icon}`)} alt={title} /> {title}
			</h1>
			<p>
				<TextTruncate text={description} len={155} />
			</p>
			<p>{author}, {date}</p>
		</Fragment>
	)
}

ExtraComment.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string.isRequired,
	description: PropTypes.string,
	author: PropTypes.string,
	date: PropTypes.string
}

export default ExtraComment
