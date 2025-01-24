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
        lib.style.transition = 'width 300ms ease-in-out';
        searchList.style.transition = '300ms ease-in-out';
        main.style.transition = 'grid-template-columns 300ms ease-in-out';
    });
})();

async function get_songs() {
    let f = await fetch("http://127.0.0.1:3000/songs/")
    let res = await f.text()
    // console.log(res);
    let new_div = document.createElement("div")
    new_div.innerHTML = res
    let links = new_div.getElementsByTagName("a")
    let songs = []
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs
}
(async function play_songs() {

    let button = document.querySelector(".play");
    let play = document.querySelector(".played");
    let pause = document.querySelector(".paused");
    let start = document.querySelector(".start-time");
    let end = document.querySelector(".end-time");
    let seekBar = document.querySelector(".seekbar");
    let circle = document.querySelector(".circle");

    let songs = await get_songs();
    let audio = new Audio(songs[0]);
    let playing = false;

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
    }


    audio.addEventListener("loadedmetadata", () => {
        let duration = Math.floor(audio.duration);
        end.innerHTML = formatTime(duration);
    });

    let seekBarWidth = seekBar.offsetWidth;
    setInterval(() => {
        if (!playing) return;
        start.innerHTML = formatTime(Math.floor(audio.currentTime));

        let progress = (audio.currentTime / audio.duration) * seekBarWidth;
        circle.style.transform = `translateX(${progress}px)`;
    }, 1000);

    button.addEventListener("click", () => {
        if (!playing) {
            audio.play();
            playing = true;
            play.style.display = "none";
            pause.style.display = "inline";
        } else {
            audio.pause();
            playing = false;
            play.style.display = "inline";
            pause.style.display = "none";
        }
    });
    start.style.color = "#8e8e8e";
    start.style.margin = "5px";
    end.style.color = "#8e8e8e";
    end.style.margin = "5px";
})();




