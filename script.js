const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //cham vao giao dien menu tren mobile de mo
    document.body.classList.toggle("show-mobile-menu");
});
//dong menu khi an close
menuCloseButton.addEventListener("click", () => menuOpenButton.click());