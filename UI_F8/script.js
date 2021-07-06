const tags = document.querySelectorAll('.tag-item');
const contents = document.querySelectorAll('.content-item');
const tag_active = document.querySelector('.tag-item.active');
const line = document.querySelector('.tag .line')

line.style.width = tag_active.offsetWidth + 'px';
line.style.left = tag_active.offsetLeft + 'px';

tags.forEach((tag, index) => {
    let content = contents[index];
    tag.addEventListener('click', () => {
        document.querySelector('.tag-item.active').classList.remove('active');
        document.querySelector('.content-item.active').classList.remove('active');

        line.style.width = tag.offsetWidth + 'px';
        line.style.left = tag.offsetLeft + 'px';

        tag.classList.add('active');
        content.classList.add('active');
        
    })
})
