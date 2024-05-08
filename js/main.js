// // Recupero tutti gli elementi necessari da gestire
// let slides = document.getElementsByClassName("slide");
// console.log(slides);
// let imgActive;
// let nextSlide;

// // INSERISCO UN EVENTLISTNER CHE SOLO AL CLICK MI INCLUDA TUTTO QUELLO CHE AVEVO INSERITO
// document.getElementById("next").addEventListener("click", function () {
//     // CREO UN CICLO CHE AUMENTI DI 1 E CHE FINISCA QUANDO ARRIVA A < DI 5 IN QUESTO CASO
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];
//         console.log(i);

//         // SE CONTIENE LA CLASSE ACTIVE GLIELA TOLGO
//         if (slide.classList.contains("active")) {
//             //se si, rimuovo la classe active
//             slide.classList.remove("active");
//             //e prendo nota dell'indice
//             imgActive = i;
//             console.log("Ho rimosso la classe active dall'elemento: ", i);
//         }
//     }

//     // ADESSO DICO CHE LA SLIDE SUCCESSIVA è QUELLA ATTIVA + 1
//     nextSlide = imgActive + 1;
//     console.log (nextSlide);

//     if (nextSlide >= slides.length) {
//         nextSlide = 0;
//     }

//     // METTO ACTIVE ALLA SLIDE SUCCESSIVA
//     slides[nextSlide].classList.add("active");
//     console.log (`classe attiva: ${nextSlide}`);
// });

// // INSERISCO UN EVENTLISTNER CHE SOLO AL CLICK MI INCLUDA TUTTO QUELLO CHE AVEVO INSERITO
// document.getElementById("prev").addEventListener("click", function () {
//     // CREO UN CICLO CHE AUMENTI DI 1 E CHE FINISCA QUANDO ARRIVA A < DI 5 IN QUESTO CASO
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];
//         console.log(i);

//         // SE CONTIENE LA CLASSE ACTIVE GLIELA TOLGO
//         if (slide.classList.contains("active")) {
//             //se si, rimuovo la classe active
//             slide.classList.remove("active");
//             //e prendo nota dell'indice
//             imgActive = i;
//             console.log("Ho rimosso la classe active dall'elemento: ", i);
//         }
//     }

//     // ADESSO DICO CHE LA SLIDE SUCCESSIVA è QUELLA ATTIVA - 1
//     nextSlide = imgActive - 1;
//     console.log (nextSlide);

//      if (nextSlide < 0) {
//          nextSlide = 4;
//     }

//     // METTO ACTIVE ALLA SLIDE SUCCESSIVA che adesso sarebbe quella precedente
//     slides[nextSlide].classList.add("active");
//     console.log (`classe attiva: ${nextSlide}`);
// });


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
    console.log("for..of", slide);

    let slideHtml = `
    <div class="slide">
        <img src="${slide.image}">
        <h2>${slide.title}</h2>
        <p>${slide.text}</p>
    </div>
    `;

    container.innerHTML += slideHtml;
}

// rendo visibile la prima slide
let slideActive = 0;
document.querySelectorAll(".slide")[slideActive].classList.add("active");