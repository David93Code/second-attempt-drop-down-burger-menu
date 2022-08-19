function showBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "visible";
    document.getElementById('hamburger-menu').style.visibility = "hidden";
    document.getElementById('close-x').style.visibility = "visible";

    document.getElementById('burger-menu-container').style.background = "rgb(0, 0, 0, .5)";
    document.getElementById('burger-menu-container').style.height = "100vh";
    document.getElementById('burger-menu-container').style.position = "absolute";
    document.getElementById('burger-menu-container').style.top = 0;
    document.getElementById('burger-menu-container').style.left = 0;
    document.getElementById('burger-menu-container').style.bottom = 0;

}



function hideBurgerMenu() {
    document.getElementById('burger-menu').style.visibility = "hidden";
    document.getElementById('hamburger-menu').style.visibility = "visible";
    document.getElementById('close-x').style.visibility = "hidden";
    document.getElementById('burger-menu-container').style.background = "transparent";
    document.getElementById('burger-sub-menu-features').style.visibility = "hidden";
    document.getElementById('burger-sub-menu-company').style.visibility = "hidden";
    document.getElementById('burger-sub-menu-features').style.position = "initial";
    document.getElementById('burger-sub-menu-company').style.position = "initial";
    document.getElementById('burger-sub-menu-features').style.maxHeight = 0;
    document.getElementById('burger-sub-menu-company').style.maxHeight = 0;

    document.getElementById('features-up').style.visibility = "hidden";
    document.getElementById('features-down').style.visibility = "hidden";
    document.getElementById('company-up').style.visibility = "hidden";
    document.getElementById('company-down').style.visibility = "hidden";

}

function showSubMenu(btnID) {
    console.log(btnID);
    const subMenu = document.getElementById("burger-sub-menu-" + btnID);
    if (window.innerWidth < 600) {
        if (subMenu.style.visibility == "visible") {
            subMenu.style.visibility = "hidden";
            subMenu.style.maxHeight = "0px";

            document.getElementById(btnID + "-down").src = "./resources/images/icon-arrow-down.svg";
        } else {
            subMenu.style.visibility = "visible";
            subMenu.style.maxHeight = "fit-content";
            document.getElementById(btnID + "-down").src = "./resources/images/icon-arrow-up.svg";

        }
    }

}
