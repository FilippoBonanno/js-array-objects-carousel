

const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// 1 CON UN CICLO CREO LE SLIDE E LE IMMETO IN PAG TUTTE VISIBILI
// 2 MODIFICO IL CICLO E FACC IN MODO CHE LE SLIDE VENGANO MESSE GIà INVISIBILI
// 3 CAPIRE COME RENDERE SOLO LA PRIMA VISIBILE


// fatto con il ciclo semplice for
// for (let i = 0; i < images.length; i++) {
//     const slide = images[i];
//     console.log("for", slide);

// }

const container = document.getElementById("main");
for (const slide of images) {
    

    let slideHtml = `
    <div class="slide">
        <img src="${slide.image}">
        <h2>${slide.title}</h2>
        <p>${slide.text}</p>
    </div>
    `;

    container.innerHTML += slideHtml;
};

// secondo container BONUS
const subContainer = document.getElementById("sub");
for (const slide of images) {
    

    let sub_slideHtml = `
    <div class="sub_slide">
        <img src="${slide.image}">
    </div>
    `;

    subContainer.innerHTML += sub_slideHtml;
};

// rendo visibile la prima slide
let slideActive = 0;
document.querySelectorAll(".slide")[slideActive].classList.add("active");
document.querySelectorAll(".sub_slide")[slideActive].classList.add("sub_active");

// seleziono il mio pulsante next con una variabile
let nextBtn = document.getElementById("btn_down");

// creo un event listner al click del mio button
nextBtn.addEventListener("click", function() {
    
    // rimuovo la classe active dallìelemento attivo
    document.querySelectorAll(".slide")[slideActive].classList.remove("active");
    document.querySelectorAll(".sub_slide")[slideActive].classList.remove("sub_active");


    // se il mio slideActive va sopra il 4 torna a 0
    if (slideActive >= images.length - 1) {
        console.log("maggiore di 4");
        slideActive = 0;
    } else {
         // ad ogni click slideActive lo aumento di 1
        slideActive++;
    };

     // do la classe active all'elemento successivo
    document.querySelectorAll(".slide")[slideActive].classList.add("active");
    document.querySelectorAll(".sub_slide")[slideActive].classList.add("sub_active");

});

// seleziono il pulsante prev in una variabile
let prevBtn = document.getElementById("btn_up");

// creo un event listner al click del mio button
prevBtn.addEventListener("click", function() {
    
    // rimuovo la classe active dallìelemento attivo
    document.querySelectorAll(".slide")[slideActive].classList.remove("active");
    document.querySelectorAll(".sub_slide")[slideActive].classList.remove("sub_active");


    // se il mio slideActive va sotto lo 0 torna a 4 
    if (slideActive <= 0) {
        console.log("maggiore di 4");
        slideActive = 4;
    } else {
         // ad ogni click slideActive lo diminuisco di 1
        slideActive--;
    };

     // do la classe active all'elemento successivo
     document.querySelectorAll(".slide")[slideActive].classList.add("active");
    document.querySelectorAll(".sub_slide")[slideActive].classList.add("sub_active");

});

