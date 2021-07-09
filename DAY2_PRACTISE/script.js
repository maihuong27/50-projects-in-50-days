const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let listItem = $$('.item');
let listLine = $$('.line');

let prev = $('.prev');
let next = $('.next');

let itemActive = 1;
let lineActive;

next.addEventListener('click', () => {
    itemActive++;
    if(itemActive > listItem.length) itemActive = listItem.length;
    
    update();
})

prev.addEventListener('click', () => {
    itemActive--;
    if(itemActive < 1) itemActive = 1;
    
    update();
})

function update() {
    listItem.forEach((item, idx) => {
        if(idx < itemActive) {
            item.classList.add('active');
            if(itemActive < 2) lineActive = 0;
            else lineActive = itemActive - 2;
            listLine[lineActive].classList.add('active');
        } else {
            item.classList.remove('active');
            listLine[itemActive - 1].classList.remove('active');
        }
        
    });

    if(itemActive === listItem.length) next.disabled = true;
    else if(itemActive === 1) prev.disabled = true;
    else{
        next.disabled = false;
        prev.disabled = false;
    }
}