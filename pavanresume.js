
 const toggleButton = document.getElementById("toggleContact");
 const contactInfo = document.getElementById("contactInfo");
 toggleButton.addEventListener("click", () => {
 if (contactInfo.classList.contains("hidden")) {
 contactInfo.classList.remove("hidden");
 toggleButton.textContent = "Hide Contact Info";
 } else {
 contactInfo.classList.add("hidden");
 toggleButton.textContent = "Show Contact Info";
 }
 });
 