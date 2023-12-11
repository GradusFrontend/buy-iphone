let colorText = document.querySelector('.color')

let all = document.querySelector('#all-iphones')

let naturalBox = document.querySelector('#natural-box')
let blueBox = document.querySelector('#blue-box')
let whiteBox = document.querySelector('#white-box')
let blackBox = document.querySelector('#black-box')

let naturalTitan = document.querySelector('#natural-titanium')
let bluelTitan = document.querySelector('#blue-titanium')
let whiteTitan = document.querySelector('#white-titanium')
let blackTitan = document.querySelector('#black-titanium')

let natural = document.querySelector('#natural')
let blue = document.querySelector('#blue')
let white = document.querySelector('#white')
let black = document.querySelector('#black')

naturalTitan.onmouseenter = () => {
    colorText.innerText = 'Color - Natural Titamium'
}
naturalTitan.onmouseleave = () => {
    colorText.innerText = 'Color'
}


bluelTitan.onmouseenter = () => {
    colorText.innerText = 'Color - Blue Titamium'
}
bluelTitan.onmouseleave = () => {
    colorText.innerText = 'Color'
}


whiteTitan.onmouseenter = () => {
    colorText.innerText = 'Color - White Titamium'
}
whiteTitan.onmouseleave = () => {
    colorText.innerText = 'Color'
}


blackTitan.onmouseenter = () => {
    colorText.innerText = 'Color - Black Titamium'
}
blackTitan.onmouseleave = () => {
    colorText.innerText = 'Color'
}



naturalTitan.onclick = () => {
    colorText.innerText = 'Color - Natural Titamium'

    naturalBox.style.border = '2px solid rgb(0, 113, 227)'
    blueBox.style.border = '0'
    whiteBox.style.border = '0'
    blackBox.style.border = '0'

    natural.classList.remove('unvisible')
    all.classList.add('unvisible')
    blue.classList.add('unvisible')
    white.classList.add('unvisible')
    black.classList.add('unvisible')
}


bluelTitan.onclick = () => {
    colorText.innerText = 'Color - Blue Titamium'

    blueBox.style.border = '2px solid rgb(0, 113, 227)'
    naturalBox.style.border = '0'
    whiteBox.style.border = '0'
    blackBox.style.border = '0'

    blue.classList.remove('unvisible')
    all.classList.add('unvisible')
    natural.classList.add('unvisible')
    white.classList.add('unvisible')
    black.classList.add('unvisible')
}


whiteTitan.onclick = () => {
    colorText.innerText = 'Color - White Titamium'

    whiteBox.style.border = '2px solid rgb(0, 113, 227)'
    blueBox.style.border = '0'
    naturalBox.style.border = '0'
    blackBox.style.border = '0'

    white.classList.remove('unvisible')
    all.classList.add('unvisible')
    natural.classList.add('unvisible')
    blue.classList.add('unvisible')
    black.classList.add('unvisible')
}


blackTitan.onclick = () => {
    colorText.innerText = 'Color - Black Titamium'

    blackBox.style.border = '2px solid rgb(0, 113, 227)'
    blueBox.style.border = '0'
    whiteBox.style.border = '0'
    naturalBox.style.border = '0'

    black.classList.remove('unvisible')
    all.classList.add('unvisible')
    natural.classList.add('unvisible')
    blue.classList.add('unvisible')
    white.classList.add('unvisible')
}

  