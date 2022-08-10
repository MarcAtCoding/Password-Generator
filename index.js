const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let btnGenerate = document.querySelector('.btn-generate')
let passwordOne = document.querySelector('.password1')
let passwordTwo = document.querySelector('.password2')
let numbersIsChecked = document.querySelector('#numbers')
let symbolsIsChecked = document.querySelector('#symbols')
let setLengthIsChecked = document.querySelector('#set-length')
let setLengthIsFilled = document.querySelector('#input-line')
numbersIsChecked.checked = true
symbolsIsChecked.checked = true
setLengthIsChecked.checked = false

function random(array) {
    let random = Math.floor(Math.random()*array.length)
    return (array[random])
}
function lengthRandom(min, max) { 
    let randomLength = Math.floor(Math.random() * (max - min)) + min
    return randomLength
}

let inputLine = document.querySelector('#input-line').value 

//
function getNumArr() {
    let numberList = characters.filter(value => typeof value === 'number')
    return numberList
}
const newCharArr = getNumArr() //num arr

function getIndexRange(start, end){
    var sliced = characters.slice(start, end)
    return sliced  
}

function getLetterArr(first, last) {
    let letterArr = getIndexRange(characters.indexOf(first, 0), characters.indexOf(last, 0))
    return letterArr
}

//

btnGenerate.addEventListener("click", ()=> {
    if (numbersIsChecked.checked === true && symbolsIsChecked.checked === true && setLengthIsChecked.checked === false) { //default
        passwordOne.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordOne.innerHTML += random(characters)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordTwo.innerHTML += random(characters)
        }
    } 
    else if (setLengthIsChecked.checked === true && inputLine.value != "" && numbersIsChecked.checked === true && symbolsIsChecked.checked === true) {
        let numInput = document.querySelector('#input-line').value
        passwordOne.innerHTML = ""
        for (let i = 0; i < lengthRandom(numInput, numInput); i++) {
            passwordOne.innerHTML += random(characters)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < lengthRandom(numInput, numInput); i++) {
            passwordTwo.innerHTML += random(characters)
        } 
    }
    else if (setLengthIsChecked.checked === true && inputLine.value != "" && numbersIsChecked.checked === true && symbolsIsChecked.checked === false) {
        const newLetterArr = getLetterArr("A", 0)
        const lettersAndNumbersArr = newCharArr.concat(newLetterArr)
        let numInput = document.querySelector('#input-line').value
        passwordOne.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordOne.innerHTML += random(lettersAndNumbersArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordTwo.innerHTML += random(lettersAndNumbersArr)
        }         
    }
    else if (setLengthIsChecked.checked === true && inputLine.value != "" && numbersIsChecked.checked === false && symbolsIsChecked.checked === true){
        const symbolArr = getLetterArr("~","/")
        symbolArr.push("/")
        const letterArr = getLetterArr("A", 0)
        const newSymbolArr = symbolArr.concat(letterArr)
        let numInput = document.querySelector('#input-line').value
        passwordOne.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordOne.innerHTML += random(newSymbolArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordTwo.innerHTML += random(newSymbolArr)
        }         
    }
    else if (numbersIsChecked.checked === true && symbolsIsChecked.checked === false && setLengthIsChecked.checked === false) { 
        const letterArr = getLetterArr("A", 0)
        const newArr = letterArr.concat(newCharArr)
        passwordOne.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordOne.innerHTML += random(newArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordTwo.innerHTML += random(newArr)
        }
    } 
    else if (numbersIsChecked.checked === false && symbolsIsChecked.checked === true && setLengthIsChecked.checked === false) { 
        const letterArr = getLetterArr("A", 0)
        const symbolArr = getLetterArr("~","/")
        symbolArr.push("/")
        const newArr = letterArr.concat(symbolArr)
        passwordOne.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordOne.innerHTML += random(newArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordTwo.innerHTML += random(newArr)
        }
    }
    else if (numbersIsChecked.checked === false && symbolsIsChecked.checked === false && setLengthIsChecked.checked === true){
        let numInput = document.querySelector('#input-line').value
        const letterArr = getLetterArr("A", 0)
        passwordOne.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordOne.innerHTML += random(letterArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < numInput; i++) {
            passwordTwo.innerHTML += random(letterArr)
        }
    }
    else if (numbersIsChecked.checked === false && symbolsIsChecked.checked === false && setLengthIsChecked.checked === false){
        let numInput = document.querySelector('#input-line').value
        const letterArr = getLetterArr("A", 0)
        passwordOne.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordOne.innerHTML += random(letterArr)
        }
        passwordTwo.innerHTML = ""
        for (let i = 0; i < lengthRandom(12, 15); i++) {
            passwordTwo.innerHTML += random(letterArr)
        }
    }
})
let boxOne = document.querySelector('.box1')
let boxTwo = document.querySelector('.box2')
boxOne.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordOne.textContent);
})
boxTwo.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordTwo.textContent);
})