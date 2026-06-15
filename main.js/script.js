
const proyectos = [
    {
        titulo: "Tienda de Kung Fu",
        imagen: "./img/tiendakungfu.jpg",
        descripcionLarga: "Sitio web promocional para una tienda de artículos de Kung Fu, con enfoque en diseño responsivo y experiencia de usuario.",
        tags: ["HTML", "CSS", "JavaScript"],
        codigo: "https://github.com/Elisa-Mendez/kungfushop-Hackathon.git",
        demo: "https://alanhercas.github.io/kungfushop-Hackathon/"
    },
    {
        titulo: "Mini store",
        imagen: "./img/minitienda.jpg",
        descripcionLarga: "Proyecto de práctica enfocado en el desarrollo de una mini tienda online, aplicando conceptos de maquetación web, diseño responsivo y experiencia de usuario.",
        tags: ["HTML", "CSS"],
        codigo: "https://github.com/Elisa-Mendez/ministore.git",
        demo: "https://elisa-mendez.github.io/ministore/"
    },
    {
        titulo: "Mini cafeteria",
        imagen: "./img/cafeteria.jpg",
        descripcionLarga: "Landing page para una cafetería desarrollada como práctica frontend, enfocada en maquetación web, diseño responsivo y presentación visual de la marca.",
        tags: ["HTML", "CSS"],
        codigo: "https://github.com/Elisa-Mendez/cafeteriaDos.git",
        demo: "https://elisa-mendez.github.io/cafeteriaDos/"
    }
];

function cargarModal(indice) {
    const p = proyectos[indice];
    document.getElementById("modal-img").src = p.imagen;
    document.getElementById("modal-titulo").textContent = p.titulo;
    document.getElementById("modal-descripcion").textContent = p.descripcionLarga;
    document.getElementById("modal-codigo").href = p.codigo;
    document.getElementById("modal-demo").href = p.demo;

    const tagsContenedor = document.getElementById("modal-tags");
    tagsContenedor.innerHTML = "";
    p.tags.forEach(function (tag) {
        const span = document.createElement("span");
        span.textContent = tag;
        tagsContenedor.appendChild(span);
    });
}

document.getElementById("year").textContent =
    new Date().getFullYear();

const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("activo");
    hamburguesa.classList.toggle("activo");
});


document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("activo");
        hamburguesa.classList.remove("activo");
    });
});

