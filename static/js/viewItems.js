window.onload = () =>{
    const cardsContainer = document.getElementById("cards-container");
    const itemsContainer = document.getElementById("items-container");
    const itemList = itemsContainer.dataset.items.slice(0, -1).split(',');

    let item = {};

    itemList.forEach(item => {
        let itemPar = item.trim().split(';');
        itemPar.forEach(par => {
            const [key, value] = par.split(':');
            const keyItem = key ? key.trim(): null;
            const valueItem = value ? value.trim() : null;
            
            item[keyItem] = valueItem; 
        });

        const card = document.createElement("div");
        card.className = "card";
        unit = item.unit === "LT" ? "Litros": "Kilogramos";

        card.innerHTML = `
        <div class="head-card">${itemObject.name}</div>
        <div class="divider"></div>
        <section class="data-item">
            <p class="date">Ingreso: ${itemObject.input_date}</p>
            <p class="date">Vencimiento: ${itemObject.expiration_date}</p>
            <p class="amount">${unit}: ${itemObject.quantity}</p>
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
    });    
}
