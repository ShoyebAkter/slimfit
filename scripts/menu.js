const itemsArray = [
    { id: 1, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    { id: 2, image: "./images/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b 1.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    { id: 3, image: "./images/blackpeper.png", name: 'Black peper chicken vege with humus', price: "RM 8.00" },
    // ... more items
];
const itemContainer = document.getElementById('itemContainer');

const itemsHTML = itemsArray.map(item => `
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
                        <button>Add to cart</button>
                    </div>
                    </div>
`).join('');

itemContainer.innerHTML = itemsHTML;