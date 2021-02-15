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

    it('takes a different input and outputs count of grades given', () => {
      expect(test.gradeSummary("Green, Amber, Amber, Red, Red")).toEqual("Green: 1\nAmber: 2\nRed: 2")
    })

    it('mocked gradeCount to test output format 1', () => {
      spyOn(test, 'gradeCount').and.returnValue([8,9,10,0])
      expect(test.gradeSummary("Green, Amber, Amber, Red, Red")).toEqual("Green: 8\nAmber: 9\nRed: 10")
    })
  })

  describe('Edge case', ()=> {
    it('mocked gradeCount to test output format 2', () => {
      expect(test.gradeSummary("Green, Dave, Whimsy, Red")).toEqual("Green: 1\nRed: 1\nUncounted: 2")
    })
  })




})
