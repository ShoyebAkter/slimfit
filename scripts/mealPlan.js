const mealItemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus(3 times a week)', price: "20.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole(2 times a week)', price: "15.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus(3 times a week)', price: "18.00" },
    // ... more items
];

const itemContainer = document.getElementById('mealSection');

const initApp = () => {
    const quantity = 0;
    const itemsHTML = mealItemsArray.map((item, key) => `
    <div class="singleItem">
    <img src="${item.image}" alt="" />
    <div>${item.name}</div>
    <div>RM ${item.price}</div>
    <div class="cartSection">
        <div class="addSection">
        <button onclick="updateMealQuantity(${key}, -1)">-</button>
        <div id="mealquantity_${key}">${quantity}</div>
        <button onclick="updateMealQuantity(${key}, 1)">+</button>
        </div>
        <button onClick="mealAddtoCart(${key})">Add to cart</button>
    </div>
</div>
`).join('');

    itemContainer.innerHTML = itemsHTML;

}
initApp();
function updateMealQuantity(key, change) {
    const quantityElement = document.getElementById(`mealquantity_${key}`);
    
    // Ensure the quantityElement is found
    if (quantityElement) {
        let quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 0);

        quantityElement.innerText = quantity;
    }
}
const listCards = [];
const mealAddtoCart = (key) => {

    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(mealItemsArray[key]));
        listCards[key].quantity = 1;
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
            totalPrice += parseInt(value.price);
            count++;
            let quantity=0;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            console.log(totalPrice);
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
                <div>RM ${value.price}</div>
            `;

            cartDiv.appendChild(itemDiv);
        }
    });

    // Optionally, you can display the total price and count
    const totalDiv = document.getElementById('mealPrice');
    totalDiv.innerHTML = ` ${totalPrice}`;
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