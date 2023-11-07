export default function Header() {
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')
    const headerMain = header.querySelector('.header--main')

    const catalogBtn = header.querySelector('.salary')
    const catalogMenu = document.querySelector('.menu-catalog')
    const catalogMobileBtn = menu.querySelector('.sell-glass')
    const catalogMenuHeight = catalogMenu.scrollHeight


    const aboutBtn = header.querySelector('.about-btn')
    const aboutMenu = document.querySelector('.menu-about')
    const aboutMobileBtn = menu.querySelector('.about-us')
    const aboutMenuHeight = aboutMenu.scrollHeight

    const backBtn = header.querySelector('.header--back-button')

    catalogBtn.addEventListener('click', () => {
        catalogMenu.classList.toggle('open')
        headerMain.classList.toggle('header-active')

        if (!catalogMenu.classList.contains('open')) {
            catalogMenu.style.height = '0px'
            return
        }

        catalogMenu.style.height = `${catalogMenu.scrollHeight}px`
    })
    
    catalogMobileBtn.addEventListener('click', () => {
        CatalogMenuToggle()
        backBtn.classList.toggle('hidden')
    })

    aboutBtn.addEventListener('click', () => {
        aboutMenu.classList.toggle('open')
        headerMain.classList.toggle('header-active')

        if (!aboutMenu.classList.contains('open')) {
            aboutMenu.style.height = '0px'
            return
        }

        aboutMenu.style.height = `${aboutMenu.scrollHeight}px`
    })

    aboutMobileBtn.addEventListener('click', () => {
        AboutMenuToggle()
        backBtn.classList.toggle('hidden')
    })

    backBtn.addEventListener('click', () => {
        backBtn.classList.add('hidden')
        if (aboutMenu.classList.contains('open')) {
            AboutMenuToggle()
            return
        }
        CatalogMenuToggle()
    })
}

function AboutMenuToggle() {
    const aboutMenu = document.querySelector('.menu-about')
    aboutMenu.classList.toggle('open')
    
    if (!aboutMenu.classList.contains('open')) {
        aboutMenu.style.height = '0px'
        return
    }

    aboutMenu.style.height = `fit-content`
}

function CatalogMenuToggle() {
    const catalogMenu = document.querySelector('.menu-catalog')
    catalogMenu.classList.toggle('open')

    if (!catalogMenu.classList.contains('open')) {
        catalogMenu.style.height = '0px'
        return
    }

    catalogMenu.style.height = `fit-content`
}
