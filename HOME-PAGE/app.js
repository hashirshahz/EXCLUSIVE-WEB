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

// const allProduct = [
//     {
//         id: 1,
//         name: "HAVIT HV-G92 Gamepad",
//         price: 120,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 2,
//         name: "AK-900 Wired Keyboard",
//         price: 960,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 3,
//         name: "IPS LCD Gaming Monitor",
//         price: 370,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 4,
//         name: "S-Series Comfort Chair",
//         price: 375,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 5,
//         name: "The north coat",
//         price: 260,
//         category: "Clothing",
//         stock: 10
//     },

//     {
//         id: 6,
//         name: "Gucci duffle bag",
//         price: 960,
//         category: "Hang bag",
//         stock: 10
//     },

//     {
//         id: 7,
//         name: "RGB liquid CPU Cooler",
//         price: 160,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 8,
//         name: "Small BookSelf",
//         price: 360,
//         category: "Wooden",
//         stock: 10
//     },

//     {
//         id: 9,
//         name: "Breed Dry Dog Food",
//         price: 100,
//         category: "Food",
//         stock: 10
//     },

//     {
//         id: 10,
//         name: "CANON EOS DSLR Camera",
//         price: 360,
//         category: "Accessories",
//         stock: 10
//     },

//     {
//         id: 11,
//         name: "ASUS FHD Gaming Laptop",
//         price: 700,
//         category: "Accessories",
//         stock: 10
//     },

//     {
//         id: 12,
//         name: "Curology Product Set",
//         price: 500,
//         category: "Skin care",
//         stock: 10
//     },

//     {
//         id: 13,
//         name: "Kids Electric Car",
//         price: 960,
//         category: "Electronic",
//         stock: 10
//     },

//     {
//         id: 14,
//         name: "Jr. Zoom Soccer Cleats",
//         price: 1160,
//         category: "Foot wear",
//         stock: 10
//     },

//     {
//         id: 15,
//         name: "GP11 Shooter USB Gamepad",
//         price: 1160,
//         category: "Foot wear",
//         stock: 10
//     },
// ]