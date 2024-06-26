//initialize variables

let container = document.querySelector('#catalogue')
let search = document.querySelector('#search')
let sorting = document.querySelector('#sort')

let products = JSON.parse(localStorage.getItem('products')) || []

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

//display products

function displayProducts(args) {
    container.innerHTML = ""
    try {
        if (args && args.length > 0) {
        
            let row = document.createElement('div');
            row.classList.add('row')

            args.forEach((product, index) => {
                   
                const card = `
                    <div class="col-md-4 col-sm-4 col-lg-4 mb-4">
                        <div class="card" data-category="${product.category}">
                            <img src="${product.img_url}" class="card-img-top" alt="${product.name}" loading="lazy">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-description-toggle">Description <span>+</span></p>
                                <p class="card-text card-description">${product.description}</p>
                                <p class="card-text">R ${product.price}</p>
                                <button type='button' class="btn btn-outline-success addToCart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick='addToCart(${JSON.stringify(product)})'><span class="text-light">Add to cart</span></button>
                            </div>
                        </div>
                    </div>
                
                 ` 

                 row.innerHTML += card

                 if ((index + 1) % 3 === 0 || index === args.length - 1) {
                    container.appendChild(row)
                    row = document.createElement('div')
                    row.classList.add('row')
                 }
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
        }else {
            container.innerHTML = `
                <div class="d-flex flex-column justify-content-center align-items-center mx-auto w-100 h-100 pt-5">
                    <div class="spinner-border spinner mb-3" role="status"></div>
                    <p class="text-center">No Products Found</p>
                </div>
                `;
        }
        
        

    } catch (e) {
        container.innerHTML = `
                <div class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border" role="status"></div>
                    <p>No Products Found</p>
                </div>
        `
    }
}

displayProducts(products)


//addtocart function


function addToCart(product){
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('#counter').textContent = 
        checkoutItems.length || 0
        // displayCheckoutItems()

    }catch(e) {
        alert("Add to cart unsuccessful")
    }
}

function addToCart(product) {
    try {
        const existingItem = checkoutItems.find(item => item.id === product.id);
        if (existingItem) {
            
            existingItem.quantity += 1;
        } else {
           
            product.quantity = 1;
            checkoutItems.push(product);
        }

     
        localStorage.setItem('checkout', JSON.stringify(checkoutItems));
        
        
        document.querySelector('#counter').textContent = checkoutItems.reduce((total, item) => total + item.quantity, 0);

        
        // displayCheckoutItems();
    } catch (e) {
        alert("Add to cart unsuccessful");
    }
}

// //displayCheckoutItems

// function displayCheckoutItems () {
//     const tbody = document.querySelector('table tbody')
//     const cartTotal = document.querySelector('#cartTotal')
//     tbody.innerHTML = ''

//     let total = 0 

//     checkoutItems.forEach(item => {
//         const row = document.createElement('tr')
//         row.innerHTML = `
//                 <td>${item.id}</td>
//                 <td>${item.name}</td>
//                 <td>R ${item.price}</td>
//                 <td>1</td>
//         `;
//         tbody.appendChild(row)

//         total = parseFloat(item.price)
//     })

//     cartTotal.textContent = total.toFixed(2)
// }

// //clearCart
// function clearCart() {
//     try {
//         localStorage.removeItem('checkout')
//         checkoutItems = []
//         document.querySelector('#counter').textContent = 0
//         displayCheckoutItems()
//         document.getElementById('cartItems').innerHTML = ''
//         document.getElementById('cartTotal').textContent = 0.00

//     }catch (e) {
//         alert('Clearing cart unsuccessful')
//     }

// }


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

    // displayCheckoutItems()

    // clearCart()
   

})






//search function

search.addEventListener('keyup', (event) => {
    try {
        const searchTerm = event.target.value.trim().toLowerCase();
        if (searchTerm.length < 1) {
            displayProducts(products)
        }

        let filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm))

        displayProducts(filteredProducts)

        if (filteredProducts.length === 0) {
            throw new Error(`${searchTerm} was not found`)
        }

    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})

//sort function
let descendingOrder = false

function toggleSortingOrder() {
    descendingOrder = !descendingOrder
}

sorting.addEventListener('click', () => {
    try {
        if(!products) throw new Error('Please try again later')

        if(!descendingOrder) {
            products.sort((a, b) => b.price - a.price)
            sorting.innerHTML = `<span class="text-light">Sorted by price: highest</span>`
        } else {
            products.sort((a, b) => a.price - b.price)
            sorting.innerHTML = `<span class="text-light">Sorted by price: lowest</span>`
        }

        toggleSortingOrder()
        displayProducts(products)

    }catch (e) {
        container.textContent - e.message || 'We are working on this issue'
    }
})

//filter

function applyFilters() {
    const selectedCategories = []

    const checkboxes = document.querySelectorAll('.form-check-input')

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value)
        }
    })

    const filteredProducts = products.filter(product => {
        return selectedCategories.length === 0 || selectedCategories.includes(product.category)
    })

    displayProducts(filteredProducts)
}