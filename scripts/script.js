const headerCityButton = document.querySelector('.header__city-button');

// if (localStorage.getItem('lomoda-location')) {
//     headerCityButton.textContent = localStorage.getItem('lomoda-location');
// }

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?'

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});

//Модальное окно

const subHeaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
};

const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
};

subHeaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('cart__btn-close') || target.matches('.cart-overlay')) {
        cartModalClose();
    } 
    // является ли крестиком элемент, по которому кликнули
});