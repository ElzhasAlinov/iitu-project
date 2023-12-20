window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})
const japanTravelInfo = [
    "Discover the rich culture and history of Japan.",
    "Experience traditional Japanese cuisine like sushi, ramen, and tempura.",
    "Explore iconic landmarks such as Mount Fuji and Kyoto's temples.",
    "Enjoy the beautiful cherry blossoms during springtime.",
    "Relax in natural hot springs known as 'onsen'."
];

const travelList = document.getElementById('travelList');
let currentIndex = 0;

function changeTextWithAnimation() {
    const currentInfo = japanTravelInfo[currentIndex];
    travelList.innerHTML = `<li>${currentInfo}</li>`;
    
    travelList.classList.add('animate');

    currentIndex = (currentIndex + 1) % japanTravelInfo.length;

    setTimeout(() => {
        travelList.classList.remove('animate');
    }, 1000);
}

setInterval(changeTextWithAnimation, 5000);

changeTextWithAnimation();
