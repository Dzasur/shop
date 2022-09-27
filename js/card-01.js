const cartwrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', function(event) {
    let card;
    let productInfo;
    if(event.target.hasAttribute('data-cart')) {
        card = event.target.closest('.card');
        productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsBox: card.querySelector('[data-items-in-box]').innerText,
            wieght: card.querySelector('.price__weight').innerText,
            currency: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };
        // Проверка наличия товара в корзине
        const itemInCart = cartwrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
            
            
                    const cartItem = `<div class="cart-item" data-id="${productInfo.id}">
                    <div class="cart-item__top">
                        <div class="cart-item__img">
                            <img src="${productInfo.imgSrc}" alt="">
                        </div>
                        <div class="cart-item__desc">
                            <div class="cart-item__title">${productInfo.title}</div>
                            <div class="cart-item__weight">${productInfo.itemsBox} / ${productInfo.wieght}</div>
            
                            <!-- cart-item__details -->
                            <div class="cart-item__details">
            
                                <div class="items items--small counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                </div>
            
                                <div class="price">
                                    <div class="price__currency">${productInfo.currency}</div>
                                </div>
            
                            </div>
                            <!-- // cart-item__details -->
            
                        </div>
                    </div>
                 </div>`;
                    cartwrapper.insertAdjacentHTML('beforeend', cartItem)
        }
        card.querySelector('[data-counter]').innerText = "1";
        cartStatus()
        cartPrice()
    }
})
/*
.closest - поиск близко находящегося родителя
.getAttribute - поиск атрибута
.insertAdjacentHTML -  введение кода в HTML разметку
.hasAttribute - имеет атрибут
Array.isArray() - проверяет это массив или нет
.setAttribute() - добавить атрибут
.appendChild - добавить в разметку
'keypress' - по нажатию
.createElement - создать элемент
.preventDefault - сбросить стандартное поведение
.select - выделяет(оставляет в фокусе)
.push - добавляет один элемент с конца массива или объекта
.pop - удаляет один элемент с конца массива и объекта
.unshift - добавляет один элемент с начала массива или объекта
.shift - удаляет один элемент с начала массива или объекта
.join - делает из массива строку, например: arr.join(" "), arr.join(), arr.join("")
*/