const deliLine = []
var num = 1

function takeANumber(deliLine, number) {
  number += 1
  deliLine.push(number)
  return "You are number " + number - 1 + "in line" }

takeANumber(num)

//alert people that its their turn to get their food

function nowServing(deliLine){
  if (deliLine.length > 0) {
    var tickeNumber = deliLine[0]
    var sentence2 = "Currently serving ticket number" + ticketNumber + "."
    deliLine.splice(0, 1)
    console.log(sentence2)
    return sentence2
  }
  else {
    var emptyLineSentence = "There is nobody waiting to be served!"
    console.log(emptyLineSentence)
    return emptyLineSentence
  }
}

function currentLine(deliLine){
   if (deliLine.length > 0) {
      const positionNameList = []
      var positionCounter = 1
      while (positionCounter <= deliLine.length){
        var positionName = ' ' + positionCounter + '. ' + deliLine[positionCounter - 1]
        positionNameList.push(positionName)
        positionCounter += 1 }
      var sentence3 = "The line is currently:" + positionNameList.toString()
      console.log(sentence3)
      return sentence3
      }
  else {
      var emptyLineSentence = "The line is currently empty."
      console.log(emptyLineSentence)
      return emptyLineSentence
    }
}

var katzDeliLine = []
takeANumber(katzDeliLine, "Mary")
takeANumber(katzDeliLine, "Michael")
takeANumber(katzDeliLine, "Kevin")
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
nowServing(katzDeliLine)
currentLine(katzDeliLine)
console.log("Finished printing code - wahoo!")