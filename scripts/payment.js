// scripts.js
const paymentRadios = document.querySelectorAll('.payment-radio');
  const paymentInfo = document.getElementById('paymentInfo');
  const paymentDetails = document.getElementById('paymentDetails');
const shippingDate=document.getElementById('shipping_date');
const shippingTime=document.getElementById('shipping_time');
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        paymentDetails.textContent = radio.getAttribute('data-info');
        paymentInfo.style.display = 'block';
      }
    });
  });
function showPaymentToast() {
  // console.log(shippingDate.value,shippingTime.value);
  // Create a new toast element
 if(shippingDate.value && shippingTime.value){
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
    window.location.href = "index.html";
  }, 3000);
 }else{
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = "Please select shipping time and Date";

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
    
  }, 3000);
 }
}

function mealData() {
  const data = localStorage.getItem("cartItem")
  const cartData = JSON.parse(data)
  let cartDiv = document.getElementById('productBox');
  let paymentDiv = document.getElementById('sub_price');
  let scheduleDiv = document.getElementById('sub_schedule');
  let totalDiv = document.getElementById('calculated_total');
  const schedule = localStorage.getItem("schedule")
  let totalPrice = 0;
  console.log(cartData);
  cartData.map((data, key) => {
    totalPrice += data.totalPrice;
    const itemDiv = document.createElement('div');
    // const priceDiv = document.createElement('div');
    // const picDiv = document.createElement('div');

    itemDiv.classList.add('products');
    itemDiv.innerHTML = `
    <div class="product_image">
    <img src="${data.image}" />
  </div>
  <div class="product_details">
    <span class="product_name">${data.name}</span>
    <span class="quantity">${data.quantity}</span>
    <span class="price">RM ${data.price}</span>
  </div>
    `;


    cartDiv.appendChild(itemDiv);
    // paymentDiv.appendChild(priceDiv)
    // mealPicDiv.appendChild(picDiv)
  })
  paymentDiv.innerHTML=`RM ${totalPrice}`
  scheduleDiv.innerHTML=`Every ${schedule} weeks`
  totalDiv.innerHTML=`RM ${totalPrice*schedule}`
  // let subTotalDiv = document.getElementById('subTotal');
  // subTotalDiv.innerHTML = `<div class="paymentPrice">
  // <div>Total Price :</div>
  // <div>RM ${totalPrice * schedule}</div>
  // </div>`
}
mealData();

function displayPayment() {
  var pay_method = document.getElementById("pay_method");
  var divc = document.getElementById("card-payment");
  var divb = document.getElementById("bank-payment")
  divc.style.display = pay_method.value == "C" ? "block" : "none";
  divb.style.display = pay_method.value == "B" ? "block" : "none";

}