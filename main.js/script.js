<script>
    const proyectos = [
    {
        titulo: "Sistema de Biblioteca",
    imagen: "./im",
    descripcionLarga: "Sistema completo para administrar una biblioteca. Permite registrar libros, gestionar usuarios, registrar prestamos y devoluciones. Implementa CRUD completo con Java y conexion a base de datos MySQL mediante JDBC.",
    tags: ["Java", "MySQL", "JDBC", "HTML", "CSS"],
    codigo: "https://github.com/TU_USUARIO/repo1",
    demo: "#"
        },
    {
        titulo: "Gestor de Tareas",
    imagen: "./img/proyecto2.png",
    descripcionLarga: "Aplicacion para organizar tareas del dia a dia. Permite crear, editar, marcar como completadas y eliminar tareas. Usa localStorage para persistencia de datos.",
    tags: ["HTML", "CSS", "JavaScript"],
    codigo: "https://github.com/TU_USUARIO/repo2",
    demo: "#"
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
    p.tags.forEach(function(tag) {
            const span = document.createElement("span");
    span.textContent = tag;
    tagsContenedor.appendChild(span);
        });
    }

    document.getElementById("year").textContent =
       new Date().getFullYear();
</script>