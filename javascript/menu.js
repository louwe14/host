document.querySelector("header-container-right").addEventListener("click", () => {
    change_menu_state()
})
document.querySelector(".menu-container-part-2").addEventListener("click", () => {
    change_menu_state()
})

window.scrollTo(0,0)

function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
    document.getElementById("scroll_bar_id").innerText = `
    /* width */
    ::-webkit-scrollbar {
        width: 9px;
    }
      /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }
      /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0);
        border-radius: 15px;
    }
      /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,0);
    }`;
};
function enableScroll() {
    window.onscroll = function() {};
    document.getElementById("scroll_bar_id").innerText = `
    /* width */
    ::-webkit-scrollbar {
        width: 9px;
    }
      /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }
      /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.4);
        border-radius: 15px;
    }
      /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,0.7);
    }`;
};

function responsive() {
    if (device == "phone") {
        document.querySelector("header-container-left").innerHTML = "JDA";
        document.querySelector("header-container").style.cssText = "width: 80%; margin-left: 10%";
        let size_title = 70
        while (document.querySelector("#Title").clientHeight > 70) {
            size_title = size_title - 1
            document.querySelector("#Title").style.cssText = `font-size: ${size_title}px`
        }
        let size_title_presentation_du_lycee = 35
        while (document.querySelector("#title-pre-lycée").clientHeight > 46) {
            size_title_presentation_du_lycee = size_title_presentation_du_lycee - 1
            document.querySelector("#title-pre-lycée").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
            document.querySelector("#title-enseignement").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
            document.querySelector("#title-résultats").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
        }

        document.querySelector(".presentation-container").style.cssText = "display: block;";
        document.querySelector(".presentation-text-container").style.cssText = "width: 90vw;";
        document.querySelector(".container-right-presentation").style.cssText = "width: 100%; margin-top: 40px;";
        document.querySelector(".img-presentation").style.cssText = "width: 100%";
        
        document.querySelector(".discipline-enseignement-container").style.cssText = "display: block;"
        document.querySelector(".enseignement-left").style.cssText = "width: 100%;"
        document.querySelector(".enseignement-right").style.cssText = "width: 100%;"

        let liste_container = document.querySelectorAll(".discipline-enseignement-container")
        for (let i = 0 ; i < liste_container.length; i++) {
            liste_container[i].style.cssText = "display: block;";
        }
        let liste_left_container = document.querySelectorAll(".enseignement-left")
        for (let i = 0 ; i < liste_left_container.length; i++) {
            liste_left_container[i].style.cssText = "width: 100%;";
        }
        let liste_right_container = document.querySelectorAll(".enseignement-right")
        for (let i = 0 ; i < liste_right_container.length; i++) {
            liste_right_container[i].style.cssText = "width: 100%; display: block;";
        }
        let liste_matière_container = document.querySelectorAll(".matière")
        for (let i = 0 ; i < liste_matière_container.length; i++) {
            liste_matière_container[i].style.cssText = "left: 10%";
        }
        let liste_text_container = document.querySelectorAll(".enseignement-text-container")
        for (let i = 0 ; i < liste_text_container.length; i++) {
            liste_text_container[i].style.cssText = "width: 100%";
        }
        let liste_svgs = document.querySelectorAll(".svg-container")
        for (let i = 0 ; i < liste_svgs.length; i++) {
            liste_svgs[i].style.cssText = "display: none";
        }
        let liste_savoir = document.querySelectorAll(".enseignement-en-savoir-plus")
        for (let i = 0 ; i < liste_savoir.length; i++) {
            liste_savoir[i].style.cssText = "left: 0%; overflow: hidden;"
        }
        let liste_savoir2 = document.querySelectorAll(".tablet-en-savoir-plus-container")
        for (let i = 0 ; i < liste_savoir2.length; i++) {
            liste_savoir2[i].style.cssText = "display: flex;"
        }
        let liste_tableau_title = document.querySelectorAll(".resultats-text-title")
        for (let i = 0 ; i < liste_tableau_title.length; i++) {
            liste_tableau_title[i].style.cssText = "font-size: 13px; padding: 5%;"
        }
        document.querySelector("footer").style.cssText = "display: none;"
        document.querySelector(".footer-tablet").style.cssText = "display: block;"
        document.querySelector("#ligne-verticale").style.cssText = "position:absolute; right: 0vh";
        document.querySelector(".footer-part-middle").style.cssText = "display: block;"
        let liste_footer = document.querySelectorAll(".footer-1-elements-middle")
        for (let i=0; i<liste_footer.length; i++) {
            liste_footer[i].style.cssText = "width: 100%;"
        }
    }
    else if (device == "tablet") {
        let size_title = 70
        while (document.querySelector("#Title").clientHeight > 91) {
            size_title = size_title - 1
            document.querySelector("#Title").style.cssText = `font-size: ${size_title}px`
        }
        let size_title_presentation_du_lycee = 35
        while (document.querySelector("#title-pre-lycée").clientHeight > 46) {
            size_title_presentation_du_lycee = size_title_presentation_du_lycee - 1
            document.querySelector("#title-pre-lycée").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
            document.querySelector("#title-enseignement").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
            document.querySelector("#title-résultats").style.cssText = `font-size: ${size_title_presentation_du_lycee}px`
        }
        document.querySelector("header-container-left").innerHTML = "Jeanne d'Arc";
        document.querySelector("header-container").style.cssText = "width: 80%; margin-left: 10%";
        document.querySelector(".presentation-container").style.cssText = "display: block;";
        document.querySelector(".presentation-text-container").style.cssText = "width: 90vw";
        document.querySelector(".container-right-presentation").style.cssText = "width: 100%; margin-top: 40px;";
        document.querySelector(".img-presentation").style.cssText = "width: 100%";
        
        document.querySelector(".discipline-enseignement-container").style.cssText = "display: block;"
        document.querySelector(".enseignement-left").style.cssText = "width: 100%;"
        document.querySelector(".enseignement-right").style.cssText = "width: 100%;"

        let liste_container = document.querySelectorAll(".discipline-enseignement-container")
        for (let i = 0 ; i < liste_container.length; i++) {
            liste_container[i].style.cssText = "display: block;";
        }
        let liste_left_container = document.querySelectorAll(".enseignement-left")
        for (let i = 0 ; i < liste_left_container.length; i++) {
            liste_left_container[i].style.cssText = "width: 100%;";
        }
        let liste_right_container = document.querySelectorAll(".enseignement-right")
        for (let i = 0 ; i < liste_right_container.length; i++) {
            liste_right_container[i].style.cssText = "width: 100%; display: block;";
        }
        let liste_matière_container = document.querySelectorAll(".matière")
        for (let i = 0 ; i < liste_matière_container.length; i++) {
            liste_matière_container[i].style.cssText = "left: 10%";
        }
        let liste_text_container = document.querySelectorAll(".enseignement-text-container")
        for (let i = 0 ; i < liste_text_container.length; i++) {
            liste_text_container[i].style.cssText = "width: 100%";
        }
        let liste_svgs = document.querySelectorAll(".svg-container")
        for (let i = 0 ; i < liste_svgs.length; i++) {
            liste_svgs[i].style.cssText = "display: none";
        }
        let liste_savoir = document.querySelectorAll(".enseignement-en-savoir-plus")
        for (let i = 0 ; i < liste_savoir.length; i++) {
            liste_savoir[i].style.cssText = "left: 0%; overflow: hidden;"
        }
        let liste_savoir2 = document.querySelectorAll(".tablet-en-savoir-plus-container")
        for (let i = 0 ; i < liste_savoir2.length; i++) {
            liste_savoir2[i].style.cssText = "display: flex;"
        }
        let liste_tableau_title = document.querySelectorAll(".resultats-text-title")
        for (let i = 0 ; i < liste_tableau_title.length; i++) {
            liste_tableau_title[i].style.cssText = "font-size: 13px; padding: 8%;"
        }
        document.querySelector("footer").style.cssText = "display: none;"
        document.querySelector(".footer-tablet").style.cssText = "display: block;"
    }
    else if(device == "laptop") {
        document.querySelector("header-container-left").innerHTML = "Jeanne d'Arc";
        let h = document.querySelector(".presentation-text-container").clientHeight;
        let he = document.querySelector(".img-presentation").clientHeight;
        let height = h - he - 20
        document.querySelector(".container-right-presentation").style.cssText = `display: block; height: ${h}px`;
        gsap.to(".img-presentation", {
            ease: "none",
            scrollTrigger: {
              trigger: ".img-presentation",
              scrub: true,
              pin: true,
              start: `center center`,
              end: () => "+=" + height + "px",
            },
        });
        liste_left = document.querySelectorAll(".enseignement-left");
        for (var i = 0; i < liste_left.length; i++) {
            liste_left[i].style.cssText = "width: 28% "
        }
        liste_right = document.querySelectorAll(".enseignement-right");
        for (var i = 0; i < liste_right.length; i++) {
            liste_right[i].style.cssText = "width: 72% "
        }
        liste_matière = document.querySelectorAll(".matière");
        for (var i = 0; i < liste_matière.length; i++) {
            liste_matière[i].style.cssText = "left: 15%; font-size: 16px;"
        }
        liste_number = document.querySelectorAll(".number");
        for (var i = 0; i < liste_number.length; i++) {
            liste_number[i].style.cssText = "font-size: 16px;"
        }
        document.querySelector("footer").style.cssText = "display: block;"
        document.querySelector(".footer-tablet").style.cssText = "display: none;"
    }
    else {
        document.querySelector("header-container-left").innerHTML = "Jeanne d'Arc";
        document.querySelector("footer").style.cssText = "display: block;"
        document.querySelector(".footer-tablet").style.cssText = "display: none;"
    }
}

