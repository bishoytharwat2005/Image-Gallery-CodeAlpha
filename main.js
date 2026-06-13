const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const mobileMenu = document.querySelector('.mobileMenu');

menuBtn.onclick = () => {
    mobileMenu.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    document.body.style.overflow = 'hidden';
};

closeBtn.onclick = () => {
    mobileMenu.classList.add('hidden');
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    document.body.style.overflow = 'auto';
};

const cards = [
    {
        title: "Yosemite Valley",
        description: "Golden light sweeps across the valley floor at dusk.",
        size: "4.2 MB · JPG",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Mountain Escape",
        description: "Snow-covered peaks rise above the clouds.",
        size: "3.9 MB · JPG",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Forest Path",
        description: "Sunlight filters through a peaceful forest trail.",
        size: "5.1 MB · JPG",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Ocean Breeze",
        description: "Blue waves meet the sandy beach at sunset.",
        size: "4.7 MB · JPG",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "City Lights",
        description: "Bright skyscrapers illuminate the night skyline.",
        size: "6.3 MB · JPG",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Desert Adventure",
        description: "Golden sand dunes stretch under the clear sky.",
        size: "4.5 MB · JPG",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Calm Lake",
        description: "A mirror-like lake reflects the surrounding mountains.",
        size: "4.1 MB · JPG",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Winter Snow",
        description: "Fresh snow covers the quiet pine forest.",
        size: "3.7 MB · JPG",
        image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Countryside",
        description: "Rolling green hills under a bright blue sky.",
        size: "5.0 MB · JPG",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Sunset Road",
        description: "A long road disappearing into the orange sunset.",
        size: "4.8 MB · JPG",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Wild River",
        description: "Fast-flowing river cutting through rocky terrain.",
        size: "5.6 MB · JPG",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Island Paradise",
        description: "Palm trees sway beside crystal-clear waters.",
        size: "4.9 MB · JPG",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Autumn Leaves",
        description: "Orange and red leaves cover the forest ground.",
        size: "3.8 MB · JPG",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Bridge View",
        description: "A modern bridge glowing beautifully at night.",
        size: "5.4 MB · JPG",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Camping Night",
        description: "A warm campfire under a sky full of stars.",
        size: "4.3 MB · JPG",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Foggy Morning",
        description: "Soft fog covers the quiet countryside fields.",
        size: "3.6 MB · JPG",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Blue Waterfall",
        description: "Clear water cascades down mossy rocks.",
        size: "5.2 MB · JPG",
        image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Skyline View",
        description: "City skyline glowing under the evening sky.",
        size: "4.0 MB · JPG",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Nature Trail",
        description: "A beautiful hiking path through green mountains.",
        size: "5.5 MB · JPG",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Night Desert",
        description: "Stars shine brightly over the desert dunes.",
        size: "4.6 MB · JPG",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Green Valley",
        description: "Fresh green landscapes stretch into the distance.",
        size: "3.9 MB · JPG",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80"
    }
];

const container = document.querySelector('.containar-card');


cards.forEach((c, i) => {
    container.innerHTML += `
        <div class="containar-card group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-400/40 transition">
            <div class="contant-card relative overflow-hidden">
                <img src="${c.image}"
                    class="image-card w-full h-64 object-cover group-hover:scale-110 transition duration-700 cursor-pointer">
            </div>
            <div class="p-5">
                <h3 class="text-lg font-semibold">${c.title}</h3>
                <p class="text-sm text-zinc-400 mt-2">${c.description}</p>
                <div class="flex justify-between items-center mt-4 text-xs text-zinc-500">
                    <span>${c.size}</span>
                    <button class="viewBtn text-purple-300 hover:text-white transition cursor-pointer">View →</button>
                </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
        </div>`;
});

const containarcard = document.querySelectorAll('.image-card');
const slidePopup = document.querySelector('.slide-popup');
const popupCloseBtn = document.querySelector('.popup-closeBtn');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');
const popupImage = document.querySelector('.popup-image');
const viewBtn = document.querySelectorAll('.viewBtn');

let currentImageIndex = 0;

containarcard.forEach(
    (img, index) => {
        img.onclick = () => {
            const currentImageSrc = img.src;
            slidePopup.classList.add("opacity-100");
            slidePopup.classList.remove("pointer-events-none");
            popupImage.src = currentImageSrc;
            currentImageIndex = index;
        }
    }
);
viewBtn.forEach((btn, index) => {
    btn.onclick = () =>{
        const currentImageSrc = containarcard[index].src;
        slidePopup.classList.add("opacity-100");
        slidePopup.classList.remove("pointer-events-none");
        popupImage.src = currentImageSrc;
        currentImageIndex = index;
    } 
});


popupCloseBtn.onclick = () => {
    slidePopup.classList.remove("opacity-100");
    slidePopup.classList.add("pointer-events-none");
}

arrowNext.onclick = () => {
    currentImageIndex++;
    if (currentImageIndex >= containarcard.length) {
        currentImageIndex = 0;
    }
    const currentImageSrc = containarcard[currentImageIndex].src;
    popupImage.src = currentImageSrc;
}

arrowPrev.onclick = () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = containarcard.length - 1;
    }
    const currentImageSrc = containarcard[currentImageIndex].src;
    popupImage.src = currentImageSrc;
}
document.onkeydown = (e) => {
    if (e.key === "Escape") {
        slidePopup.classList.remove("opacity-100");
        slidePopup.classList.add("pointer-events-none");
    }
    if (e.key === "ArrowRight") {

        currentImageIndex++;

        if (currentImageIndex >= containarcard.length) {
            currentImageIndex = 0;
        }

        popupImage.src = containarcard[currentImageIndex].src;
    }

    // Arrow Left
    if (e.key === "ArrowLeft") {

        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = containarcard.length - 1;
        }

        popupImage.src = containarcard[currentImageIndex].src;
    }
}
