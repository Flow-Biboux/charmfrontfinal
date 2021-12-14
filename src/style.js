import './assets/less/style.less'

AOS.init()

let header = document.querySelector('header')
let burgerIcon = document.querySelector('.burger-icon-container')
let MainNav = document.querySelector('.main-nav')
let MenuLinks = document.querySelector('.menu')

function HeaderFixed() {
    let documentPosition = window.scrollY

    if (documentPosition > 10) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
}

window.addEventListener('scroll', function (e) {
    HeaderFixed()
})

burgerIcon.addEventListener('click', function (e) {
    burgerIcon.classList.toggle('open')
    MainNav.classList.toggle('show')
})

MenuLinks.addEventListener('click', function (e) {
    burgerIcon.classList.toggle('open')
    MainNav.classList.toggle('show')
})

window.onload = function () {
    HeaderFixed()
}
