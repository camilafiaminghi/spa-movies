import React from 'react'
import './InfosList.scss';
import InfoText from './InfoText'
import InfoIcon from './InfoIcon'

import infos from './../__mocks__/infos.json'

const InfosList = () => {

	return (
		<div className="infos-list">
			{infos.map((info, index) => {
				return (
					<section key={index}>
						<h2>{info.section}</h2>

						<dl>
							{(info.type === 'text') && info.content.map((content, index) => (
									<InfoText key={`content-text-${index}`} {...content} />
							))}

							{(info.type === 'icon') && info.content.map((content, index) => (
									<InfoIcon key={`content-icon-${index}`} {...content} />
							))}
						</dl>

					</section>
				);
			})}
		</div>
	)
}

export default InfosList
