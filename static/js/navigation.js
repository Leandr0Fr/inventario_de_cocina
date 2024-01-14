document.addEventListener("DOMContentLoaded", function() {
    const actualPage = document.querySelector(".actual-page");
    const totalPages = document.querySelector(".total-pages");
    const previousPage = document.getElementById("previous");
    const advancePage = document.getElementById("advance");

    if (actualPage.textContent.trim() === "1"){
        previousPage.style.visibility = "hidden";
    }
    if (actualPage.textContent.trim() === totalPages.textContent.trim()){
        advancePage.style.visibility = "hidden";
    }
});