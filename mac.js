

// MAC BOOK

let macImg = document.querySelector('.mac-photo')
let whiteMac = document.querySelector('#white-mac')
let greyMac = document.querySelector('#grey-mac')
let colorName = document.querySelector('.color-name')
let price = document.querySelector('.price')

let memoryBtns = document.querySelectorAll('.memory-item')

whiteMac.onclick = () => {
    greyMac.classList.remove('active-btn')
    whiteMac.classList.add('active-btn')
    colorName.innerText = 'White'

    macImg.style.backgroundImage = `url('./img/mac-white.png')`
}
greyMac.onclick = () => {
    whiteMac.classList.remove('active-btn')
    greyMac.classList.add('active-btn')
    colorName.innerText = 'Space Gray'

    macImg.style.backgroundImage = `url('./img/mac-gray.png')`
}


memoryBtns.forEach(btn => {
    btn.onclick = () => {
        memoryBtns.forEach(btn => {
            btn.classList.remove('active-mem')
        })
        btn.classList.add('active-mem')

        if(btn.innerText.includes('200')) {
            price.innerText = '$2,199'
        } else if(btn.innerText.includes('600')) {
            price.innerText = '$2,599'
        } else if(btn.innerText.includes('1,200')) {
            price.innerText = '$3,199'
        } else {
            price.innerText = '$1,999'
        }
    }
})


