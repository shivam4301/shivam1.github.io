// Fetch and insert the header content into the header placeholder
fetch("./header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
  });
