const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole', price: "RM 8.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    // ... more items
];

const itemContainer = document.getElementById('itemContainer');

const initApp = () => {
    const quantity = 0;
    const itemsHTML = itemsArray.map((item, key) => `
<div class="singleItem">
  <img src="${item.image}" alt="" />
                    <div>${item.name}</div>
                    <div>${item.price}</div>
                    <div class="cartSection">
                    <div class="addSection">
                        <button onclick="updateQuantity(${key}, -1)">-</button>
                        <div id="quantity_${key}">${quantity}</div>
                        <button onclick="updateQuantity(${key}, 1)">+</button>
                    </div>
                    <button onClick="addtoCart(${key})">Add to cart</button>
                </div>
                    </div>
`).join('');

    itemContainer.innerHTML = itemsHTML;

}
initApp();
function updateQuantity(key, change) {
    const quantityElement = document.getElementById(`quantity_${key}`);
    
    // Ensure the quantityElement is found
    if (quantityElement) {
        let quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 0);

        quantityElement.innerText = quantity;
    }
}
const listCards = [];
const addtoCart = (key) => {

    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(itemsArray[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}
const reloadCard = () => {
    console.log(listCards);
    let count = 0;
    let totalPrice = 0;
    let cartDiv = document.getElementById('orderDetails');
    cartDiv.innerHTML = ''; // Clear previous content
    
    listCards.forEach((value, key) => {
        if (value !== null) {
            totalPrice += value.price;
            count++;
            let quantity=0;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');

            itemDiv.innerHTML = `
                <div><img src="${value.image}" alt=""/></div>
                <div class="itemDetails">
                    <p>${value.name}</p>
                    <div class="editButton">
                        <div>Edit</div>
                        <div>Remove</div>
                    </div>
                    <div class="plusminusSection">
                    <button onclick="updateCartQuantity(${key}, -1)">-</button>
                        <div id="cartQuantity_${key}">${quantity}</div>
                        <button onclick="updateCartQuantity(${key}, 1)">+</button>
                        
                    </div>
                </div>
                <div>${value.price}</div>
            `;

            cartDiv.appendChild(itemDiv);
        }
    });

    // Optionally, you can display the total price and count
    // const totalDiv = document.getElementById('totalDetails');
    // totalDiv.innerHTML = `Total Items: ${count}, Total Price: ${totalPrice}`;
}
function openCart() {
    document.getElementById('cartSidebar').style.width = '500px';
}

function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
}
function updateCartQuantity(key, change) {
    const quantityElement = document.getElementById(`cartQuantity_${key}`);
    console.log(key,change);
    // Ensure the quantityElement is found
    if (quantityElement) {
        let quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 0);

        quantityElement.innerText = quantity;
    }
}