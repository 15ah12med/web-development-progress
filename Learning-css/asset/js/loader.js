// Function to show the loader
function showLoader() {
    document.querySelector('.loader').style.display = 'block';
  }
  
  // Function to hide the loader
  function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
  }
// Show the loader (optional)
showLoader();

// Simulate fetching data (replace with your actual data retrieval logic)
setTimeout(function() {
  // Hide the loader when the data is ready
  hideLoader();

  // Your data handling logic here
}, 3000); // Simulate a 3-second delay
  