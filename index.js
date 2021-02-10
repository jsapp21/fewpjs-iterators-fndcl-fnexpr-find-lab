// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const superbowlWin = (record) => {
  let superBowlDate = record.find(element => element.result === "W")
  debugger
  
  return !!superBowlDate ? superBowlDate.year : undefined
}


superbowlWin(superBowlDate)
