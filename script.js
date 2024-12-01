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
        categ.style.boxShadow  = '0 6px 10px rgba(0, 0, 0, .6)';
    } else {
        categ.style.boxShadow =  'none';
    }
});



