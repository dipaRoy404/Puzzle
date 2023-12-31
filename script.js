let tl = gsap.timeline();


// Calling functions back
page1Animation();
page2Animation();


const myScrollTrigger = gsap.to("body", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        endTrigger: ".page2",
        end: "top top",
        scrub: true,
        onUpdate: (prog) => {
            let p = prog.progress;
            if (p > .6) {
                document.querySelector(".page1").innerHTML = "<h2>Uper Kyu Aa..gye 🤔</h2>"
            }
        },
    },
    backgroundColor: "#111"
})









// Important functions
function page1Animation() {
    tl
        .to(".page1 h1:nth-child(1)", {
            opacity: 1,
            scale: 1.1,
            duration: 2,
            delay: .5,
            ease: "easeOut"
        })
        .to(".page1 h1:nth-child(1)", {
            opacity: 0,
            scale: 1.3,
            duration: .5,
        })
        .to(".page1 h1:nth-child(2) span", {
            top: 0,
            duration: 1,
            stagger: 1,
            ease: "bounce.out"
        })
        .to(".page1 h1:nth-child(2) span:nth-child(1)", {
            top: "100%",
            duration: 1,
            delay: -1,
            ease: "bounce.out"
        })
        .set(".page2", {
            display: "flex",
        })
}

function page2Animation() {
    let count = 0;
    const btn = document.querySelector(".page2 button");

    btn.onmouseenter = () => {
        count++;
        const w = document.documentElement.clientWidth;
        const h = document.documentElement.clientHeight;

        const bw = btn.clientWidth;
        const bh = btn.clientHeight;

        let x = Math.floor(Math.random() * (w - bw)); // Adjusted random X position calculation
        let y = Math.floor(Math.random() * (h - bh)); // Adjusted random Y position calculation

        gsap.to(btn, {
            top: y,
            left: x,
            duration: count/10,
        });
    };

    btn.onclick = () => {
        btn.innerHTML = "Clicked";
        gsap.set(btn, {
            backgroundColor: "green",
        });

        const tl = gsap.timeline();

        tl
            .to(btn, {
                scale: 1.3,
                opacity: 0,
                duration: 0.5,
            })
            .set(btn, {
                display: "none",
            })
            .set(".page2 h1:nth-child(2)", {
                display: "block",
            })
            .to(".page2 h1:nth-child(2)", {
                opacity: 1,
                duration: 1,
                ease: "easeInOut",
            })
            .to(".page2 h1:nth-child(2)", {
                opacity: 0,
                duration: 1,
                delay: .5,
                scale: 1,
            })
            .set(".page2 h1:nth-child(2)", {
                display: "none"
            })
            .set(".page2 h1:nth-child(3)", {
                display: "block",
                opacity: 1,
            })
            .to(".page2 h1:nth-child(3) span", {
                top: 0,
                duration: 1,
                scale: 1,
                ease: "bounce.out",
            })
            .to("body", {
                onStart: () => {
                    myScrollTrigger.scrollTrigger.kill();
                    document.querySelector(".page1").innerHTML = "<h2> Chalo <span>start</span> Karte Hai</h2> <span>10</span>"

                    const holdSpan = document.querySelector(".page1 h2 span");
                    const timeSpan = document.querySelector(".page1 > span");
                    let remainingTime = 50;
                    let holdTimer;

                    holdSpan.addEventListener("mousedown", () => {
                        setTimeout(() => {
                            timeSpan.style.opacity = .1;
                            holdTimer = setInterval(() => {
                                remainingTime--;
                                
                                if(remainingTime > 0) {
                                    timeSpan.innerHTML = remainingTime;
                                } else {
                                    clearInterval(holdTimer);
                                    window.location.href = "https://diparoy404.github.io/final-phase/";
                                }                                
                            }, 100);
                        }, 1000);
                    });
                },
                backgroundColor: "#111",
            })
    };
}
