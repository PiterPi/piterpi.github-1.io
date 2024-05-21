const btnBurger = document.querySelector('.header_burger')
const menuBurger = document.querySelector('.header_menu')
const menuClose = document.querySelector('.header_menu_close')
const chapterMenu = document.querySelectorAll('.header_menu_chapter')

const mobMenuOn = () => {

    btnBurger.addEventListener('click', () => {
        menuBurger.style.display = 'flex'
        document.body.style.overflow = 'hidden'
    })
}

const mobMenuOff = () => {

    menuClose.addEventListener('click', () => {
        menuBurger.style.display = 'none'
        document.body.style.overflow = 'scroll'
    })
}

chapterMenu.forEach((element) => {
    element.addEventListener('click', () => {
        menuClose.click()
    })
})


mobMenuOn()
mobMenuOff()
