// Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.04)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// Active Navbar

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

    if(link.href===window.location.href){

        link.classList.add("active");

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Button Click Animation

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(0.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

    });

});


// Fade In Effect

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .6s ease";