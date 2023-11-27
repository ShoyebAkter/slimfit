
const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole', price: "9.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "7.00" },
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
    { id: 1, image: "./images/veg/pesto_salmon_curry_cauli_rice.jpg", name: 'pesto_salmon_curry_cauli_rice', price: "8.00" },
    { id: 2, image: "./images/veg/pesto_salmon_curry_cauli_rice.jpg", name: 'pesto_salmon_curry_cauli_rice', price: "9.00" },
    { id: 3, image: "./images/veg/sweet_sour_minched_plant_based_curry_cauli_rice.jpg", name: 'sweet_sour_minched_plant_based_curry_cauli_rice', price: "7.00" },
    // ... more items
];

const itemContainer = document.getElementById('itemContainer');

const initApp = (type) => {
    const quantity = 1;
    console.log(type);
    let itemsHTML;
    if(type==="beef"){
        itemsHTML = beefArray.map((item, key) => `
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
    }else if(type==="chicken"){
        
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
        
    }else if(type==="fish"){
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
    }else if(type==="veg"){
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
    }else{
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
const addtoCart = (image,name,price,key,type) => {
    const object={
        name:name,
        image:image,
        price:price
    }
    const quantityElement = document.getElementById(`quantity_${key}`);
    const latestQuantity = quantityElement ? parseInt(quantityElement.innerText) : 0;
    object.quantity=latestQuantity;
    object.totalPrice= parseInt(price) * latestQuantity;
    console.log(object);
    listCards.push(JSON.parse(JSON.stringify(object)));
    // if (listCards[key] === undefined) {
    //     if(type==="beef"){listCards[key] = JSON.parse(JSON.stringify(beefArray[key]));}
    //     else if(type==="chicken"){listCards[key] = JSON.parse(JSON.stringify(chickenArray[key]));}
    //     else if(type==="fish"){listCards[key] = JSON.parse(JSON.stringify(fishArray[key]));}
    //     else if(type==="veg"){listCards[key] = JSON.parse(JSON.stringify(vegArray[key]));}
    //     else{listCards[key] = JSON.parse(JSON.stringify(itemsArray[key]));}
        
    //     listCards[key].quantity = latestQuantity;
    //     listCards[key].totalPrice = parseInt(listCards[key].price) * latestQuantity;

    //     console.log(listCards[key]);
    // }
    console.log(listCards);
    showAddToCartToast();
    reloadCard();
}

function openCart() {
    document.getElementById('cartSidebar').style.width = '500px';
}

function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
}
function updateCartQuantity(key, change, price, totalPrice) {
    const quantityElement = document.getElementById(`cartQuantity_${key}`);
    const priceElement = document.getElementById("mealPrice");
    let cartPrice = 0
    let quantity;
    // console.log(key,change);
    // Ensure the quantityElement is found
    if (quantityElement) {
        quantity = parseInt(quantityElement.innerText) + change;

        // Ensure quantity is not negative
        quantity = Math.max(quantity, 1);
        totalPrice = price * quantity;
        quantityElement.innerText = quantity;
        listCards[key].quantity = quantity;
        listCards[key].totalPrice = totalPrice;


    }
    listCards.map(value => cartPrice += value.totalPrice)
    // console.log(cartPrice);
    priceElement.innerText = cartPrice;
}

function removeFromCart(key) {
    if (listCards[key] !== undefined) {
        delete listCards[key];
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
    window.location.href = "payment.html"
}

const reloadCard = () => {
    console.log(listCards);
    let count = 0;
    let totalPrice = 0;
    let cartDiv = document.getElementById('orderDetails');
    cartDiv.innerHTML = ''; // Clear previous content

    listCards.forEach((value, key) => {
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
                        <div onclick="removeFromCart(${key})">Remove</div>
                    </div>
                    <div class="plusminusSection">
                    <button id="minusBtn_${key}" disabled onclick="updateCartQuantity(${key}, -1,${value.price},${value.totalPrice})">-</button>
                        <div id="cartQuantity_${key}">${value.quantity}</div>
                        <button id="plusBtn_${key}" disabled onclick="updateCartQuantity(${key}, 1,${value.price},${value.totalPrice})">+</button>
                        
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
    orderDiv.innerHTML = `<p>My Orders(${listCards.length})</p>`;
}

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