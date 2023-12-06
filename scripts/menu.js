
const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole', price: "9.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus2', price: "7.00" },
    // ... more items
];
const beefArray = [
    { id: 1, image: "./images/Beef/basil_beef_curry_cauli_rice.jpg", name: 'basil_beef_curry_cauli_rice', price: "8.00" },
    { id: 2, image: "./images/Beef/basil-beef-moroccan-salad.jpg", name: 'basil-beef-moroccan-salad', price: "9.00" },
    { id: 3, image: "./images/Beef/basil-beef-vege-with-hummus.jpg", name: 'basil-beef-vege-with-hummus', price: "7.00" },
    // ... more items
];
const chickenArray = [
    { id: 1, image: "./images/Chicken/black_pepper_chicken_vege_with_hummus_1.jpg", name: 'black_pepper_chicken_vege_with_hummus_1', price: "8.00" },
    { id: 2, image: "./images/Chicken/oat_chicken_peppery_pasta.jpg", name: 'oat_chicken_peppery_pasta', price: "9.00" },
    { id: 3, image: "./images/Chicken/oats_chicken_moroccan_salad.jpg", name: 'oats_chicken_moroccan_salad', price: "7.00" },
    // ... more items
];
const fishArray = [
    { id: 1, image: "./images/fish/_black_pepper_salmon-_moroccan_salad.jpg", name: '_black_pepper_salmon-_moroccan_salad', price: "8.00" },
    { id: 2, image: "./images/fish/_black_pepper_salmon-vege_with_hummus.jpg", name: '_black_pepper_salmon-vege_with_hummus', price: "9.00" },
    { id: 3, image: "./images/fish/pesto_salmon_curry_cauli_rice.jpg", name: 'pesto_salmon_curry_cauli_rice', price: "7.00" },
    // ... more items
];
const vegArray = [
    { id: 1, image: "./images/veg/_black_pepper-vege_with_hummus.jpg", name: 'black_pepper-vege_with_hummus', price: "8.00" },
    { id: 2, image: "./images/veg/black_pepper_fillet_plant_based_meatball_curry_cauli_rice.jpg", name: 'black_pepper_fillet_plant_based_meatball_curry_cauli_rice', price: "9.00" },
    { id: 3, image: "./images/veg/sweet_sour_minched_plant_based_curry_cauli_rice.jpg", name: 'sweet_sour_minched_plant_based_curry_cauli_rice', price: "7.00" },
    // ... more items
];

const itemContainer = document.getElementById('itemContainer');
const menuContainer = document.getElementById('menuCart');

const initApp = (type) => {
    const quantity = 1;
    console.log(type);
    let itemsHTML;
    if (type === "beef") {
        itemsHTML = beefArray.map((item, key) => `
        <div class="singleItem">
          <img onclick="productDetails('${item.image}', '${item.name}', '${item.price}',${key},${quantity})" src="${item.image}" alt="" />
                            <div>${item.name}</div>
                            <div>RM ${item.price}</div>
                            <div class="cartSection">
                            <div class="addSection">
                                <button onclick="updateQuantity(${key}, -1)">-</button>
                                <div id="quantity_${key}">${quantity}</div>
                                <button onclick="updateQuantity(${key}, 1)">+</button>
                            </div>
                            <button onclick="addtoCart('${item.image}', '${item.name}', '${item.price}',${key})">Add to cart</button>
                        </div>
                            </div>
        `).join('');
    } else if (type === "chicken") {

        itemsHTML = chickenArray.map((item, key) => `
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
                                <button onclick="addtoCart('${item.image}', '${item.name}', '${item.price}',${key})">Add to cart</button>
                            </div>
                                </div>
            `).join('');

    } else if (type === "fish") {
        itemsHTML = fishArray.map((item, key) => `
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
                            <button onclick="addtoCart('${item.image}', '${item.name}', '${item.price}',${key})">Add to cart</button>
                        </div>
                            </div>
        `).join('');
    } else if (type === "veg") {
        itemsHTML = vegArray.map((item, key) => `
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
                            <button onClick="addtoCart('${item.image}', '${item.name}', '${item.price}',${key})">Add to cart</button>
                        </div>
                            </div>
        `).join('');
    } else {
        itemsHTML = itemsArray.map((item, key) => `
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
                            <button onclick="addtoCart('${item.image}', '${item.name}', '${item.price}', ${key})">Add to cart</button>
                        </div>
                            </div>
        `).join('');
    }
    itemContainer.innerHTML = itemsHTML;

}
initApp()
const productDetails = (image, name, price, key, quantity) => {
    const itemsHTML = `
    <div class="productDetails">
      <img src="${image}" alt="" />
                        <div >
                            <div class="productName">${name}</div>
                            <div class="productPrice">RM ${price}</div>
                            <div class="cartSection">
                            <div class="addSection">
                            <button onclick="updateQuantity(${key}, -1)">-</button>
                            <div id="quantity_${key}">${quantity}</div>
                            <button onclick="updateQuantity(${key}, 1)">+</button>
                            </div>
                            <button onclick="addtoCart('${image}', '${name}', '${price}',${key})">Add to cart</button>
                            </div>
                        </div>
    </div>
    `
    menuContainer.innerHTML = itemsHTML;
}
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
const addtoCart = (image, name, price, key) => {
    const item = localStorage.getItem("cartItem");
    const cartItem = JSON.parse(item) || []; // Initialize as an empty array if it's null or undefined
    const isNameInArray = cartItem.some(obj => obj.name === name);
console.log(cartItem);
    if (isNameInArray) {
        // Name is already in the cart, handle accordingly (e.g., show a message)
        console.log(`${name} is already in the cart. Not adding.`);
    } else {
        const object = {
            name: name,
            image: image,
            price: price
        }
        const quantityElement = document.getElementById(`quantity_${key}`);
        const latestQuantity = quantityElement ? parseInt(quantityElement.innerText) : 0;
        object.quantity = latestQuantity;
        object.totalPrice = parseInt(price) * latestQuantity;
        cartItem.push(JSON.parse(JSON.stringify(object)));
        const listCardsJson = JSON.stringify(cartItem);
        localStorage.setItem("cartItem", listCardsJson);
        console.log(listCards);
        showAddToCartToast();
        reloadCard();
    }
}

