//displayCheckoutItems

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

function displayCheckoutItems () {
    const tbody = document.querySelector('table tbody')
    const cartTotal = document.querySelector('#cartTotal')
    tbody.innerHTML = ''

    let total = 0 

    checkoutItems.forEach(item => {
        const row = document.createElement('tr')
        row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R ${item.price}</td>
                <td>1</td>
        `;
        tbody.appendChild(row)

        total = parseFloat(item.price)
    })

    cartTotal.textContent = total.toFixed(2)
}

//clearCart
function clearCart() {
    try {
        localStorage.removeItem('checkout')
        checkoutItems = []
        document.querySelector('#counter').textContent = 0
        displayCheckoutItems()
        document.getElementById('cartItems').innerHTML = ''
        document.getElementById('cartTotal').textContent = 0.00

    }catch (e) {
        alert('Clearing cart unsuccessful')
    }

}

