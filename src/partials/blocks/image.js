export default function Images() {
    const blocks = document.querySelectorAll('.block-content')
    
    if (!blocks) {
        return
    }

    blocks.forEach(block => {
        if (!block.classList.contains('columns')) {
            return
        }
        const imgs = block.querySelectorAll('img')
        imgs.forEach(img => {
            img.style.width = `${img.clientWidth}px`
            img.style.height = `${img.clientWidth}px`
        })
    })
}