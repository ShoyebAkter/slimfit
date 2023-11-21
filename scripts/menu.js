const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole', price: "9.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "7.00" },
    // ... more items
];

const itemContainer = document.getElementById('itemContainer');

const initApp = () => {
    const quantity = 1;
    const itemsHTML = itemsArray.map((item, key) => `
<div class="singleItem">
  <img src="${item.image}" alt="" />
                    <div>${item.name}</div>
                    <div>RM ${item.price}</div>
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
        quantity = Math.max(quantity, 1);

        quantityElement.innerText = quantity;
        // console.log(quantity);
    }

}
const listCards = [];
const addtoCart = (key) => {
    const quantityElement = document.getElementById(`quantity_${key}`);
    const latestQuantity = quantityElement ? parseInt(quantityElement.innerText) : 0;
    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(itemsArray[key]));
        listCards[key].quantity = latestQuantity;
    }
    showToast();
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
            totalPrice += parseInt(value.price)*value.quantity;
            count++;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            console.log(value.quantity);
            itemDiv.innerHTML = `
                <div><img src="${value.image}" alt=""/></div>
                <div class="itemDetails">
                    <p>${value.name}</p>
                    <div class="editButton">
                        <div>Edit</div>
                        <div onclick="removeFromCart(${key})">Remove</div>
                    </div>
                    <div class="plusminusSection">
                    <button disabled onclick="updateCartQuantity(${key}, -1,${value.price})">-</button>
                        <div id="cartQuantity_${key}">${value.quantity}</div>
                        <button disabled onclick="updateCartQuantity(${key}, 1,${value.price})">+</button>
                        
                    </div>
                </div>
                <div>RM ${value.price}</div>
            `;

            cartDiv.appendChild(itemDiv);
        }
    });

    const totalDiv = document.getElementById('mealPrice');
    totalDiv.innerHTML = ` ${totalPrice}`;
    const orderDiv = document.getElementById('orderDiv');
    orderDiv.innerHTML = `<p>My Orders(${listCards.length})</p>`;
}
function openCart() {
    document.getElementById('cartSidebar').style.width = '500px';
}

function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
}
function updateCartQuantity(key, change, price) {
    const quantityElement = document.getElementById(`cartQuantity_${key}`);
    let totalPrice=0;
    // console.log(key,change);
    // Ensure the quantityElement is found
    if (quantityElement) {
        let quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 0);

        quantityElement.innerText = quantity;
        
    }

}

function removeFromCart(key) {
    if (listCards[key] !== undefined) {
        delete listCards[key];
        reloadCard();
    }
}
function showToast() {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Item is added to the cart";

    // Append the toast to the container
    document.getElementById("toast-container").appendChild(toast);

    // Show the toast
    setTimeout(function () {
        toast.style.display = "block";
    }, 100);

    // Hide the toast after 3 seconds
    setTimeout(function () {
        toast.style.display = "none";
        // Remove the toast element from the DOM after it's hidden
        document.getElementById("toast-container").removeChild(toast);
    }, 3000);
}
