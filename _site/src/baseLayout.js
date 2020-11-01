//Mobile Menu Toggle
let menuToggleStatus = false;

function onBaseLayoutLoaded()
{
    let menuButton = document.getElementById("mobileMenuButton");
    let navLinks = document.getElementById("navLink");
    let socialLinks = document.getElementById("socailLinks");

    if(menuButton.style.display == "visible")
    {
        navLinks.style.display = "flex";
        socialLinks.style.display = "flex";
    }
    else
    {
        navLinks.style.display = "none"
        socialLinks.style.display = "none";
    }
}

function menuToggle(){
    //debug log
    let menuButton = document.getElementById("mobileMenuButton");
    let navLinks = document.getElementById("navLink");
    let socialLinks = document.getElementById("socialLinks");
    
    menuToggleStatus = !menuToggleStatus;

    if(menuToggleStatus)
    {
        navLinks.style.display = "flex";
        socialLinks.style.display = "flex";
    }
    else if(!menuToggleStatus)
    {
        navLinks.style.display = "none";
        socialLinks.style.display = "none";
    }
}