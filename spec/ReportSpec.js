let Report = require('../lib/Report')

describe('Report', () => {

  beforeEach(()=>{
    test = new Report()
  })

  afterEach(() => {
    test = null
  })

  describe('test class', () => {
    it('tests test is an instance of Report class', () => {
      expect(test).toBeInstanceOf(Report)
    })
  })

  describe('test gradeSummary', ()=> {
    it('takes an input and outputs count of grades given', () => {
      expect(test.gradeSummary("Green, Green, Amber, Red, Green")).toEqual("Green: 3\nAmber: 1\nRed: 1")
    })
  })

  describe('test gradeSummary', ()=> {
    it('takes a different input and outputs count of grades given', () => {
      expect(test.gradeSummary("Green, Amber, Amber, Red, Red")).toEqual("Green: 1\nAmber: 2\nRed: 2")
    })
  })

})
