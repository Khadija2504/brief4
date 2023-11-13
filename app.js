let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let listFavorHTML = document.querySelector('.listFavor');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let iconFavor = document.querySelector('.icon-favor');
let iconFavorSpan = document.querySelector('.icon-favor span');
let body = document.querySelector('body');
let closeFavor = document.querySelector('.closeFavor');
let closeCart = document.querySelector('.close');
const checkoutButton = document.getElementById("checkoutButton");
const itemsPerPage = 9;
let currentPage = 1;
let products = [
    {
        "id": 1,
        "name": "Personalisation de Pc Gamer",
        "price": 200,
        "image": "image/1.png",
        dataCategorie: "pcportable"
    },
    {
        "id": 2,
        "name": "Personalisation d'accessoires",
        "price": 250,
        "image": "image/rectangle 31.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 3,
        "name": "Personalisation de Pc Gamer",
        "price": 290,
        "image": "image/3.png",
        dataCategorie: "pcGamer"
    },
    {
        "id": 4,
        "name": "Personalisation d'accessoire",
        "price": 200,
        "image": "image/4.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 5,
        "name": "Personalisation d'accessoire",
        "price": 300,
        "image": "image/5.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 6,
        "name": "Écrans et Moniteurs PC",
        "price": 200,
        "image": "image/6.png",
        dataCategorie: "chaisesEtBureauGaming"
    },
    {
        "id": 7,
        "name": "Personalisation d'accessoires",
        "price": 280,
        "image": "image/7.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 8,
        "name": "Écrans et Moniteurs PC",
        "price": 300,
        "image": "image/8.png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 9,
        "name": "Écrans et Moniteurs PC",
        "price": 100,
        "image": "image/9.png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 2,
        "name": "Personalisation d'accessoires",
        "price": 250,
        "image": "image/rectangle 31.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 3,
        "name": "Personalisation de Pc Gamer",
        "price": 290,
        "image": "image/3.png",
        dataCategorie: "pcGamer"
    },
    {
        "id": 4,
        "name": "Personalisation d'accessoire",
        "price": 200,
        "image": "image/4.png",
        dataCategorie: "accessoires",
        dataCategorie: "pcGamer"
    },
    {
        "id": 5,
        "name": "Personalisation d'accessoire",
        "price": 300,
        "image": "image/5.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 6,
        "name": "Écrans et Moniteurs PC",
        "price": 200,
        "image": "image/6.png",
        dataCategorie: "chaisesEtBureauGaming"
    },
    {
        "id": 7,
        "name": "Personalisation d'accessoires",
        "price": 280,
        "image": "image/7.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 8,
        "name": "Écrans et Moniteurs PC",
        "price": 300,
        "image": "image/8.png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 11,
        "name": "Écrans et Moniteurs PC",
        "price": 100,
        "image": "image/rectangle 31 (1).png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 1,
        "name": "Personalisation de Pc Gamer",
        "price": 200,
        "image": "image/1.png",
        dataCategorie: "pcportable"
    },
    {
        "id": 10,
        "name": "Chaises & Bureau Gaming",
        "price": 250,
        "image": "image/2.png",
        dataCategorie: "chaisesEtBureauGaming"
    },
    {
        "id": 3,
        "name": "Personalisation de Pc Gamer",
        "price": 290,
        "image": "image/3.png",
        dataCategorie: "pcGamer"
    },
    {
        "id": 4,
        "name": "Personalisation d'accessoire",
        "price": 200,
        "image": "image/4.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 5,
        "name": "Personalisation d'accessoire",
        "price": 300,
        "image": "image/5.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 6,
        "name": "Chaises & Bureau Gaming",
        "price": 200,
        "image": "image/6.png",
        dataCategorie: "chaisesEtBureauGaming"
    },
    {
        "id": 7,
        "name": "Personalisation d'accessoires",
        "price": 280,
        "image": "image/7.png",
        dataCategorie: "accessoires"
    },
    {
        "id": 8,
        "name": "Écrans et Moniteurs PC",
        "price": 300,
        "image": "image/8.png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 9,
        "name": "Écrans et Moniteurs PC",
        "price": 100,
        "image": "image/9.png",
        dataCategorie: "ecrantEtMoniteursPc"
    },
    {
        "id": 2,
        "name": "Personalisation d'accessoires",
        "price": 250,
        "image": "image/rectangle 31.png",
        dataCategorie: "accessoires"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav");

    menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle2");
    const navList = document.querySelector(".list-before");

    menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle3");
    const navList = document.querySelector(".list-after");

    menuToggle.addEventListener("click", function () {
            navList.classList.toggle("active");
    });
});

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

