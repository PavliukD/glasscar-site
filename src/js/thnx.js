export default function Thnx(name, backdrop){
    const named = document.querySelector('[data-thnx="named"]')
    const userName = named.querySelector('.thnx-popup--name')

    const unnamed = document.querySelector('[data-thnx="unnamed"]')
    const blackBackdrop = document.querySelector('.backdrop')
    const blueBackdrop = document.querySelector('.backdrop-blue')

    if (name.trim() === "") {
        unnamed.classList.remove('hidden')

        if (!backdrop) {    
            blackBackdrop.classList.remove('hidden')
            setTimeout(() => {
                blackBackdrop.classList.add('hidden')
                unnamed.classList.add('hidden')
            },2500)
            return
        }
        console.log('wtf')
        blueBackdrop.classList.remove('hidden')
        setTimeout(() => {
            blueBackdrop.classList.add('hidden')
            unnamed.classList.add('hidden')
        },2500)
        return
    }
    named.classList.remove('hidden')
    userName.innerText = `${name}`

    if (!backdrop) {    
        blackBackdrop.classList.remove('hidden')
        setTimeout(() => {
            blackBackdrop.classList.add('hidden')
            named.classList.add('hidden')
        },2500)
        return
    }
    blueBackdrop.classList.remove('hidden')
    setTimeout(() => {
        blueBackdrop.classList.add('hidden')
        named.classList.add('hidden')
    },2500)
    return
}