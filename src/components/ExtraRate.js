import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ExtraRate = ({title, subtitle, icon, description}) => {

	return (
		<Fragment>
			<h1>
				{(icon) && <img className="icon" src={require(`./../${icon}`)} alt={title} />} {title}
			</h1>
			<h2 className="h4">{subtitle}</h2>
			{(typeof description === 'string') && <p>{description}</p>}
			{(typeof description === 'object') && (
				<dl>
					{description.map((item, index) => (
						<Fragment key={`description-item-${index}`}>
							<dt>{item[0]}</dt>
							<dd>{item[1]}</dd>
						</Fragment>
					))}
				</dl>
			)}
		</Fragment>
	)
}

ExtraRate.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	icon: PropTypes.string,
	description: PropTypes.oneOfType([
	  PropTypes.string,
	  PropTypes.array
	])
}

export default ExtraRate
