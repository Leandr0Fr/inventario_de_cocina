document.addEventListener("DOMContentLoaded", function() {
    const itemsContainer = document.getElementById("items-container");
    const itemList = itemsContainer.dataset.items.split(',');
    var itemObject = {};

    const cardsContainer = document.getElementById("cards-container");

    itemList.forEach(function(itemString) {
        const properties = itemString.split(';').map(prop => prop.trim());    
        properties.forEach(property => {
            const [key, value] = property.split(':');
            const trimmedKey = key.trim();
            const trimmedValue = value ? value.trim() : null; 

            if (trimmedKey !== "" && trimmedValue !== null && trimmedValue !== undefined) {
                itemObject[trimmedKey] = trimmedValue;
            }
        });

        if (Object.keys(itemObject).length > 0) {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class="head-card">${itemObject.name}</div>
                <div class="divider"></div>
                <section class="data-item">
                    <p class="date">Ingreso: ${itemObject.input_date}</p>
                    <p class="date">Vencimiento: ${itemObject.expiration_date}</p>
                    <p class="amount">Cantidad: ${itemObject.amount}</p>
                </section>
                <section class="controller-card">
                    <button class="button-card"><span>+</span> añadir</button>
                    <button class="button-card"><span>-</span> quitar</button>
                    <button class="button-card">
                        <i class="gg-trash"></i></button>
                </section>
                <div class="status-container">
                    <p class="status">${itemObject.status}</p>
                </div>`;

            cardsContainer.appendChild(card);
            
            itemObject = {};
        }
    });
});
