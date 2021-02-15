class Report {

  gradeSummary(grades) {
    // split the string into just the grade colour text in an array
    // count the elements by colour
    // return count in the correct output format
    let separatedGrades = grades.split(", ")
    let [green, amber, red] = this.gradeCount(separatedGrades)
    return this.formatOutput(green, amber, red)
    // return `Green: ${green}\nAmber: ${amber}\nRed: ${red}`
  }

  gradeCount(grades) {
    let [green, amber, red] = [0,0,0]
    grades.forEach(item=>{
      if(item === "Green") green ++
      if(item === "Amber") amber ++
      if(item === "Red") red ++
    })
    return [green, amber, red]
  }

  formatOutput(green, amber, red) {
    return `Green: ${green}\nAmber: ${amber}\nRed: ${red}`
  }

}

module.exports = Report
