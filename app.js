const sleepingCat = document.querySelector(".sleeping");
const awakeCat = document.querySelector(".awake");
const statusTitle = document.getElementById("status-title");

sleepingCat.addEventListener("click", () => {
    awakeCat.classList.add("active");
    sleepingCat.classList.remove("active");
    statusTitle.textContent = "zoomies!";
});

awakeCat.addEventListener("click", () => {
    sleepingCat.classList.add("active");
    awakeCat.classList.remove("active");
    statusTitle.textContent = "Sleeping...";
});