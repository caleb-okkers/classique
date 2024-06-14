let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                id: 1,
                name: 'Black Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Black',
                description: 'This black slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 37% polyester and 3% elastane. This single-breasted blazer features top notch lapels, a two-button closure, a fully lined interior and double vents. Ideal for formal occasions, this suit requires dry cleaning.',
                price: 8499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product8.webp"
            },
            {
                id: 2,
                name: 'Brown Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Brown',
                description: 'This brown slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 37% polyester and 3% elastane. This single-breasted blazer features top notch lapels, a two-button closure, a fully lined interior and double vents. Ideal for formal occasions, this suit requires dry cleaning.',
                price: 8999.99,
                img_url:  "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product10.webp"
                
            },
            {
                id: 3,
                name: 'White Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'White',
                description: 'This white slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 37% polyester and 3% elastane. This single-breasted blazer features top notch lapels, a two-button closure, a fully lined interior and double vents. Ideal for formal occasions, this suit requires dry cleaning.',
                price: 8999.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product5.webp"
            },
            {
                id: 4,
                name: 'Green Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Green',
                description: 'This green slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 37% polyester and 3% elastane. This single-breasted blazer features top notch lapels, a two-button closure, a fully lined interior and double vents. Ideal for formal occasions, this suit requires dry cleaning.',
                price: 8999.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product%20green.webp"
            },
            {
                id: 5,
                name: 'Grey Striped Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Grey',
                description: 'This striped grey slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 30% polyester, 7% viscose and 3% elastane. This single-breasted blazer features peak lapels, a two-button closure, a fully lined interior and double vents. Perfect for formal occasions, this suit requires dry cleaning.',
                price: 9499.99,
                img_url: "https://github.com/caleb-okkers/classiqueOG/blob/main/images/product4.jpg?raw=true"
            },
            {
                id: 6,
                name: 'Navy Striped Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Navy',
                description: 'This striped navy slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a comfortable blend of 60% wool, 30% polyester, 7% viscose and 3% elastane. This single-breasted blazer features peak lapels, a two-button closure, a fully lined interior and double vents. Perfect for formal occasions, this suit requires dry cleaning.',
                price: 9499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product3.webp"
            },
            {
                id: 7,
                name: 'Black Double-Breasted Suit 2-Piece',
                category: 'suits',
                color: 'Black',
                description: 'This black slim-fit two-piece suit includes a blazer, waistcoat and trousers, made from a blend of 73% polyester, 23% viscose and 4% elastane. The double-breasted blazer features peak lapels, six buttons, functioning buttoned cuffs, a fully lined interior and double vents. Perfect for formal occasions, this suit requires dry cleaning.',
                price: 9999.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product9.webp"
            },
            {
                id: 8,
                name: 'Brown Plaid Slim-Fit Suit 3-Piece',
                category: 'suits',
                color: 'Brown',
                description: 'This brown plaid slim-fit three-piece suit includes a blazer, waistcoat and trousers, made from a blend of 73% polyester, 23% viscose and 4% elastane. This single-breasted blazer features peak lapels, a two-button closure, a fully lined interior and double vents. Perfect for formal occasions, this suit requires dry cleaning.',
                price: 9999.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classiqueOG/main/images/product2.webp"
            },
            {
                id: 9,
                name: 'Bordeaux Double-Breasted Suit 2-Piece',
                category: 'suits',
                color: 'Bordeaux',
                description: 'This bordeaux slim-fit two-piece suit includes a blazer, waistcoat and trousers, made from a blend of 73% polyester, 23% viscose and 4% elastane. The double-breasted blazer features peak lapels, six buttons, functioning buttoned cuffs, a fully lined interior and double vents. Perfect for formal occasions, this suit requires dry cleaning.',
                price: 9999.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/product11.webp"
                         
            },
            {
                id: 10,
                name: 'White Slim-Fit Shirt',
                category: 'essentials',
                color: 'White',
                description: 'This slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a classic white color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/white%20shirt.webp"
            },
            {
                id: 11,
                name: 'Navy Slim-Fit Shirt',
                category: 'essentials',
                color: 'Navy',
                description: 'This slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a classic navy color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/navy%20shirt.webp"
            },
            {
                id: 12,
                name: 'Black Slim-Fit Shirt',
                category: 'essentials',
                color: 'Black',
                description: 'This slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a classic black color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/black%20shirt.webp"
            },
            {
                id: 13,
                name: 'Camel Slim-Fit Shirt',
                category: 'essentials',
                color: 'Camel',
                description: 'This slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a warm camel color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/camel%20shirt.webp"
            },
            {
                id: 14,
                name: 'Sky-Blue Slim-Fit Shirt',
                category: 'essentials',
                color: 'Sky-Blue',
                description: 'This slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a soft sky-blue color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/sky-blue%20shirt.webp"
            },
            {
                id: 15,
                name: 'White Tuxedo Slim-Fit Shirt',
                category: 'essentials',
                color: 'White',
                description: 'This tuxedo slim-fit shirt, crafted from a blend of 80% cotton and 20% polyester, comes in a classic white color. For optimal care, it requires dry cleaning only.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/white%20shirt%20tux.webp"
            },
            {
                id: 16,
                name: 'Black Tie 9cm',
                category: 'accessories',
                color: 'Black',
                description: 'This Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/black%20tie.webp"
            },
            {
                id: 17,
                name: 'Brown Tie 9cm',
                category: 'accessories',
                color: 'Brown',
                description: 'This Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/brown%20tie.webp"
            },
            {
                id: 18,
                name: 'Green Tie 9cm',
                category: 'accessories',
                color: 'Green',
                description: 'This Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/green%20tie.webp"
            },
            {
                id: 19,
                name: 'Navy Striped Tie 9cm',
                category: 'accessories',
                color: 'Navy Striped',
                description: 'This striped Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/navy%20striped%20tie.webp"
            },
            {
                id: 20,
                name: 'Bordeaux Polka-Dot Tie 9cm',
                category: 'accessories',
                color: 'Bordeaux',
                description: 'This polka-dot Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/bordeaux%20polka%20dot%20tie.webp"
            },
            {
                id: 21,
                name: 'Navy & Salmon Tie 9cm',
                category: 'accessories',
                color: 'Navy & Salmon',
                description: 'This striped Jacquard tie, crafted entirely from 100% polyester, features a sleek 5.5 cm (2.1 in) width, combining durability with a sophisticated texture for formal elegance.',
                price: 1499.99,
                img_url: "https://raw.githubusercontent.com/caleb-okkers/classique/main/images/navy%20and%20salmon%20striped%20tie.webp"
            },



        ]
    ))


let adjectives = ['timeless', 'elegant', 'classic', 'old fashioned', 'desire', 'suave', 'like Caleb']
let currentIndex = 0

function changedAdjective () {
    const adjectiveElement = document.getElementById('adjective')
    adjectiveElement.textContent = `Be ${adjectives[currentIndex]}.`
    currentIndex = (currentIndex + 1) % adjectives.length
}

setInterval(changedAdjective, 1500)




// document.querySelectorAll('.btn-outline-success').forEach(button => {
//     button.addEventListener('mouseover', function (e) {
//         const rect = this.getBoundingClientRect();
//         const ripple = this.querySelector('::before');

//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         ripple.style.left = `${x}px`;
//         ripple.style.top = `${y}px`;
//     });
// });