let favorites = [];
iconFavor.addEventListener('click', () => {
    body.classList.toggle('showFavorites');
})
closeFavor.addEventListener('click', () => {
    body.classList.toggle('showFavorites');
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    
    for (let i = startIdx; i < endIdx && i < products.length; i++) {
        const product = products[i];
        let newProduct = document.createElement('div');
        newProduct.dataset.id = product.id;
        newProduct.classList.add('item');
        newProduct.classList.add('tems');
        newProduct.innerHTML =
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart">Add To Cart</button>
            <button class="addToFavor">Add To Favorites</button>`;
        listProductHTML.appendChild(newProduct);
    }
};

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
    else if (positionClick.classList.contains('addToFavor')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToFavorites(id_product);
    }

})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if (cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    } else if (positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;

            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                } else {
                    cart.splice(positionItemInCart, 1);
                }
            break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    addDataToHTML();

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
    }
}

initApp();

const addToFavorites = (product_id) => {
    const isAlreadyFavorited = favorites.some(item => item.product_id === product_id);

    if (isAlreadyFavorited) {
        favorites = favorites.filter(item => item.product_id !== product_id);
    } else {
        favorites.push({ product_id });
    }

    addFavoritesToHTML();
    addFavoritesToMemory();
}

const addFavoritesToMemory = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}


const addFavoritesToHTML = () => {
    listFavorHTML.innerHTML = '';
    let totalFavorites = favorites.length;
    iconFavorSpan.innerText = totalFavorites;

    if (favorites.length > 0) {
        favorites.forEach(item => {
            let newFavorItem = document.createElement('div');
            newFavorItem.classList.add('item');
            newFavorItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex(value => value.id == item.product_id);
            let info = products[positionProduct];

            listFavorHTML.appendChild(newFavorItem);
            newFavorItem.innerHTML = `
                <img src="${info.image}" alt="">
                <h2>${info.name}</h2>
                <div class="price">$${info.price}</div>
            `;
        });
    }
}
const initFavor = () =>{
    addDataToHTML();
    if (localStorage.getItem('favorites')) {
        favorites = JSON.parse(localStorage.getItem('favorites'));
        addFavoritesToHTML();
    }
}

initFavor();

function createPaginationButtons() {
    const filteredProducts = products.filter(product => {
        return document.querySelector(`.listProduct .item[data-id="${product.id}"]`);
    });

    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => {
            currentPage = i;
            addDataToHTML();
            createPaginationButtons();
        });

        if (i === currentPage) {
            button.classList.add("active-page");
        }

        pagination.appendChild(button);
    }
}



createPaginationButtons();

const categorieBtns = document.querySelectorAll('.categorieBtn');

categorieBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const categorie = btn.getAttribute('data-categorie');
        trierProductsParCategorie(categorie);
    });
});

function trierProductsParCategorie(categorie) {
    listProductHTML.innerHTML = '';
    currentPage = 1;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (categorie === 'all' || product.dataCategorie === categorie) {
            const newProduct = createProductElement(product);
            listProductHTML.appendChild(newProduct);
        }
    }

    createPaginationButtons();
}
function createProductElement(product) {
    const newProduct = document.createElement('div');
    newProduct.dataset.id = product.id;
    newProduct.classList.add('item');
    newProduct.classList.add('tems');
    newProduct.innerHTML = `
        <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <button class="addCart">Add To Cart</button>
        <button class="addToFavor">Add To Favorites</button>`;
    return newProduct;
}
if (!categorieBtns) {
    categorieBtns = 'initialColor';
}

checkoutButton.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
});

