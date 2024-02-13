// console.log("asd");

// const links = document.querySelectorAll("nav a");

// console.log(links);


// links.forEach(link => {
//     link.addEventListener("click", event => {
//         event.preventDefault();

//         console.log(event.target.href);

//         const id = event.target.href.split("#")[1];

//         document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
//     })
// })

//

const nav = document.querySelector("nav");

// console.log(nav);

// nav.addEventListener("click", event => {
//     if (!event.target.matches('a')) {
//         return;
//     }

//     event.preventDefault();

//     console.log(event.target.href);

//     const id = event.target.href.split("#")[1];

//     document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
// })

function onScroll() {
    console.log("asd");
    nav.classList.toggle('navbar-scrolled', scrollY > 200)
    
}

let lock = false;

// document.addEventListener("scroll", () => {
//     if (!lock) {
//         lock = true;
//         onScroll()
//         setTimeout(() => lock = false, 200)
//     }
// })

document.addEventListener("scroll", _.throttle(onScroll, 200))


const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};

function onObserve(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            console.log("asd2");
            entry.target.classList.add("animate__animated", `animate__${entry.target.dataset.scrollAnimation}`)
        }
    }
}
  
const observer = new IntersectionObserver(onObserve, options);

document.querySelectorAll("[data-scroll]").forEach(element => {
    observer.observe(element);
});


function onCounterObserve(entries) {
    for (const entry of entries) {
        if (entry.isIntersecting && !('started' in entry.target.dataset)) {
            console.log("asd3");
            const counter = entry.target;
            counter.dataset.started = "";

            const number = Number.parseInt(counter.dataset.countTo, 10);

            for (let i = 0; i <= number; i++) {
                setTimeout(() => counter.innerText = i, 200);
            }

        }
    }
}

const counterObserver = new IntersectionObserver(onCounterObserve, options);

function smartCounter(counter, counterObserver) {
    counterObserver.observe(counter);
}

document.querySelectorAll("[data-count-to]").forEach(element => {
    smartCounter(element, counterObserver)
})