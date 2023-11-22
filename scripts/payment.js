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
      // You can send the token to your server to process the payment.
      console.log(token);
    }
  });
  