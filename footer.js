// Fetch and insert the footer content into the footer placeholder
fetch("./footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
