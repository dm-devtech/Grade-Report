class Report {

  gradeSummary(grades) {
    // split the string into just the grade colour text in an array
    // count the elements by colour
    // return count in the correct output format
    let separatedGrades = grades.split(", ")
    let [green, amber, red, uncounted] = this.gradeCount(separatedGrades)
    return this.formatOutput(green, amber, red, uncounted)
    // return `Green: ${green}\nAmber: ${amber}\nRed: ${red}`
  }

  gradeCount(grades) {
    let [green, amber, red, uncounted] = [0,0,0,0]
    grades.forEach(item=>{
      if(item === "Green") green ++
      if(item === "Amber") amber ++
      if(item === "Red") red ++
      if(item !== "Green" && item !== "Amber" && item !== "Red") uncounted ++
    })
    return [green, amber, red, uncounted]
  }

  formatOutput(green, amber, red, uncounted) {
    let output = []
    if(green > 0) output.push(`Green: ${green}\n`)
    if(amber > 0) output.push(`Amber: ${amber}\n`)
    if(red > 0) output.push(`Red: ${red}\n`)
    if(uncounted > 0) output.push(`Uncounted: ${uncounted}\n`)
    let outputString = output.join("")
    console.log(output, outputString, outputString.slice(0,-1))
    return outputString.slice(0,-1)
  }

}

module.exports = Report
