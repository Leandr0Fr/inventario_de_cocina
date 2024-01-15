document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".add-item-button");
    const exitButton = document.querySelector(".exit-button");
    const modal = document.querySelector("dialog");

    addButton.addEventListener("click", function() {
        modal.style.display = "flex";
        modal.showModal();
    });

    exitButton.addEventListener("click", function() {
        closeModal();
    });

    modal.addEventListener("click", function(event) {
        const modalRect = modal.getBoundingClientRect();
        const isInsideModal = (
            event.clientX >= modalRect.left &&
            event.clientX <= modalRect.right &&
            event.clientY >= modalRect.top &&
            event.clientY <= modalRect.bottom
        );

        if (!isInsideModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        modal.close();
    }
});