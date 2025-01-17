(function list_items_hover() {
    let listItems = document.querySelectorAll(".list-items");
    listItems.forEach((listItem) => {
        let playWhite = listItem.querySelector("img[alt='play-white']");
        let list_img = listItem.querySelector(".list-img img")

        listItem.addEventListener("mouseover", () => {

            playWhite.style.opacity = "1";
            list_img.style.opacity = "0.4"
        });

        listItem.addEventListener("mouseout", () => {

            playWhite.style.opacity = "0";
            list_img.style.opacity = "1"
        });
    });

})()


const scrollContainer = document.querySelector('.search_list');

scrollContainer.addEventListener('scroll', () => {
    const scrollPosition = scrollContainer.scrollTop;
    const categ = document.querySelector('.categ');

    if (scrollPosition > 1) {
        categ.style.boxShadow = '0 6px 10px rgba(0, 0, 0, .6)';
    } else {
        categ.style.boxShadow = 'none';
    }
});
const main = document.querySelector('.main');
const lib = document.querySelector('.lib');
const top_lib = document.querySelector('.top-lib');
const close_btn = document.querySelector('.close-btn');
const category = document.querySelector('.categ');
const search_list = document.querySelector('.search_list');
const plus_img = document.querySelector('.plus_img');
const your_lib = document.querySelector('.your-lib');
const lib_search = document.querySelector('.lib-search');
const lib_list = document.querySelector('.lib-list');
const list_items = document.querySelectorAll('.list-items');
const list_img = document.querySelector('.list-img');
const list_item_content = document.querySelectorAll('.list-item-content')
let open = true;
close_btn.addEventListener('click', () => {
    open = !open;

    close_btn.innerHTML = `
    <button type="button" class="close-btn flex ff-700 hover">
        <img src="./images/library${open ? '' : '_close'}.svg" alt="library" height="25" />
        ${open ? '<span class="your-lib ff-700">Your Library</span>' : ''}
    </button>`;

    const displayStyle = open ? 'flex' : 'none';

    plus_img.style.display = displayStyle;
    category.style.display = displayStyle;
    lib_search.style.display = displayStyle;
    list_item_content.forEach((item) => {
        item.style.display = displayStyle;
    })
    if (!open) {
        lib_list.style.width = '23%';
        search_list.style.width = '7%';
        main.style.gridTemplateColumns = '1fr 11fr';


    } else {
        lib_list.style.width = '100%';
        search_list.style.width = '26%';
        main.style.gridTemplateColumns = '1.55fr 4fr';
    }

});
