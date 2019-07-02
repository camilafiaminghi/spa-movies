import truncate from './../truncate'

const props = {
	text: 'Ut lectus enim, gravida vestibulum imperdiet ut, efficitur nec erat. Proin ullamcorper auctor erat, sit amet laoreet risus euismod at. Proin vitae mi eget felis consectetur feugiat. Curabitur ornare, nisi et viverra rhoncus, felis mauris fermentum lacus, rutrum pharetra diam enim ut nisl. Integer pellentesque ex eu lorem porta rutrum. Nulla facilisi. Curabitur elementum bibendum ex, ut placerat nisi consequat sit amet. Mauris et ipsum lobortis, dignissim sapien id, tincidunt lorem. Nulla id quam orci. Aliquam et metus elit. Aenean aliquam posuere semper.',
	len: 20
}

describe('function truncate', () => {

	it('limit text with max 20 chars', () => {
		const textTruncate = truncate(...Object.values(props))
  	expect(textTruncate.length).toBeLessThan(20)
  })
})
