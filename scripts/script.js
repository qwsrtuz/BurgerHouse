window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#main-action-button').addEventListener('click', () => {
        document.querySelector('#products').scrollIntoView( {behavior: 'smooth'});
    });
    
    let links = document.querySelectorAll('.menu-item > a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            document.getElementById(links[i].getAttribute('data-link')).scrollIntoView( {behavior: 'smooth'});
        });
    }

    let button = document.querySelectorAll('.products-button')
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            document.getElementById('order').scrollIntoView( {behavior: 'smooth'});
        });
    }

    let burger = document.querySelector('#burger'),
        name = document.querySelector('#name'),
        phone = document.querySelector('#phone');

    document.querySelector('#order-action').addEventListener('click', () => {
        let hasError = false;
        [burger, name, phone].forEach(item => {
            if (!item.value) {
                item.parentElement.style.background = 'red';
                hasError = true;
            } else {
                item.parentElement.style.background = '';
            }
        });
        if (!hasError) {
            [burger, name, phone].forEach(item => {
                item.value = '';
            });
            alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
        }
    });

    let prices = document.querySelectorAll('.products-item-price')
    document.querySelector('#change-currency').addEventListener('click', (e) => {
        let currentCurrency = e.target.innerText;
        
        let newCurrency = '$';
        let coefficient = 1;

        if (currentCurrency == '$') {
            newCurrency = '₽'
            coefficient = 83;
        } else if (currentCurrency == '₽') {
            newCurrency = 'BYN'
            coefficient = 3;
        } else if (currentCurrency === 'BYN') {
            newCurrency = '€';
            coefficient = 0.9;
        } else if (currentCurrency === '€') {
            newCurrency = '¥';
            coefficient = 6.9;
        }
        e.target.innerText = newCurrency;

        for (let i = 0; i < prices.length; i++) {
            prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
        }
    });

});