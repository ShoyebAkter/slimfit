const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Modern-Tuna-Casserole', price: "RM 8.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    // ... more items
];

const itemContainer = document.getElementById('itemContainer');
const cartDiv = document.getElementById('orderDetails');
const initApp = () => {

    const itemsHTML = itemsArray.map((item, key) => `
<div class="singleItem">
  <img src="${item.image}" alt="" />
                    <div>${item.name}</div>
                    <div>${item.price}</div>
                    <div class="cartSection">
                    <div class="addSection">
                        <button>-</button>
                        <div>0</div>
                        <button>+</button>
                    </div>
                    <button onClick="addtoCart(${key})">Add to cart</button>
                </div>
                    </div>
`).join('');

    itemContainer.innerHTML = itemsHTML;

}
initApp();
const listCards = [];
const addtoCart = (key) => {

    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(itemsArray[key]));
        listCards[key].quantity = 1
    }
    console.log(listCards[key], listCards);
    // reloadCard();
}
const reloadCard = () => {
    cartDiv.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    itemContainer.innerHTML = itemsHTML;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value + count;

        if (value !== null) {
            cartDiv.innerHTML = `
            <div><img src="${value.image}" alt=""/></div>
                <div class="itemDetails">
                    <p>${value.name}</p>
                    <div class="editButton"><div>Edit</div><div>Remove</div></div>
                    <div class="plusminusSection">
                        <button>-</button>
                        <div>0</div>
                        <button>+</button>
                    </div>
                </div>
                <div>${value.price}</div>
            `
        }
    })
}
reloadCard()