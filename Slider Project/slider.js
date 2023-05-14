

const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector('.bottom')


let sliderNumber = 1;
const length = images.length


for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent'
    })
}


buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg();
        slider.style.transform = `translateX(${-800 * i}px)`;
        sliderNumber = i + 1;
        button.style.backgroundColor = 'white'

    })
})


const nextSlide = () => {
    slider.style.transform = `translateX(${-800 * sliderNumber}px)`
    sliderNumber++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(${-800 * (sliderNumber - 2)}px)`
    sliderNumber--;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    sliderNumber = 1;
}
const getLastSlide = () => {
    slider.style.transform = `translateX(${-800 * (length - 1)}px)`
    sliderNumber = length;
}
const changeBg = () => {
    resetBg()
    buttons[sliderNumber - 1].style.backgroundColor = 'white'
}
right.addEventListener('click', () => {
    sliderNumber < length ? nextSlide() : getFirstSlide();
    changeBg();
})
left.addEventListener('click', () => {
    sliderNumber > 1 ? prevSlide() : getLastSlide();
    changeBg();
})






