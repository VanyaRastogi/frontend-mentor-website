Burger=document.querySelector('.burger')
Navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')




Burger.addEventListener('click',()=>{

    navlist.classList.toggle('active');
    Burger.classList.toggle('active');

})
document.querySelectorAll(".nav-list a").forEach(
    n => n.addEventListener("click" , () => {
        navlist.classList.remove('active');
    Burger.classList.remove('active');
    })
)

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }