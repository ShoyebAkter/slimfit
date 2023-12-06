// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var stripe = Stripe('pk_test_51L3rUSLdVrNtSjVSK1ig1lHKSDiKNUkJFqm5jdP70THP1XTt4TkGECAlheGBukJUnyIgwiElEuz2dXvmH8bXEpXH00q7UmvRxJ');
  var elements = stripe.elements();

  var style = {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  };

  var card = elements.create('card', { style: style });
  card.mount('#card-element');

  card.addEventListener('change', function (event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });

  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    stripe.createToken(card).then(function (result) {
      if (result.error) {
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        stripeTokenHandler(result.token);
      }
    });
  });

  function stripeTokenHandler(token) {
    showToast();
    window.location.href = "menu.html"
    // You can send the token to your server to process the payment.
    console.log(token);
  }
});


function showPaymentToast() {
  // Create a new toast element
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = "Your payment is successful";

  // Append the toast to the container
  document.getElementById("payment-toast-container").appendChild(toast);

  // Show the toast
  setTimeout(function () {
    toast.style.display = "block";
  }, 500);

  // Hide the toast after 3 seconds
  setTimeout(function () {
    toast.style.display = "none";
    // Remove the toast element from the DOM after it's hidden
    document.getElementById("payment-toast-container").removeChild(toast);
    window.location.href = "menu.html";
  }, 3000);
}

function mealData() {
  const data = localStorage.getItem("cartItem")
  const cartData = JSON.parse(data)
  let cartDiv = document.getElementById('mealName');
  let paymentDiv = document.getElementById('mealPrice');
  
  let totalPrice = 0;
console.log(cartData);
  cartData.forEach((data, key) => {
    totalPrice += data.totalPrice;
    const itemDiv = document.createElement('div');
    const priceDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML=`
    <div class="details">${data.name}</div>
    `;
    priceDiv.innerHTML=`
    <div class="details">RM ${data.totalPrice}</div>
    `;
    

    cartDiv.appendChild(itemDiv);
    paymentDiv.appendChild(priceDiv)
  })
  let subTotalDiv = document.getElementById('subTotal');
  subTotalDiv.innerHTML=`<div class="paymentPrice">
  <div>Total Price :</div>
  <div>RM ${totalPrice}</div>
  </div>`
}
mealData();

function displayPayment() {
  var pay_method = document.getElementById("pay_method");
  var divc = document.getElementById("card-payment");
  var divb = document.getElementById("bank-payment")
  divc.style.display = pay_method.value == "C" ? "block" : "none";
  divb.style.display = pay_method.value == "B" ? "block" : "none";

}