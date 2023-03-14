let li = document.querySelector('.all');
let pop = document.querySelector('.pop');
let down = document.getElementById('tog');

li.addEventListener('click', () => {
    if (pop.style.display === 'none') {
        down.classList.toggle('fa-angle-up');
        pop.style.display = 'block';
        down.classList.toggle('fa-angle-down');
    }
    else {
        down.classList.toggle('fa-angle-up');
        pop.style.display = 'none';
        down.classList.toggle('fa-angle-down');
    }
});

let heart = document.querySelector('.fa-heart');

heart.addEventListener('click', () => {
    heart.classList.toggle('like');
});

let dog = document.querySelector('.dog');
let cat = document.querySelector('.cat');
let rabbit = document.querySelector('.rabbit');
let others = document.querySelector('.others');
let shelter = document.querySelector('.shelter');

let animals = [dog, cat, rabbit, others]

function closeBtn() {
    let mark = document.getElementById('close')
    mark.addEventListener('click', () => {
        $('.box').fadeOut();
        document.querySelector('.available').style.margin = '14rem 0 10rem';
    })
}
function closeBtn2() {
    let mark = document.getElementById('close2')
    mark.addEventListener('click', () => {
        $('.box-2').fadeOut();
        document.querySelector('.available').style.margin = '14rem 0 10rem';
    })
}

Array.from(animals).forEach((value, index, array) => {
    value.addEventListener('click', () => {
        if (index == 0) {
            let img = document.querySelector('.box-head img');
            img.src = './images/dog.png';
            $('.box').fadeIn();
            document.querySelector('.available').style.margin = '22rem 0 10rem';
            closeBtn();
        }
        else if (index == 1) {
            let img = document.querySelector('.box-head img');
            img.src = './images/cat-face.png';
            $('.box').fadeIn();
            document.querySelector('.available').style.margin = '22rem 0 10rem';
            closeBtn();
        }
        else if (index == 2) {
            let img = document.querySelector('.box-head img');
            img.src = './images/laugh.png';
            $('.box').fadeIn();
            document.querySelector('.available').style.margin = '22rem 0 10rem';
            closeBtn();
        }
        else if (index == 3) {
            let img = document.querySelector('.box-head img');
            img.src = './images/paws.png';
            $('.box-2').fadeIn();
            document.querySelector('.available').style.margin = '25rem 0 10rem';
            closeBtn2();
        }
    });
});

let cards = document.querySelectorAll('.plan');
let btnNext = document.querySelector('.fa-chevron-right');
let btnPrev = document.querySelector('.fa-chevron-left');

let curSlider = 0
let maxLength = cards.length - 1;

let x = window.matchMedia('(max-width: 576px)')

function myFunction(x) {
    if (x.matches) {
        cards.forEach((value, index, array) => {
            value.style.transform = `translateX(${index * 100}%)`
        })

        btnNext.addEventListener('click', () => {
            if (curSlider === maxLength) {
                curSlider = 0;
            }
            else {
                curSlider++
            }

            cards.forEach((value, index, array) => {
                value.style.transform = `translateX(${100 * (index - curSlider)}%)`
            })
        })

        btnPrev.addEventListener('click', () => {
            if (curSlider === 0) {
                curSlider = maxLength;
            }
            else {
                curSlider--
            }

            cards.forEach((value, index, array) => {
                value.style.transform = `translateX(${100 * (index - curSlider)}%)`
            })
        })
    }
}

myFunction(x);

// let curSlider = 0
// let maxLength = cards.length - 1;

// cards.forEach((value, index, array) => {
//     value.style.transform = `translateX(${index * 100}%)`
// })

// btnNext.addEventListener('click', () => {
//     if (curSlider === maxLength) {
//         curSlider = 0;
//     }
//     else {
//         curSlider++
//     }

//     cards.forEach((value, index, array) => {
//         value.style.transform = `translateX(${100 * (index - curSlider)}%)`
//     })
// })

// btnPrev.addEventListener('click', () => {
//     if (curSlider === 0) {
//         curSlider = maxLength;
//     }
//     else {
//         curSlider--
//     }

//     cards.forEach((value, index, array) => {
//         value.style.transform = `translateX(${100 * (index - curSlider)}%)`
//     })
// })