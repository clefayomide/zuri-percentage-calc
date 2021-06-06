let scoreObtained = document.getElementById("score-obtained")
let scoreObtainable = document.getElementById("score-obtainable")
let btn = document.getElementById("btn")
let percentageOutput = document.getElementById("percentage-output")
let errorMsg = "enter a valid number" 
let inputOneGreaterThanInputTwo = "score obtained can not be higher than score obtainable"

btn.addEventListener("click", () => {
    let inputOne = parseInt(scoreObtained.value)
    let inputTwo = parseInt(scoreObtainable.value)
    if (isNaN(inputOne) || isNaN(inputTwo) ) {
        percentageOutput.className = "error-output"
        percentageOutput.innerHTML = `${errorMsg}`
    }else {
        if (inputOne > inputTwo) {
            percentageOutput.className = "sOHTSO"
            percentageOutput.innerHTML = `${inputOneGreaterThanInputTwo}`
        }else {
            let formula = (inputOne / inputTwo) * 100
            let result = formula.toFixed(0)
            percentageOutput.innerHTML = `${result}${"%"}`
            if (result < 70) {
                percentageOutput.className = "red"
            }else {
                percentageOutput.className = "green"
            }
            
        }
        
    }
})