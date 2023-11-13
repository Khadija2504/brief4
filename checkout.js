document.addEventListener("DOMContentLoaded", () => {
    const listCartElement = document.querySelector(".listCart");
    const totalQuantityElement = document.querySelector(".totalQuantity");
    const totalPriceElement = document.querySelector(".totalPrice");

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCheckoutDisplay() {
        listCartElement.innerHTML = "";
        let totalQuantity = 0;
        let totalPrice = 0;

        for (const item of cart) {
            const product = products.find((p) => p.id === item.product_id);
            if (product) {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <h3>${product.name}</h3>
                            <p>Price: $${product.price}</p>
                            <p>Quantity: ${item.quantity}</p>
                        </div>
                    </div>
                `;
                listCartElement.appendChild(cartItem);

                // Update total quantity and total price
                totalQuantity += item.quantity;
                totalPrice += product.price * item.quantity;
            }
        }

        // Update total quantity and total price in the UI
        totalQuantityElement.textContent = totalQuantity;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    updateCheckoutDisplay();
});