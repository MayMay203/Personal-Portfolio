const navarLink = document.querySelectorAll('.navbar__link')
navarLink.forEach(link => {
    link.addEventListener('click', (e) => {
        navarLink.forEach(link => {
            link.classList.remove('navbar__link--active')
        })
        e.target.classList.add('navbar__link--active')
    })
})

const video = document.querySelector('video')
let isPlay = false
const playBtn = document.querySelector('.video__play-btn')
playBtn.addEventListener('click', () => {
    if (isPlay) {
        isPlay = false;
        video.pause();
        playBtn.innerHTML=''
        playBtn.innerHTML = '<img src="./assets/icons/play_video.svg" alt="play-icon">'
    }
    else {
        isPlay = true;
        video.play();
        playBtn.innerHTML = ''
        playBtn.innerHTML='<img src="./assets/icons/pause_video.svg" alt="play-icon" class="video__pause-icon">'
    }
})

video.addEventListener('ended', () => {
    isPlay = false;
    playBtn.innerHTML = '<img src="./assets/icons/play_video.svg" alt="play-icon">';
});

const feedbackDots = document.querySelectorAll('.feedback__dot')
const feedbackItems = document.querySelectorAll('.feedback-item')
feedbackDots.forEach((dot) => {
    dot.addEventListener('click', e => {
        feedbackDots.forEach(dot => {
            dot.classList.remove('feedback__dot--active')
        })
        e.target.classList.add('feedback__dot--active')
        index = e.target.dataset.index
        feedbackItems.forEach(feedback => {
            feedback.style.transform = `translateX(${-(index) * 100}%)`
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
        }
    })
})