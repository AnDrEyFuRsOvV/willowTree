
    const minusBtns = document.querySelectorAll('.minus'); // Кнопки минус
    const plusBtns = document.querySelectorAll('.plus'); // Кнопки плюс
    const numberSpans = document.querySelectorAll('.number'); // Элементы с числами
    const priceSpans = document.querySelectorAll('.basket__price-span'); // Элементы с ценами
    const allPriceSpan = document.querySelector('.basket__all-price-span'); // Элемент с общей суммой

    let totalPrice = 0; // Общая сумма

    // Вычисляем общую сумму изначально
    priceSpans.forEach((priceSpan) => {
        totalPrice += parseInt(priceSpan.textContent.replace(/\s+/g, '').replace(/[^\d.-]/g, ''));
    });

    // Выводим общую сумму на страницу
    allPriceSpan.textContent = totalPrice.toLocaleString();

    // Добавляем обработчики событий на кнопки минус
    minusBtns.forEach((minusBtn, index) => {
        minusBtn.addEventListener('click', () => {
            let number = parseInt(numberSpans[index].textContent);
            let price = parseInt(priceSpans[index].textContent.replace(/\s+/g, '').replace(/[^\d.-]/g, ''));
            if (number > 1) {
                number--;
                price -= 190000;
                numberSpans[index].textContent = number;
                priceSpans[index].textContent = price.toLocaleString();
                totalPrice -= 190000;
                allPriceSpan.textContent = totalPrice.toLocaleString();
            }
        });
    });

    // Добавляем обработчики событий на кнопки плюс
    plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener('click', () => {
            let number = parseInt(numberSpans[index].textContent);
            let price = parseInt(priceSpans[index].textContent.replace(/\s+/g, '').replace(/[^\d.-]/g, ''));
            number++;
            price += 190000;
            numberSpans[index].textContent = number;
            priceSpans[index].textContent = price.toLocaleString();
            totalPrice += 190000;
            allPriceSpan.textContent = totalPrice.toLocaleString();
        });
    });



