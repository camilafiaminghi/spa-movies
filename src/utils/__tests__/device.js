import { device, checkIsMobile, compareDevice } from './../device'

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

describe('function device', () => {

	it('default device is desktop', () => {
		const type = device()
		expect(type).toBe('desktop')
  })

  it('device is tablet', () => {
  	resizeWindow(992, 1024)
  	const type = device()
  	expect(type).toBe('tablet')
  })

  it('device is tablet', () => {
  	resizeWindow(544, 812)
  	const type = device()
  	expect(type).toBe('mobile')
  })

  it('is mobile is true', () => {
  	resizeWindow(1366, 768)
  	const isMobile = checkIsMobile()
		expect(isMobile).toBeFalsy()
  })

  it('compare is desktop', () => {
  	resizeWindow(1366, 768)
  	const compare = compareDevice('desktop', 'tablet', 'mobile')
		expect(compare).toBe('desktop')
  })

  it('compare is tablet', () => {
  	resizeWindow(992, 1024)
  	const compare = compareDevice('desktop', 'tablet', 'mobile')
		expect(compare).toBe('tablet')
  })

  it('compare is mobile', () => {
  	resizeWindow(544, 812)
  	const compare = compareDevice('desktop', 'tablet', 'mobile')
		expect(compare).toBe('mobile')
  })
})
