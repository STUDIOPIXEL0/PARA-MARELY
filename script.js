
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

const frases = [
    "Me encanta tu sonrisa. ♡",
    "Me gusta mucho pasar tiempo contigo.",
    "A veces no sé qué decirte, pero siempre tengo ganas de hablar contigo",
    "¿Ya te dije lo bonita que eres? creo que si, pero nunca es suficiente",
    "Eres alguien muy especial para mí",
    "Si supieras cuánto me gusta abrazarte...",
    "Te quiero papu, SIX SEVEN"
];

let indice = 0;

boton.addEventListener("click", function() {

    mensaje.textContent = frases[indice];

    indice++;

    if (indice >= frases.length) {
        indice = 0;
    }

});

boton.addEventListener("click", function() {

    mensaje.classList.remove("visible");

    setTimeout(function() {
        mensaje.textContent = frases[indice];
        mensaje.classList.add("visible");

        indice++;

        if (indice >= frases.length) {
            indice = 0;
        }
    }, 200);

});

const botonFinal = document.getElementById("botonFinal");
const mensajeFinal = document.getElementById("mensajeFinal");

botonFinal.addEventListener("click", function() {

    mensajeFinal.textContent =
        "Un abrazo? XD, te quiero mucho Marely. ♡";

    botonFinal.textContent = "♡";

    botonFinal.disabled = true;

});

document.addEventListener("click", function(event) {

    const corazon = document.createElement("span");

    corazon.textContent = "♡";

    corazon.style.position = "fixed";
    corazon.style.left = event.clientX + "px";
    corazon.style.top = event.clientY + "px";
    corazon.style.color = "#e0baff";
    corazon.style.fontSize = "30px";
    corazon.style.pointerEvents = "none";
    corazon.style.zIndex = "9999";
    corazon.style.textShadow = "0 0 12px #c69aff";

    document.body.appendChild(corazon);

    corazon.animate([
        {
            transform: "translateY(0) scale(0.5)",
            opacity: 1
        },
        {
            transform: "translateY(-100px) scale(1.5)",
            opacity: 0
        }
    ], {
        duration: 1000,
        easing: "ease-out"
    });

    setTimeout(function() {
        corazon.remove();
    }, 1000);

});


const creeper = document.getElementById("creeperSorpresa");

function sorpresaCreeper() {
    creeper.classList.add("aparecer");

    setTimeout(function() {
        creeper.classList.remove("aparecer");
    }, 4000);
}

function programarCreeper() {
    const tiempo = Math.random() * 20000 + 20000;

    setTimeout(function() {
        sorpresaCreeper();
        programarCreeper();
    }, tiempo);
}

programarCreeper(10);
