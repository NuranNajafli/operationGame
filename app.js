let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let oper = document.getElementById("operation")
let res = document.getElementById("res")
let submit = document.getElementById("submit")
let truee = document.getElementById("truee")
let falsee = document.getElementById("falsee")



const randomNum = (min, max) => {
    let number = Math.floor((Math.random() * (max - min)) + min)
    return number;
}

const newQuestion = () => {
    let operation = ["+", "-", "/", "*"]
    oper.innerText = operation[randomNum(0, 4)]
    num1.innerText = randomNum(0, 20)
    num2.innerText = randomNum(0, 20)

    if (oper.innerText == "/") {
        while (true) {
            num2.innerText = randomNum(0, 20)
            if (num1.innerText % num2.innerText == 0) {
                break;
            }
        }
    }
}

window.addEventListener("load", () => {
    newQuestion()
})

submit.addEventListener("click", () => {

    let answer;
    let number1 = Number(num1.innerText)
    let number2 = Number(num2.innerText)

    if (oper.innerText == "+") {
        answer = number1 + number2
    } else if (oper.innerText == "-") {
        answer = number1 - number2
    } else if (oper.innerText == "/") {
        answer = number1 / number2
    } else if (oper.innerText == "*") {
        answer = number1 * number2
    }

    // switch (oper.innerText) { 
    //     case "+": answer = number1 + number2; break;
    //     case "-": answer = number1 - number2; break;
    //     case "/": answer = number1 / number2; break;
    //     case "*": answer = number1 * number2; break;
    //     default: break;
    // }
    if (res.value == answer) {
        truee.innerText = Number(truee.innerText) + 1
    } else {
        falsee.innerText = Number(falsee.innerText) + 1
    }
    newQuestion()
})
