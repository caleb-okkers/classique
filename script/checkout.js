//displayCheckoutItems

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

function displayCheckoutItems (args) {
    const tbody = document.querySelector('#tbody')
    const cartTotal = document.querySelector('#cartTotal')
    tbody.innerHTML = ''

    let total = 0 

    if (checkoutItems.length > 0) {
        checkoutItems.forEach(item => {
            const row = document.createElement('tr')
            row.innerHTML = `
                    <td class='w-50'><img src="${item.img_url}" alt="${item.id}" class="img-thumbnail h-25 w-25"></td>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>R ${item.price}</td>
                    <td>${item.quantity}</td>
            `;
            tbody.appendChild(row)
    
            total += parseFloat(item.price) * item.quantity
        })
    }else {
        tbody.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }



    cartTotal.textContent = total.toFixed(2)
}
displayCheckoutItems()

//clearCart
// function clearCart() {
//     try {
//         localStorage.removeItem('checkout')
//         checkoutItems = []
//         document.querySelector('#counter').textContent = 0
//         document.getElementById('cartItems').innerHTML = ''
//         document.getElementById('cartTotal').textContent = 0.00
//         displayCheckoutItems()

//     }catch (e) {
//         alert('Clearing cart unsuccessful')
//     }

// }

// function deleteItemFromCart(index) {
//     checkoutItems.splice(index, 1);
//     localStorage.setItem('checkout', JSON.stringify(checkoutItems));
//     displayCheckoutItems();
// }

function clearCart() {
    localStorage.removeItem('checkout');
    alert('Press "OK" to remove items from your cart');
    location.reload();
}

function payNow() {
    localStorage.removeItem('checkout');
    alert('Payment successful');
    location.reload();
}