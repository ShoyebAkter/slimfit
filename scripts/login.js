function showErrorToast(error) {
    // Create a new toast element
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = error;
  
    // Append the toast to the container
    document.getElementById("error-toast-container").appendChild(toast);
  
    // Show the toast
    setTimeout(function () {
      toast.style.display = "block";
    }, 1000);
  
    // Hide the toast after 3 seconds
    setTimeout(function () {
      toast.style.display = "none";
      // Remove the toast element from the DOM after it's hidden
      document.getElementById("payment-toast-container").removeChild(toast);
      window.location.href = "index.html";
    }, 4000);
  }