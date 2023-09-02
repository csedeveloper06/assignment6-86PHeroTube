
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
    //console.log(data.data); 
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category)=>{
        //console.log(category)
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="loadAllVideos('${category.category_id}')" class="btn">${category.category}</button>
        `;
        categoryContainer.appendChild(div);
    })
}

const loadAllVideos = async(category_id) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    //console.log(data.data);
    data.data?.forEach((video)=>{
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card w-60 bg-base-100 shadow-xl rounded-3xl my-10">
                <a target="_blank" href="https://i.ibb.co/L1b6xSq/shape.jpg">
                    <img class="w-60 h-40" src="${video?.thumbnail}" alt="" />
                </a>
                <div class="card-body  flex flex-col justify-center items-center">
                    <div class="card-actions flex flex-col justify-center items-center">
                        <div class="flex justify-items-start items-center gap-5">
                            <img class="h-10 w-10 rounded-full" src="${}" alt="">
                            <h2 class="card-title text-xs">${video.title}</h2>
                        </div> 
                        <div class="flex justify-center items-center gap-5">
                            <h3 class="text-xs ml-[60px]">${video?.authors[0]?.profile_name}</h3>
                            <i class="fa-solid fa-check text-white bg-blue-700 h-5 w-5 
                                rounded-full text-xs font-bold text-center p-[3px]"></i>
                        </div>
                        <p class="text-xs text-left">${video?.others?.views}</p>
                    </div>
                </div>
            </div>
        `;

        cardContainer.appendChild(div);
    })
}

loadCategory();
