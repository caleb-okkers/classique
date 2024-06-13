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

        ]
    ))


let adjectives = ['timeless', 'elegant', 'classic', 'old fashioned', 'desire', 'suave']
let currentIndex = 0

function changedAdjective () {
    const adjectiveElement = document.getElementById('adjective')
    adjectiveElement.textContent = `Be ${adjectives[currentIndex]}.`
    currentIndex = (currentIndex + 1) % adjectives.length
}

setInterval(changedAdjective, 1500)





