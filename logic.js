let random = parseInt(Math.random() * 100 + 1)
console.log(random)
let LastAttempt = []
const submit = document.querySelector('#Submit') 
let guessInput = document.querySelector('#input')
const lowHig = document.querySelector('#LH')
const remain = document.querySelector('#remain')
const winLoss = document.querySelector('#winLoss')
const YourAttempt = document.querySelector('#youAttempt')
let remaining = 1
let move = document.querySelector('#remaining')
const startGame = document.querySelector('#result')
// const input = document.querySelector('#input')
// const lowHig = document.querySelector('#LH')
const lord = document.createElement('p')
let start = true

if(start){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        let input1 = parseInt(guessInput.value);
        console.log(input1)
        validrule(input1)
    })
}

function validrule(guess){
    if(isNaN(guess)){
        alert('Please give the Valid number')
    }
    else if(guess<1){
        alert('Please give the number more than 1')
    }
    else if(guess>100){
        alert('Please give the number less than 100')
    }
    else{

        checkGuess(guess)
    }
}

function checkGuess(guess){
    if(guess === random){
        winLoss.innerHTML = `<h2>Congratulation you WIN</h2>`
        Endgame();
    }
    else if(guess > random){
        property(guess)
        clearGuess(guess)
        displayMessage(`your guess is TOO HIGH`)
    }

    else if(guess < random){
        property(guess)
        clearGuess(guess)
        displayMessage(`your guess is TOO LOW`)
    }
    else{

    }
    // checkGuess(guess)
}


function property(guess){
    LastAttempt.push(guess)
    // console.log(LastAttempt)
    let remainingMove = 10 - remaining;
    remaining++;
    move.innerHTML = `${remainingMove}`
    clearGuess(guess)
    if(remainingMove === 0){
        winLoss.innerHTML = `YOU LOSE. THE GUESS NUMBER IS ${random}`
        Endgame();

    }
    clearGuess(guess)
}

function clearGuess(guess){
    guessInput.value = ''
    YourAttempt.innerHTML = LastAttempt  
}

function displayMessage(mess){
    lowHig.innerHTML = `<h3>${mess}</h3>`
}

function Endgame(){
    guessInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    LastAttempt = []
    remaining = 1
    lord.classList.add('button')
    lord.innerHTML = 'start new game'
    startGame.appendChild(lord)
    start = false
    newGame()

}
function newGame(){
    startGame.addEventListener('click',function(){
        start = true
        random = parseInt(Math.random() * 100 + 1)
        console.log(random)
        guessInput.value = ''
        LastAttempt = []
        winLoss.innerHTML = ``
        lowHig.innerHTML = ``;
        move.innerHTML = ` 10`
        submit.removeAttribute("disabled")
        
        startGame.removeChild(lord);
        guessInput.removeAttribute('disabled')
        
    })
}
