// scripts.js
document.addEventListener('DOMContentLoaded', function() {
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
  
    var card = elements.create('card', {style: style});
    card.mount('#card-element');
  
    card.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
  
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      stripe.createToken(card).then(function(result) {
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
        window.location.href="menu.html"
      // You can send the token to your server to process the payment.
      console.log(token);
    }
  });
  

  function showToast() {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "Your payment is successful";

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
        window.location.href="payment.html";
    }, 3000);
}
