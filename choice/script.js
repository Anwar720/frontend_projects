const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//when mouse enter the left section, left section gets larger
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

//when mouse enters right section, the right section gets larger
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

