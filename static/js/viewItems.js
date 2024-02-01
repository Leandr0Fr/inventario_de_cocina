window.onload = () =>{
    const cardsContainer = document.getElementById("cards-container");
    const itemsContainer = document.getElementById("items-container");
    const itemList = itemsContainer.dataset.items.slice(0, -1).split(',');

    itemList.forEach(itemString => {
        const itemMap = new Map();
        const itemProperties = itemString.trim().split(';');
        
        itemProperties.forEach(property => {
            const [key, value] = property.split(':');
            const keyItem = key ? key.trim(): null;
            const valueItem = value ? value.trim() : null;
            
            itemMap.set(keyItem, valueItem);
        });

        const card = document.createElement("div");
        card.className = "card";
        const unit = itemMap.get('unit') === "LT" ? "Litros": "Kilogramos";

        card.innerHTML = `
        <div class="head-card">${itemMap.get('name')}</div>
        <div class="divider"></div>
        <section class="data-item">
            <p class="date">Ingreso: ${itemMap.get('input_date')}</p>
            <p class="date">Vencimiento: ${itemMap.get('expiration_date')}</p>
            <p class="amount">${unit}: ${itemMap.get('quantity')}</p>
            <p class="amount">Cantidad: ${itemMap.get('amount')}</p>
        </section>
        <section class="controller-card">
            <button class="button-card"><span>+</span> añadir</button>
            <button class="button-card"><span>-</span> quitar</button>
            <button class="button-card">
                <i class="gg-trash"></i></button>
        </section>
        <div class="status-container">
            <p class="status">${itemMap.get('status')}</p>
        </div>`;

        cardsContainer.appendChild(card);
    });    
}