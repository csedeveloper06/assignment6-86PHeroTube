
const menuItems = document.querySelector('.toggle-menu-items');
function onToggleMenu(e){
    console.log(e);
    e.name = e.name === 'menu' ? 'close' : 'menu';
    //menuItems.classList.toggle('top-[25%]');
    menuItems.classList.toggle('top-[25%]');
}

const handleHomeBtn = () =>{
    window.location.href = "index.html";
}

const handleBlogBtn = () =>{
    window.location.href = "blog.html";
}
