function cartStatus () {
    const CartWrapper = document.querySelector('.cart-wrapper');
    const cartEm = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    if (CartWrapper.children.length > 0) {
        cartEm.classList.add('none')
        orderForm.classList.remove('none')
    } else {
        cartEm.classList.remove('none')
        orderForm.classList.add('none')
    }
}