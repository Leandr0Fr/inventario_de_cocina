document.addEventListener("DOMContentLoaded", function() {
    var itemsContainer = document.getElementById("items-container");
    var itemList = itemsContainer.dataset.items.split(',');

    console.log(itemList);
});
