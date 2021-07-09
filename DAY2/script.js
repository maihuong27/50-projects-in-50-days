const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let itemList = $$('.item');
let lines = $$('.line');

let prev = $('.prev');
let next = $('.next');

let count = 1;

next.addEventListener('click', () => {
    count++;
    if(count > itemList.length) count = itemList.length;
   
    update();
    
})

prev.addEventListener('click', () => {
    count--;
    if(count < 1) count = 1;
    
    update();
})


function update() {
    let lineActive;
    itemList.forEach((item, idx) => {
        if(idx < count) {
            item.classList.add('active');
            if(count <= 2) lineActive = 0;
            else lineActive = count - 2;
            lines[lineActive].classList.add('active');
        } else {
            item.classList.remove('active');
            lines[count - 1].classList.remove('active');
        }

    });
    
    if(count === itemList.length) next.disabled = true;
    else if(count === 1) prev.disabled = true;
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}





