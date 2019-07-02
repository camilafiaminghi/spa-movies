import React from 'react'
import PropTypes from 'prop-types'
import NavigationMenu from './../containers/NavigationMenu';
import TextTruncate from './../containers/TextTruncate';
import './Banner.scss';

const Banner = ({title, image, infos, description, features, navigation}) => {

	const bannerImage = require(`./../${image}`);

	return (
		<div
			className="banner"
			style={{backgroundImage: `url(${bannerImage})`}}>
				<div className="banner-content">
					<NavigationMenu items={navigation} />

					<section className="banner-section">
						<h1 className="banner-title">{title}</h1>

						<ul className="banner-infos">
							{(infos) && infos.map((info, index) => (
								<li key={`info-${index}`}>
									{(info.icon) && <img className="img-icon" src={require(`./../${info.icon}`)} alt={info.title} />}
									{(info.content) && <p>{info.content}</p>}
								</li>
							))}
						</ul>

						<p>
							<TextTruncate text={description} len={300} />
						</p>

						<ul className="banner-features">
							{(features) && features.map((feature, index) => (
								<li key={`feature-${index}`}>
									<button>
										{(feature.icon) && <img src={require(`./../${feature.icon}`)} alt=""/>}
										{feature.content}
									</button>
									{feature.title}
								</li>
							))}
						</ul>
					</section>
				</div>
		</div>
	)
}

Banner.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	infos: PropTypes.array,
	description: PropTypes.string,
	features: PropTypes.array,
	navigation: PropTypes.array
}

export default Banner
