function cartPrice() {
    const totalPriceEl = document.querySelector('.total-price');
    const cartrapper = document.querySelector('.cart-wrapper');
    const cartItem = document.querySelectorAll('.cart-item');
    const cartdelivery = document.querySelector('[data-cart-delivery]')
    const deliveryCost = document.querySelector('.delivery-cost');
    let totalPrice = 0;
    cartItem.forEach( function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const priceIn = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += priceIn;
    })
    totalPriceEl.innerText = totalPrice 
    if (totalPrice > 0) {
        cartdelivery.classList.remove('none')
    } else {
        cartdelivery.classList.add('none')
    }
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'
    }
}