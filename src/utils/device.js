export const device = () => (window.innerWidth > 544) ? (window.innerWidth <= 992 ? 'tablet' : 'desktop') : 'mobile'

export const checkIsMobile = () => (window.innerWidth <= 544)

export const compareDevice = (desktop, tablet, mobile) => ((window.innerWidth > 544) ? (window.innerWidth <= 992 ? tablet : desktop) : mobile)
