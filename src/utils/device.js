const device = {
	type: (window.innerWidth > 544) ? (window.innerWidth <= 992 ? 'tablet' : 'desktop') : 'mobile',
	isMobile: (window.innerWidth <= 544)
}

export default device