function openCart() {
    document.getElementById('cartSidebar').style.width = '500px';
}

function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
}
function updateCartQuantity(key, change, price, totalPrice,name) {
    const quantityElement = document.getElementById(`cartQuantity_${key}`);
    const priceElement = document.getElementById("mealPrice");
    let cartPrice = 0
    let quantity;
    // console.log(key,change);
    // Ensure the quantityElement is found
    const item = localStorage.getItem("cartItem");
    const cartItem = JSON.parse(item) || []; // Initialize as an empty array if it's null or undefined
    const indexToUpdate = cartItem.findIndex(obj => obj.name === name);
    console.log(indexToUpdate);
    if (quantityElement && indexToUpdate !== -1) {
        quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 1);
        // console.log(quantity);
        totalPrice = price * quantity;
        
        quantityElement.innerText = quantity;
        console.log(cartItem[indexToUpdate]);
        cartItem[indexToUpdate].quantity = quantity;
        
        cartItem[indexToUpdate].totalPrice = totalPrice;

        // Update local storage with the modified cartItem
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        // reloadCard()
        // listCards[key].quantity = quantity;
        // listCards[key].totalPrice = totalPrice;


    }

    cartItem.map(value => cartPrice += value.totalPrice)
    // console.log(cartPrice);
    priceElement.innerText = cartPrice;
}

function removeFromCart(name) {
    console.log(name);
    const item = localStorage.getItem("cartItem");
    const cartItem = JSON.parse(item) || []; // Initialize as an empty array if it's null or undefined
    const indexToRemove = cartItem.findIndex(obj => obj.name === name);

    if (indexToRemove !== -1) {
        // Remove the object from cartItem using splice
        cartItem.splice(indexToRemove, 1);

        // Update local storage with the modified cartItem
        localStorage.setItem("cartItem", JSON.stringify(cartItem));

        // Reload the card or perform any other necessary actions
        reloadCard();
    }
}

function showAddToCartToast() {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Item is added to the cart";

    // Append the toast to the container
    document.getElementById("addtocart-toast-container").appendChild(toast);

    // Show the toast
    setTimeout(function () {
        toast.style.display = "block";
    }, 100);

    // Hide the toast after 3 seconds
    setTimeout(function () {
        toast.style.display = "none";
        // Remove the toast element from the DOM after it's hidden
        document.getElementById("addtocart-toast-container").removeChild(toast);

    }, 300);
}

function showToast() {
    window.location.href = "schedule.html"
}

const reloadCard = () => {
    const item = localStorage.getItem("cartItem");
    const cartItem = JSON.parse(item)
    console.log(cartItem);
    let count = 0;
    let totalPrice = 0;
    let cartDiv = document.getElementById('orderDetails');
    cartDiv.innerHTML = ''; // Clear previous content

    cartItem.forEach((value, key) => {
        if (value !== null) {
            totalPrice += value.totalPrice;
            count++;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            // console.log(value.quantity);
            itemDiv.innerHTML = `
                <div><img src="${value.image}" alt=""/></div>
                <div class="itemDetails">
                    <p>${value.name}</p>
                    <div class="editButton">
                        <div onclick="toggleEdit(${key})">Edit</div>
                        <div onclick="removeFromCart('${value.name}')">Remove</div>
                    </div>
                    <div class="plusminusSection">
                    <button id="minusBtn_${key}" disabled onclick="updateCartQuantity(${key}, -1,${value.price},${value.totalPrice},'${value.name}')">-</button>
                        <div id="cartQuantity_${key}">${value.quantity}</div>
                        <button id="plusBtn_${key}" disabled onclick="updateCartQuantity(${key}, 1,${value.price},${value.totalPrice},'${value.name}')">+</button>
                        
                    </div>
                </div>
                <div >RM ${value.price}</div>
            `;

            cartDiv.appendChild(itemDiv);
        }
    });

    const totalDiv = document.getElementById('mealPrice');
    totalDiv.innerHTML = ` ${totalPrice}`;
    const orderDiv = document.getElementById('orderDiv');
    orderDiv.innerHTML = `<p>My Orders(${cartItem.length})</p>`;
    localStorage.setItem("total",totalPrice);
}
reloadCard()

function toggleEdit(key) {
    var minusBtn = document.getElementById(`minusBtn_${key}`);
    var plusBtn = document.getElementById(`plusBtn_${key}`);

    // Toggle the disabled attribute
    minusBtn.disabled = !minusBtn.disabled;
    plusBtn.disabled = !plusBtn.disabled;
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('menuCart').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}


// Example: Navigation function
function navigateTo(page) {
    loadContent(page + '.html');
}