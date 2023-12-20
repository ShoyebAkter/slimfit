const mealItemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus(3 times a week)', price: "20.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole(2 times a week)', price: "15.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus(3 times a week)', price: "18.00" },
    // ... more items
];

const itemContainer = document.getElementById('mealSection');
function showAddtoCartToast() {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Item is added to the cart";

    // Append the toast to the container
    document.getElementById("addtocart-toast").appendChild(toast);

    // Show the toast
    setTimeout(function () {
        toast.style.display = "block";
    }, 100);

    // Hide the toast after 3 seconds
    setTimeout(function () {
        toast.style.display = "none";
        // Remove the toast element from the DOM after it's hidden
        document.getElementById("addtocart-toast").removeChild(toast);
    }, 300);
}
const initApp = () => {
    const quantity = 1;
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
        quantity = Math.max(quantity, 1);

        quantityElement.innerText = quantity;
    }
}
const listCards = [];
const mealAddtoCart = (key) => {

    const quantityElement = document.getElementById(`mealquantity_${key}`);
    const latestQuantity = quantityElement ? parseInt(quantityElement.innerText) : 0;
    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(mealItemsArray[key]));
        listCards[key].quantity = latestQuantity;
        listCards[key].totalPrice = parseInt(listCards[key].price)*latestQuantity;
    }
    // showAddtoCartToast();
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
            let quantity=0;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            console.log(totalPrice);
            itemDiv.innerHTML = `
                <div><img src="${value.image}" alt=""/></div>
                <div class="itemDetails">
                    <p>${value.name}</p>
                    <div class="editButton">
                        <div onclick="toggleEdit(${key})">Edit</div>
                        <div onclick="removeFromCart(${key})">Remove</div>
                    </div>
                    <div class="plusminusSection">
                    <button  id="minusBtn_${key}" disabled onclick="updateCartQuantity(${key}, -1,${value.price},${value.totalPrice})">-</button>
                        <div id="cartQuantity_${key}">${value.quantity}</div>
                        <button id="plusBtn_${key}" disabled onclick="updateCartQuantity(${key}, 1,${value.price},${value.totalPrice})">+</button>
                        
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
    const orderDiv = document.getElementById('orderDiv');
    orderDiv.innerHTML = `<p>My Orders(${listCards.length})</p>`;
}
function toggleEdit(key) {
    var minusBtn = document.getElementById(`minusBtn_${key}`);
    var plusBtn = document.getElementById(`plusBtn_${key}`);

    // Toggle the disabled attribute
    minusBtn.disabled = !minusBtn.disabled;
    plusBtn.disabled = !plusBtn.disabled;
}
function showToast(){
    window.location.href="payment.html"
}
function openCart() {
    document.getElementById('cartSidebar').style.width = '500px';
}

function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
}
function updateCartQuantity(key, change, price,totalPrice) {
    const quantityElement = document.getElementById(`cartQuantity_${key}`);
    const priceElement = document.getElementById("mealPrice");
    let cartPrice=0
    let quantity;
    // Ensure the quantityElement is found
    if (quantityElement) {
        quantity = parseInt(quantityElement.innerText) + change;

        quantity = Math.max(quantity, 1);
        totalPrice=price*quantity;
        quantityElement.innerText = quantity;
        listCards[key].quantity=quantity;
        listCards[key].totalPrice=totalPrice;
    }
    listCards.map(value=>cartPrice+=value.totalPrice)
    // console.log(cartPrice);
    priceElement.innerText=cartPrice;
}

function removeFromCart(key) {
    if (listCards[key] !== undefined) {
        delete listCards[key];
        reloadCard();
    }
}

