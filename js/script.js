/*open image modal by clicking individual image*/
document.querySelectorAll('.img-container img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.popup-img img').src = '';
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.src
            .replace('gfx_thumbs', 'gfx_images')
            .replace('.webp', '.png');
    });
});

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
    document.querySelector('.popup-img img').src = '';
}

/*exit through outside click*/
document.querySelector('.popup-img').addEventListener('click', (e) => {
    if (e.target === document.querySelector('.popup-img')) {
        document.querySelector('.popup-img').style.display = 'none';
        document.querySelector('.popup-img img').src = '';
    }
});

/*exit through esc*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.popup-img').style.display = 'none';
        document.querySelector('.popup-img img').src = '';
    }
});