var device = null
function get_device() {
    if (window.innerWidth > 1024 ) {
        device = "laptop large"
    }
    else if (window.innerWidth > 850) {
        device = "laptop"
    }
    else if (window.innerWidth > 425) {
        device = "tablet"
    }
    else if (window.innerWidth <= 425) {
        device = "phone"
    }
    responsive()
    animation_responsive()
}

get_device()

function animation_responsive() {
    if ((device == "laptop") || (device == "laptop large")) {
        
        let tl_enseignement = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement",
                start: "top 70%"
            }
        });
        tl_enseignement.add("start")
        .fromTo(".ligne", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut(), stagger: 0.3}, "start")
        .to(".number", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), stagger: 0.3}, "start")
        .to(".matière", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5, stagger: 0.3}, "start")
        .to(".enseignement-text-container", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1, stagger: 0.3}, "start")
        .to(".circle", {strokeDashoffset: "40%", duration: 1, ease: Power2.easeInOut(), delay: -2.7, stagger: 0.3})
        .to(".line-1", {width: 50, duration: 0.5, ease: Power2.easeInOut(), delay: -2.7, stagger: 0.3})
        .to(".line-2", {width: 20, duration: 0.5, ease: Power2.easeInOut(), delay: -2, stagger: 0.3})
        .to(".line-3", {width: 20, duration: 0.5, ease: Power2.easeInOut(), delay: -2, stagger: 0.3})

        let tl_footer = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                start: "top 70%",
            }
        });
        tl_footer.add("go")
        .to("footer", {backgroundColor: "#0F4E81"})
        .to(".footer-1-title-section", {opacity: 1, y: -20, stagger: 1, duration: 0.5, ease: Power2.easeInOut()}, "go")
        .to(".footer-1-element", {opacity: 0.8, y: -20, stagger: 0.3}, "go")
        .to(".footer-2-element", {opacity: 1, y:-20, stagger: 0.3, duration: 0.4, delay: -2.5, ease: Power2.easeInOut()})
        tl_footer.duration(2)

        document.querySelector("#svg-container-terminale").addEventListener("mouseover", () => {
            gsap.to("#circle-terminale", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-terminale").addEventListener("mouseleave", () => {
            gsap.to("#circle-terminale", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-terminale").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/JDA_Cycle_Terminal_presentation_aux_2nde_.pdf";
        })

        document.querySelector("#svg-container-mathématiques").addEventListener("mouseover", () => {
            gsap.to("#circle-mathématiques", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-mathématiques").addEventListener("mouseleave", () => {
            gsap.to("#circle-mathématiques", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-mathématiques").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/Specialite_Maths_Cycle_terminal_1ere.pdf";
        })

        document.querySelector("#svg-container-HGGSP").addEventListener("mouseover", () => {
            gsap.to("#circle-HGGSP", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-HGGSP").addEventListener("mouseleave", () => {
            gsap.to("#circle-HGGSP", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-HGGSP").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/Presentation_HGGSP_pour_classes_2nde.pdf";
        })

        document.querySelector("#svg-container-physique-chimie").addEventListener("mouseover", () => {
            gsap.to("#circle-physique-chimie", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-physique-chimie").addEventListener("mouseleave", () => {
            gsap.to("#circle-physique-chimie", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-physique-chimie").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/Specialite_Physique-Chimie_Cycle_terminal_1ere.pdf";
        })

        document.querySelector("#svg-container-ses").addEventListener("mouseover", () => {
            gsap.to("#circle-ses", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-ses").addEventListener("mouseleave", () => {
            gsap.to("#circle-ses", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-ses").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/presentation_SES_prof_seconde.pdf";
        })

        document.querySelector("#svg-container-svt").addEventListener("mouseover", () => {
            gsap.to("#circle-svt", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-svt").addEventListener("mouseleave", () => {
            gsap.to("#circle-svt", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-svt").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/Specialite_SVT_Cycle_terminal_1ere.pdf";
        })

        document.querySelector("#svg-container-nsi").addEventListener("mouseover", () => {
            gsap.to("#circle-nsi", {strokeDashoffset: "0%"})
        })
        document.querySelector("#svg-container-nsi").addEventListener("mouseleave", () => {
            gsap.to("#circle-nsi", {strokeDashoffset: "40%"})
        })
        document.querySelector("#svg-container-nsi").addEventListener("click", () => {
            scrollTo(0, 0)
            window.location.href = "./pdfs/Specialite_NSI_cycle_terminal_1ere.pdf";
        })
    }
    else if ((device == "tablet") || (device == "phone")) {
        let tl_enseignement_phone_1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-1",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_1.add("start")
        .fromTo("#enseignement-ligne-1", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-1", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-1", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-1", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-1", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_1.duration(1)

        let tl_enseignement_phone_2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-2",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_2.add("start")
        .fromTo("#enseignement-ligne-2", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-2", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-2", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-2", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-2", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_2.duration(1)

        let tl_enseignement_phone_3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-3",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_3.add("start")
        .fromTo("#enseignement-ligne-3", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-3", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-3", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-3", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-3", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_3.duration(1)

        let tl_enseignement_phone_4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-4",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_4.add("start")
        .fromTo("#enseignement-ligne-4", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-4", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-4", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-4", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-4", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_4.duration(1)

        let tl_enseignement_phone_5 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-5",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_5.add("start")
        .fromTo("#enseignement-ligne-5", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-5", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-5", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-5", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-5", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_5.duration(1)

        let tl_enseignement_phone_6 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-6",
                start: "top 70%"
            }
        });
        tl_enseignement_phone_6.add("start")
        .fromTo("#enseignement-ligne-6", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-6", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-6", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-6", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-6", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_6.duration(1)

        let tl_enseignement_phone_7 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container-enseignement-7",
                start: "top 70%",
            }
        });
        tl_enseignement_phone_7.add("start")
        .fromTo("#enseignement-ligne-7", {width: 0}, {width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeOut()}, "start")
        .to("#enseignement-number-7", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut()}, "start")
        .to("#enseignement-matière-7", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 0.5}, "start")
        .to("#enseignement-text-7", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1}, "start")
        .to("#link-tablet-7", {opacity: 1, x: 20, duration: 0.5, ease: Power2.easeOut(), delay: 1.5}, "start")
        tl_enseignement_phone_7.duration(1)

        gsap.fromTo("#enseignement-ligne-8", {width: 0}, {scrollTrigger: {trigger: "#enseignement-ligne-8", start: "top 70%"}, width: 0.9*window.innerWidth - 1, duration: 2, ease: Power2.easeInOut()})

        let tl_footer = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-tablet",
                start: "top 70%",
            }
        });
        tl_footer.add("go")
        .to(".footer-tablet", {backgroundColor: "#0F4E81"})
        .to(".footer-1-title-section", {opacity: 1, y: -20, stagger: 1.7, duration: 0.5, ease: Power2.easeInOut()}, "go")
        .to(".footer-1-element", {opacity: 0.8, y: -20, stagger: 0.3, duration: 0.5, ease: Power2.easeInOut(), delay: 3.5}, "go")
        .to(".footer-2-element-tablet", {opacity: 1, y:-20, stagger: 0.3, duration: 0.4, delay: 0, ease: Power2.easeInOut()})
        tl_footer.duration(2)

        document.querySelector(".container-1").style.cssText = "flex-direction: column;";
        document.querySelector(".container-text").style.cssText = "display: flex; flex-direction: column; align-items: center;";
        let height = 40;
        while ((document.querySelector("#text-intro-2").clientHeight > 50) && (height > 0)) {
            height = height - 1;
            document.querySelector("#text-intro-2").style.cssText = `font-size: ${height}px;`;
        };
        document.querySelector("#text-intro-1").style.cssText = `font-size: ${height}px;`;
        document.querySelector("#hide-1").style.cssText = "margin-left: 0px;";
        document.querySelector("#hide-2").style.cssText = "margin-left: 0px;";
    }
}


function get_pressed() {
    document.addEventListener('keydown', ge);    
};

function delete_pressed(event) {
    document.removeEventListener('keydown', ge)
};

function ge(event) {
    if(event.key == "Escape") {
        change_menu_state();
    };
};

var tl_open = gsap.timeline({paused: true})
tl_open.set(".menu-container", {display: "block"})
.add("start_menu")
.to("menu-text", {opacity: 0, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-2", {width: 0, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-1", {rotation: -45, transformOrigin: "right top", width: 30, delay: 0.3, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-3", {rotation: 45, transformOrigin: "right bottom", width: 30, delay: 0.3, ease: Power2.easeInOut()}, "start_menu")
.fromTo(".menu-container-part-1", {height: 0}, {height: 0.45*window.innerHeight}, "start_menu")
.to(".menu-container", {backgroundColor: "rgba(0,0,0,0.532)", ease: Power2.easeInOut()}, "start_menu")
.to(".menu-1", {opacity: 1, y: 20, duration: 0.5, stagger: 0.05, ease: Power2.easeInOut()})
.to(".menu-2", {opacity: 1, y: 20, duration: 0.5, stagger: 0.05, delay: -0.5, ease: Power2.easeInOut()})
.to(".menu-3", {opacity: 1, y: 20, duration: 0.5, stagger: 0.05, delay: -0.2, ease: Power2.easeInOut()})
.to(".menu-4", {opacity: 1, y: 20, duration: 0.5, stagger: 0.05, delay: -0.2, ease: Power2.easeInOut()})

let menu_state = false
let menu_state_timer = false
function change_menu_state() {
    menu_state = !menu_state
    if (menu_state) {
        disableScroll()
        if ((device == "laptop") || (device == "laptop large")) {
            tl_open.duration(1.5)
            tl_open.play()
            get_pressed()
        }
        else {
            document.querySelector("#phone_menu").style.cssText = "display: block"
            open_phone_menu()
        }
    }
    else {
        if ((device == "laptop") || (device == "laptop large")){
            tl_open.duration(1)
            tl_open.reverse()
            delete_pressed()
            menu_state_timer = !menu_state_timer
            setTimeout(() => {
                enableScroll()
                menu_state_timer = !menu_state_timer
            }, 800)
        }
        else {
            close_phone_menu()
            menu_state_timer = !menu_state_timer
            setTimeout(() => {
                enableScroll()
                menu_state_timer = !menu_state_timer
                document.querySelector("#phone_menu").style.cssText = "display: none";
            }, tl_phone.duration() * 500)
        }
    }
};

let tl_phone = gsap.timeline({paused: true});
tl_phone.add("start_menu")
.to("menu-text", {opacity: 0, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-2", {width: 0, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-1", {rotation: -45, transformOrigin: "right top", width: 30, delay: 0.3, ease: Power2.easeInOut()}, "start_menu")
.to("#menu-bar-3", {rotation: 45, transformOrigin: "right bottom", width: 30, delay: 0.3, ease: Power2.easeInOut()}, "start_menu")
.to("#phone_menu_background", {duration: 1, delay: 0, width: (window.innerHeight>window.innerWidth)? 2.5*window.innerHeight : 2.5*window.innerWidth, height: (window.innerHeight>window.innerWidth)? 2.5*window.innerHeight : 2.5*window.innerWidth, ease:Power2.easeInOut}, 'start_menu')
.to(".main_thema", {opacity: 1, x: -20, duration: 0.3, stagger: 0.2, ease: Power2.easeInOut()})

let tl_phone_0 = gsap.timeline({paused: true})
tl_phone_0.add("start")
.set("#thema_1_child", {display: "block"})
.to("#thema_1_child", {height: 190, ease: Power2.easeInOut()})
.to("#option_1_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_2_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_3_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_4_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_5_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_6_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_7_child_thema_1", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})


let tl_phone_1 = gsap.timeline({paused: true})
tl_phone_1.add("start")
.set("#thema_2_child", {display: "block"})
.to("#thema_2_child", {height: 80})
.to("#option_1_child_thema_2", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_2_child_thema_2", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_3_child_thema_2", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})

let tl_phone_2 = gsap.timeline({paused: true})
tl_phone_2.add("start")
.set("#thema_3_child", {display: "block"})
.to("#thema_3_child", {height: 60, ease: Power2.easeInOut()})
.to("#option_1_child_thema_3", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})
.to("#option_2_child_thema_3", {opacity: 1, duration: 0.2, x: -20, delay: -0.1, ease: Power2.easeInOut()})

document.getElementById("thema_1").addEventListener("click", () => {
    change_state_phone_fall(0)
})
document.getElementById("thema_2").addEventListener("click", () => {
    change_state_phone_fall(1)
})
document.getElementById("thema_3").addEventListener("click", () => {
    change_state_phone_fall(2)
})

function open_phone_menu() {
    tl_phone.duration(1.5)
    tl_phone.play();
    gsap.set("#phone_menu_container", {display: 'block'});
};

var state_phone = [false, false, false]
function change_state_phone_fall(n) {
    if (n==0) {
        tl_phone_1.reverse()
        tl_phone_2.reverse()
        if (state_phone[n] == false) {
            tl_phone_0.play()
        }
        else {
            tl_phone_0.reverse()
        }
        state_phone[1] = false
        state_phone[2] = false
    }
    if (n==1) {
        tl_phone_0.reverse()
        tl_phone_2.reverse()
        if (state_phone[n] == false) {
            tl_phone_1.play()
        }
        else {
            tl_phone_1.reverse()
        }
        state_phone[0] = false
        state_phone[2] = false
    }
    if (n==2) {
        tl_phone_0.reverse()
        tl_phone_1.reverse()
        if (state_phone[n] == false) {
            tl_phone_2.play()
        }
        else {
            tl_phone_2.reverse()
        }
        state_phone[0] = false
        state_phone[1] = false
    }
    state_phone[n] = !state_phone[n]
}
function close_phone_menu() {
    var duration = 0;
    if (state_phone[0]) {
        tl_phone_0.reverse().progress(0.5)
        duration= tl_phone_0.duration() * 0.5
    }
    if (state_phone[1]) {
        tl_phone_1.reverse().progress(0.5)
        duration= tl_phone_1.duration() * 0.5
    }
    if (state_phone[2]) {
        tl_phone_2.reverse().progress(0.5)
        duration= tl_phone_2.duration() * 0.5
    }
    state_phone = [false, false, false]
    setTimeout(() => {
        tl_phone.duration(1)
        tl_phone.reverse();
    }, duration*1000)
}

let load_date = Date.now()
ScrollTrigger.create({
    start: "top center",
    end: "bottom center",
    onUpdate: self => {
        if ((Date.now() - load_date) < 250) {
            return;
        }
        else if ((menu_state) || menu_state_timer) {
            return;
        }
        else {
            if (self.direction == 1) {
                gsap.to("header", {top: -100, duration: 0.4, ease: Power2.easeOut()})
            }
            else if(self.direction == -1) {
                gsap.to("header", {top: 0, duration: 0.4, ease: Power2.easeOut()})
            }
        }
    }
})

let tl_intro = gsap.timeline({paused: true})
tl_intro.to(".logo-intro", {y: -20, opacity: 1, duration: 0.8, ease: Power2.easeInOut()})
.to(".text-intro", {y: "0%", stagger: 0.3, duration: 0.5, delay: -0.5, ease: Power2.easeInOut()})
.to(".container-intro-2", {y: "-200%", duration: 2, delay:2, ease: Power2.easeInOut()})
.set(".container-intro-1", {opacity: 0, delay: -1.4})
.fromTo(".intro-class", {opacity: 0}, {opacity: 1})
setTimeout(() => {
    tl_intro.play()
}, 500)
disableScroll()
setTimeout(() => {
    document.querySelector(".intro").style.cssText = "display: none;";
    enableScroll()
}, tl_intro.duration() * 1000 + 500)
