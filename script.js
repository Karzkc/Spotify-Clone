(function listItemsHover() {
    const listItems = document.querySelectorAll(".list-items");
    listItems.forEach((listItem) => {
        const playWhite = listItem.querySelector("img[alt='play-white']");
        const listImg = listItem.querySelector(".list-img img");

        listItem.addEventListener("mouseover", () => {
            playWhite.style.opacity = "1";
            listImg.style.opacity = "0.4";
        });

        listItem.addEventListener("mouseout", () => {
            playWhite.style.opacity = "0";
            listImg.style.opacity = "1";
        });
    });
})();


(function scrollShadowEffect() {
    const scrollContainer = document.querySelector('.search_list');
    const categ = document.querySelector('.categ');

    scrollContainer.addEventListener('scroll', () => {
        const scrollPosition = scrollContainer.scrollTop;
        categ.style.boxShadow = scrollPosition > 1
            ? '0 6px 10px rgba(0, 0, 0, .6)'
            : 'none';
    });
})();


(function toggleLibrary() {
    const main = document.querySelector('.main');
    const lib = document.querySelector('.lib');
    const closeBtn = document.querySelector('.close-btn');
    const category = document.querySelector('.categ');
    const searchList = document.querySelector('.search_list');
    const plusImg = document.querySelector('.plus_img');
    const libSearch = document.querySelector('.lib-search');
    const listItems = document.querySelectorAll('.list-items');
    const listItemContent = document.querySelectorAll('.list-item-content');
    let open = true;

    closeBtn.addEventListener('click', () => {
        open = !open;

        closeBtn.innerHTML = `
            <button type="button" class="close-btn flex ff-700 hover">
                <img src="./images/library${open ? '' : '_close'}.svg" alt="library" height="25" />
                ${open ? '<span class="your-lib ff-700">Your Library</span>' : ''}
            </button>`;

        const displayStyle = open ? 'flex' : 'none';
        plusImg.style.display = displayStyle;
        category.style.display = displayStyle;
        libSearch.style.display = displayStyle;
        listItemContent.forEach((item) => {
            item.style.display = displayStyle;
        });

        if (!open) {
            searchList.style.width = '5%';
            searchList.style.top = '19%';
            main.style.gridTemplateColumns = '1fr 16fr';
            listItems.forEach((item) => {
                item.style.alignItems = 'center';
                item.style.justifyContent = 'center';
            });
        } else {
            searchList.style.width = '26%';
            searchList.style.top = '27%';
            main.style.gridTemplateColumns = '1.55fr 4fr';
            listItems.forEach((item) => {
                item.style.alignItems = 'flex-start';
                item.style.justifyContent = 'flex-start';
            });
        }
        lib.style.transition = 'width 400ms ease-in-out';
        searchList.style.transition = '400ms ease-in-out';
        main.style.transition = 'grid-template-columns 400ms ease-in-out';
    });
})();
