let container = document.querySelector('#catalogue')
let search = document.querySelector('#search')
let sort = document.querySelector('#sort')

let products = JSON.parse(localStorage.getItem('products')) || []

let checkoutItems = JSON.parse(localStorage.getItem('checkout')) ? JSON.parse(localStorage.getItem('checkout')) : []

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
                        <button type='button' class="btn btn-outline-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
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

