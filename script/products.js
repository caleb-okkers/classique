// let container = document.querySelector('#catalogue')
// let search = document.querySelector('#search')
// let sorting = document.querySelector('#sort')

// let products = JSON.parse(localStorage.getItem('products')) || []

// //display products

// function displayProducts(args) {
//     container.innerHTML = ""
//     try {
//         args.forEach(product => {
//             container.innerHTML += `
//                 <div class="card">
//                     <img src="${product.img_url}" class="card-img-top" alt="${product.name}" loading="lazy">
//                     <div class="card-body">
//                         <h5 class="card-title">${product.name}</h5>
//                         <p class="card-description-toggle">Description <span>+</span></p>
//                         <p class="card-text card-description">${product.description}</p>
//                         <p class="card-text">R ${product.price}</p>
//                         <button type='button' class="btn btn-outline-success addToCart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
//                     </div>
//                 </div>
            
//              ` 
//         })

//         document.querySelectorAll('.card-description-toggle').forEach(toggle => {
//             toggle.addEventListener('click', function() {
//                 const description = this.nextElementSibling;
//                 if(description.style.display === 'none' || description.style.display === '') {
//                     description.style.display = 'block'
//                     this.querySelector('span').textContent = '-'

//                 }else {
//                     description.style.display = 'none'
//                     this.querySelector('span').textContent = '+'
//                 }
//             })
//         })
        
        

//     } catch (e) {
//         container.textContent = 'Please try again later'
//     }
// }

// displayProducts(products)


// //addtocart

// let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

// function addToCart(product){
//     try {
//         checkoutItems.push(product)
//         localStorage.setItem('checkout', JSON.stringify(checkoutItems))
//         document.querySelector('#counter').textContent = 
//         checkoutItems.length || 0

//     }catch(e) {
//         alert("Add to cart unsuccessful")
//     }
// }




// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#counter').textContent = checkoutItems.length || 0
    
//     document.querySelectorAll('.addToCart').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let product = {
//                     id: event.target.dataset.id,
//                     name: event.target.dataset.name,
//                     price: event.target.dataset.price,
        
//                 };
//                 addToCart(product)
//             })
//         })
// })

// function clearCart() {
//     try {
//         localStorage.removeItem('checkout')
//         checkoutItems = []
//         document.querySelector('#counter').textContent = 0
//         document.getElementById('cartItems').innerHTML = ''
//         document.getElementById('cartTotal').textContent = '0.00'

//     }catch (e) {
//         alert('Clearing cart unsuccessful')
//     }

// }

// document.addEventListener('DOMContentLoaded', () => {

//     document.querySelector('#clearCartBtn').addEventListener('click', clearCart)
// })





// //search

// search.addEventListener('keyup', () => {
//     try {
//         if (search.value.length < 1) {
//             displayProducts(products)
//         }
//         let filteredProduct = products.filter(product => 
//             product.name.toLowerCase().includes(search.value))
//         displayProducts(filteredProduct)
//         if (!filteredProduct.length) throw new Error(`${search.value} was not found`)

//     } catch (e) {
//         container.textContent = e.message || 'Please try again later'
//     }
// })

// //sort

// let isToggle = false
// sorting.addEventListener('click', () => {
//     try {
//         if(!products) throw new Error('Please try again later')
//         if(!isToggle) {
//             products.sort((a, b) => b.price - a.price)
//             sorting.textContent = 'Sorted by highest amount'
//             isToggle = true
//         } else {
//             products.sort((a, b) => a.price - b.price)
//             sorting.textContent = 'Sorted by lowest amount'
//             isToggle = false
//         }
//         displayProducts(products)

//     }catch (e) {
//         container.textContent - e.message || 'We are working on this issue'
//     }
// })




let container = document.querySelector('#catalogue')
let search = document.querySelector('#search')
let sorting = document.querySelector('#sort')

let products = JSON.parse(localStorage.getItem('products')) || []

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

//display products

function displayProducts(args) {
    container.innerHTML = ""
    try {
        args.forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.name}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-description-toggle">Description <span>+</span></p>
                        <p class="card-text card-description">${product.description}</p>
                        <p class="card-text">R ${product.price}</p>
                        <button type='button' class="btn btn-outline-success addToCart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                    </div>
                </div>
            
             ` 
        })

        document.querySelectorAll('.card-description-toggle').forEach(toggle => {
            toggle.addEventListener('click', function() {
                const description = this.nextElementSibling;
                if(description.style.display === 'none' || description.style.display === '') {
                    description.style.display = 'block'
                    this.querySelector('span').textContent = '-'

                }else {
                    description.style.display = 'none'
                    this.querySelector('span').textContent = '+'
                }
            })
        })
        
        

    } catch (e) {
        container.textContent = 'Please try again later'
    }
}

displayProducts(products)


//addtocart


function addToCart(product){
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('#counter').textContent = 
        checkoutItems.length || 0

    }catch(e) {
        alert("Add to cart unsuccessful")
    }
}

//displayCheckoutItems

function displayCheckoutItems () {
    const tbody = document.querySelector('table tbody')
    const cartTotal = document.querySelector('#cartTotal')
    tbody.innerHTML = ''

    let total = 0 

    checkoutItems.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R ${item.price}</td>
                <td>1</td>
            </tr>
        `
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


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#counter').textContent = checkoutItems.length || 0
    
    if (document.querySelectorAll('.addToCart')) {
        document.querySelectorAll('.addToCart').forEach(button => {
            button.addEventListener('click', (event) => {
                let product = {
                    id: event.target.dataset.id,
                    name: event.target.dataset.name,
                    price: event.target.dataset.price,
        
                };
                addToCart(product)
            })
        })
    }

    if (document.querySelector('#clearCartBtn')) {
        document.querySelector('#clearCartBtn').addEventListener('click', clearCart)
    }

    displayProducts(products)

    displayCheckoutItems()
   

})






//search

search.addEventListener('keyup', () => {
    try {
        if (search.value.length < 1) {
            displayProducts(products)
        }

        let filteredProduct = products.filter(product => 
            product.name.toLowerCase().includes(search.value.toLowerCase()))

        displayProducts(filteredProduct)

        if (!filteredProduct.length) throw new Error(`${search.value} was not found`)

    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})

//sort
let descendingOrder = false

function toggleSortingOrder() {
    descendingOrder = !descendingOrder
}

sorting.addEventListener('click', () => {
    try {
        if(!products) throw new Error('Please try again later')

        if(!descendingOrder) {
            products.sort((a, b) => b.price - a.price)
            sorting.textContent = 'Sort by price: lowest'
        } else {
            products.sort((a, b) => a.price - b.price)
            sorting.textContent = 'Sort by price: highest'
        }

        toggleSortingOrder()
        displayProducts(products)

    }catch (e) {
        container.textContent - e.message || 'We are working on this issue'
    }
})