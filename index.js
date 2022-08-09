const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let btnGenerate = document.querySelector('.btn-generate')
let passwordOne = document.querySelector('.password1')
let passwordTwo = document.querySelector('.password2')

function random() {
    let random = Math.floor(Math.random()*characters.length)
    return (characters[random])
}
function lengthRandom(min, max) { 
    let randomLength = Math.floor(Math.random() * (max - min)) + min
    return randomLength
}
btnGenerate.addEventListener("click", ()=> {
    passwordOne.innerHTML = ""
    for (let i = 0; i < lengthRandom(12, 15); i++) {
        passwordOne.innerHTML += random()
    }
})
btnGenerate.addEventListener("click", ()=> {
    passwordTwo.innerHTML = ""
    for (let i = 0; i < lengthRandom(12, 15); i++) {
        passwordTwo.innerHTML += random()
    }
})

/*----------------Customize----------------------*/

let numbersIsChecked = document.querySelector('#numbers')
let symbolsIsChecked = document.querySelector('#symbols')
let setLengthIsChecked = document.querySelector('#set-length')
let setLengthIsFilled = document.querySelector('#input-line')

numbersIsChecked.checked = true
symbolsIsChecked.checked = true
if (numbersIsChecked.checked === true ) {
    const numberList = characters.filter(value => typeof value === 'number')
    const numberRand = lengthRandom(numberList[0], numberList[9] + 1)
    console.log(numberRand)
}
else if (numbersIsChecked.checked === false && symbolsIsChecked.checked === true) {
    const symbolRand = characters[lengthRandom(characters.indexOf("~", 0), characters.indexOf("/", 0))]
    console.log(symbolRand)
}