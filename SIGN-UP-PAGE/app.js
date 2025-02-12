function toggleMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const menuList = document.getElementById("menuList");
    menuList.style.display = "none";
    menuBtn.addEventListener("click", () => {
        if (menuList.style.display === "none") {
            menuList.style.display = "block";
        } else {
            menuList.style.display = "none";
        }
    })
}

toggleMenu();

function toggleAccountIcon(iconId) {
    const accountIcon = document.getElementById(iconId);
    if (!accountIcon) return; 

    accountIcon.style.cursor = "pointer";

    const account_InnerBox = document.getElementById("account-inner-box");
    if (!account_InnerBox) return;

    account_InnerBox.style.display = "none";

    accountIcon.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            account_InnerBox.style.position = "absolute";
            account_InnerBox.style.top = "50px";
            account_InnerBox.style.right = "10px";
        } else {
            account_InnerBox.style.position = "absolute";
            account_InnerBox.style.top = "5px";
            account_InnerBox.style.right = "10px";
        }

        account_InnerBox.style.display =
            account_InnerBox.style.display === "none" ? "block" : "none";
    });
}

toggleAccountIcon("account-icon"); 
toggleAccountIcon("mobile-account-icon");