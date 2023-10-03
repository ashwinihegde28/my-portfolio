// Function to open a specific tab
function openTab(tabName) {
  // Hide all tab contents
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Show the clicked tab content
  document.getElementById(tabName).style.display = "block";
}

// Get all tab buttons
var tabButtons = document.querySelectorAll(".tablink");

// Add click event listeners for tab buttons
tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var tabName = button.getAttribute("data-tab");
    openTab(tabName);
  });
});

// Open the "About Me" tab by default
openTab("AboutMe");
