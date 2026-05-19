const navarLink = document.querySelectorAll('.navbar__link')
navarLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navarLink.forEach(link => {
            link.classList.remove('navbar__link--active')
        })
        e.target.classList.add('navbar__link--active')
    })
})



const specialDots = document.querySelectorAll('.special__dot')
const specialItems = document.querySelectorAll('.special-item')
specialDots.forEach((dot) => {
    dot.addEventListener('click', e => {
        specialDots.forEach(dot => {
            dot.classList.remove('special__dot--active')
        })
        e.target.classList.add('special__dot--active')
        index = e.target.dataset.index
        specialItems.forEach(special => {
            special.style.transform = `translateX(${-(index) * 100}%)`
        })
    })
})

const serviceBtn = document.querySelectorAll('.service__btn')
let plus = false;
serviceBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(plus)
        const serviceItem = btn.parentNode.parentNode
        const serviceHeading = serviceItem.querySelector('.section-item-heading')
        const serviceDetail = serviceItem.querySelector('.service-item__desc');
        if (!plus) {
            plus = true;
            serviceItem.style.borderColor = 'var(--primary-purple)';
            serviceHeading.style.color = 'var(--primary-purple)'
            serviceDetail.style.display = 'block'
            e.target.src = './assets/img/Left.png'
        }
        else {
            plus = false;
            serviceItem.style.borderColor = 'var(--black)';
            serviceHeading.style.color = 'var(--black)'
            serviceDetail.style.display = 'none'
            e.target.src = './assets/img/Left.svg'
        }
    })
})

const header = document.querySelector('.header')
const headerBottom = document.querySelector('.header-bottom')
const headerBottomMobile = document.querySelector('.header-bottom-mobile')
headerBottom.innerHTML = header.innerHTML
headerBottomMobile.querySelector('.navbar').innerHTML = header.querySelector('.navbar').innerHTML
headerBottomMobile.querySelector('.header-bottom__logo').innerHTML = header.querySelector('.logo').innerHTML



const atmosphereDots = document.querySelectorAll('.atmosphere__dot')
const atmosphereItems = document.querySelectorAll('.atmosphere-item')
atmosphereDots.forEach((dot) => {
    dot.addEventListener('click', e => {
        atmosphereDots.forEach(dot => {
            dot.classList.remove('atmosphere__dot--active')
        })
        e.target.classList.add('atmosphere__dot--active')
        index = e.target.dataset.index
        atmosphereItems.forEach(atmosphere => {
            atmosphere.style.transform = `translateX(${-(index) * 100}%)`
        })
    })
})

const menuDrawer = document.querySelector('.menu-drawer')
menuDrawer.innerHTML = header.querySelector('.navbar').innerHTML