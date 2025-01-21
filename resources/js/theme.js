document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarSupportedContent");

    toggler.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        } else {
            menu.classList.add("show");
        }
    });

    const isMobile = window.matchMedia("(max-width: 768px)");
    const menuItems = document.querySelectorAll(".sidebar a");
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function () {
            if (isMobile.matches) {
                const switchLabel = document.querySelector('.switch-label');
                if (switchLabel) {
                    switchLabel.click(); // Switch'i kapat
                }
            }
        });
    });
});
