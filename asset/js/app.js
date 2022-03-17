/* LOGO portfolio Javascript */

let tl = gsap.timeline();

tl.from('.letter', {
    duration: 0.2,
    opacity: 0,
    stagger: 0.25,
    color: '#bd32e7'

})

tl.to('.letter1', {
    duration: 0.2,
    delay: 0.5,
    fontSize: '4rem',
    x: -1,
    y: 0,
})

tl.to('.letter2', {
    duration: 0.2,
    delay: 1,
    fontSize: '4rem',
    x: 120,
    y: 1,
})

tl.to('.letter3', {
    duration: 0.2,
    delay: 1.5,
    fontSize: '4rem',
    x: 2,
    y: -1,
})

tl.to('.letter4', {
    duration: 0.2,
    delay: 1.5,
    fontSize: '4rem',
    x: 290,
    y: -300,
})

tl.to('.letter5', {
    duration: 0.2,
    delay: 0.5,
    fontSize: '4rem',
    x: 60,
    y: -1,
})

tl.to('.letter6', {
    duration: 0.2,
    delay: 2,
    fontSize: '4rem',
    x: -350,
    y: 300,
})

tl.to('.letter7', {
    duration: 0.2,
    delay: 1.5,
    fontSize: '4rem',
    x: 80,
    y: -1,
})

tl.to('.letter8', {
    duration: 0.2,
    delay: 1.5,
    fontSize: '4rem',
    x: 0,
    y: -1,
})

tl.to('.letter9', {
    duration: 0.2,
    delay: 1.5,
    fontSize: '4rem',
    x: 300,
    y: 300,
})


tl.from('header', {
    duration: 0.5,
    y: 50,
    opacity: 0
})

tl.from('.triangle', {
    duration: 2,
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
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
    color: '#bd32e7'
})
"<0.5"




/*toggle javascript for responsive*/

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})