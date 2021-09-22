let tl = gsap.timeline();

tl.from('.letter', {
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    color: '#bd32e7'

})

tl.to('.letter1', {
    duration: 0.5,
    delay: 0.5,
    fontSize: '15rem',
    x: -200,
    y: 100,
})

tl.to('.letter2', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '14rem',
    x: 1,
    y: -1,
})

tl.to('.letter3', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: -150,
    y: 200,
})

tl.to('.letter4', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '15rem',
    x: 20,
    y: -120,
})

tl.to('.letter5', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '10rem',
    x: 8,
    y: -90,
})

tl.to('.letter6', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '7rem',
    x: -100,
    y: 100,
})

tl.to('.letter7', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '8rem',
    x: 10,
    y: 100,
})

tl.to('.letter8', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '12rem',
    x: 100,
    y: 150,
})

tl.to('.letter9', {
    duration: 0.5,
    delay: -0.5,
    fontSize: '15rem',
    x: 20,
    y: -200,
})


tl.from('header', {
    duration: 0.5,
    y: 40,
    opacity: 0
})

tl.from('.triangle', {
    duration: 0.5,
    opacity: 0
}), "<0.5"

tl.to('.triangle', {
    duration: 2,
    opacity: 0
}), ">0.5"

tl.from('.lines', {
    duration: 0.5,
    opacity: 0
}), "<0.5"

tl.to('.letter', {
    duration: 1.5,
    opacity: 0,
    stagger: 0.25,
    color: '#bd32e7'
})
"<0.5"





let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})