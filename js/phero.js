
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

const loadCategory = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data); 
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category)=>{
        //console.log(category)
        const div = document.createElement('div');
        div.innerHTML = `
            <button class="btn">${category.category}</button>
        `;
        categoryContainer.appendChild(div);
    })
}

const loadAllVideos = () =>{
    
}

loadCategory();
