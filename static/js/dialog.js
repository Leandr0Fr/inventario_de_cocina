const addButton = document.querySelector(".add-item-button");
const exitButton = document.querySelector(".exit-button");
const modal = document.querySelector("dialog");

addButton.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.showModal();
    });

exitButton.addEventListener("click", () => {
    closeModal();
    });

modal.addEventListener("click", (e) => {
    const modalRect = modal.getBoundingClientRect();
    const isInsideModal = (
        e.clientX >= modalRect.left &&
        e.clientX <= modalRect.right &&
        e.clientY >= modalRect.top &&
        e.clientY <= modalRect.bottom);

    if (!isInsideModal) closeModal();    
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") closeModal();
});

const closeModal = () => {
    modal.style.display = "none";
    modal.close();
}