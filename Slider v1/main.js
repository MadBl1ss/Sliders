const slides = document.querySelectorAll('.slide')
const main = document.querySelector('body')
const colors = ['#846c3d', '#3d0f0d', '#2f2e2b', '#010103', '#2c0506'];

slides.forEach((slide, i) => {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
        colors.forEach((color, j) => {
            if (i == j) {
                main.style.backgroundColor = color;
            }
        })
    })
})


function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
