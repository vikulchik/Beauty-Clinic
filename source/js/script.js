(function () {

    let searchSectionButton = document.querySelector(".search-section__button--js");
    let searchForm = document.querySelector(".search");

    searchSectionButton.addEventListener("click", function () {
        searchForm.classList.add("show-form");
    });

    searchForm.addEventListener("submit", function () {
        searchForm.classList.remove("show-form");
    })
})();
