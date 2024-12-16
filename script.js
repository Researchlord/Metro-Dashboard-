//sidebar toggle

let sideBarOpen = false;
let sidebar  = document.getElementById("side-bar");

function openSideBar() {
     if(!sideBarOpen){
        sidebar.classList.add("side-responsive");
        sideBarOpen = true;
     }
}

function closeSidebar() {
    if (sideBarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sideBarOpen = false;
    }
}