document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalText = document.getElementById("modalText");
    const modalGallery = document.getElementById("modalGallery");

    const projectsData = {
     proyecto1: {
    title: "Nombre de la cuenta o cliente",
    category: "Redes sociales",
    text: "Este proyecto se trabajó para una cuenta que buscaba mejorar su presencia visual en redes sociales. Se diseñaron piezas gráficas con una línea más ordenada, profesional y coherente con la marca.",
    images: [
        "Assets/icons/proyecto1/foto1.JPG",
        "Assets/icons/proyecto1/foto2.png",
        "Assets/icons/proyecto1/foto3.png",
        "Assets/icons/proyecto1/foto4.png"
    ]
},
    
        proyecto2: {
            title: "Campaña para redes sociales",
            category: "Social Media",
            text: "La marca necesitaba contenido visual para Instagram. Se diseñaron posts, historias y piezas digitales con una estética limpia, buscando mejorar la presencia visual y mantener una comunicación más ordenada.",
            images: ["Assets/icons/proyecto2/foto1.png", 
                "Assets/icons/proyecto2/foto2.png", 
                "Assets/icons/proyecto2/foto3.png",
                "Assets/icons/proyecto2/foto4.png"
]
        },

       proyecto3: {
    title: "Nombre de la cuenta",
    category: "Redes sociales",
    text: "Descripción más completa del proyecto, qué buscaba la marca, qué trabajaste y qué se logró visualmente.",
    images: [
        "Assets/icons/proyecto3/foto1.png",
        "Assets/icons/proyecto3/foto2.png",
        "Assets/icons/proyecto3/foto3.png",
        "Assets/icons/proyecto3/foto4.png"
    ]
},
        

        proyecto4: {
            title: "Diseño de campaña publicitaria",
            category: "Publicidad",
            text: "Este proyecto buscaba promocionar un producto o servicio de manera directa y atractiva. Se trabajó la jerarquía visual, el uso de color y la composición para captar la atención rápidamente.",
             images: [
        "Assets/icons/proyecto4/foto1.png",
        "Assets/icons/proyecto4/foto2.png",
        "Assets/icons/proyecto4/foto3.png",
        "Assets/icons/proyecto4/foto4.jpg"
    ]
        },

        proyecto5: {
            title: "Diseño de empaque",
            category: "Packaging",
            text: "Se desarrolló una propuesta visual para empaque, cuidando que el diseño fuera atractivo, limpio y coherente con la personalidad de la marca. El enfoque fue lograr una presentación más profesional del producto.",
             images: [
        "Assets/icons/proyecto5/foto1.png",
        "Assets/icons/proyecto5/foto2.png",
        "Assets/icons/proyecto5/foto3.png",
        "Assets/icons/proyecto5/foto4.png"
    ]
        },

        proyecto6: {
            title: "Landing visual para marca",
            category: "Diseño digital",
            text: "Este proyecto aplicó diseño gráfico a una experiencia digital. Se trabajó la estructura visual, los bloques de contenido y una estética moderna para presentar la marca de forma clara y funcional.",
              images: [
        "Assets/icons/proyecto6/foto1.png",
        "Assets/icons/proyecto6/foto2.png",
        "Assets/icons/proyecto6/foto3.png",
        "Assets/icons/proyecto6/foto4.png"
            ]
        },
        proyecto7: {
    title: "Sistema de estudiantes",
    category: "Programación",
    text: "Proyecto desarrollado en Java, enfocado en la gestión de datos de estudiantes y una estructura organizada para practicar lógica, clases y manejo de información."
},

proyecto8: {
    title: "API REST",
    category: "Programación",
    text: "Backend creado para manejar productos, clientes y operaciones básicas. El objetivo fue construir una estructura funcional para consultar, guardar y administrar información."
},

proyecto9: {
    title: "Portafolio web",
    category: "Programación",
    text: "Sitio web desarrollado con HTML, CSS y JavaScript. Este proyecto muestra una estructura limpia, filtros de proyectos y una vista expandida para presentar trabajos."
},
proyecto10: {
    title: "Identidad para restaurante",
    category: "Branding",
    text: "Proyecto de identidad visual para una marca gastronómica. Se trabajó una línea gráfica limpia, colores, estilo visual y aplicaciones básicas para comunicar una imagen más profesional."
},

proyecto11: {
    title: "Marca personal",
    category: "Branding",
    text: "Desarrollo de una propuesta visual para una marca personal. El objetivo fue crear una imagen coherente, profesional y adaptable a redes sociales y materiales digitales."
},

proyecto12: {
    title: "Flyer promocional",
    category: "Flyers",
    text: "Diseño de flyer para promocionar un servicio o producto. Se trabajó la jerarquía de texto, composición visual y llamado a la acción para comunicar el mensaje de forma rápida."
},

proyecto13: {
    title: "Flyer para evento",
    category: "Flyers",
    text: "Pieza gráfica creada para anunciar un evento. El enfoque fue organizar la información principal, mantener impacto visual y facilitar la lectura del contenido."
},

proyecto14: {
    title: "Cuenta de restaurante",
    category: "Redes sociales",
    text: "Proyecto de contenido visual para una cuenta gastronómica. Se trabajaron publicaciones, piezas promocionales y diseños enfocados en mostrar productos de forma atractiva y clara.",
    images: [
        "Assets/icons/proyecto14/foto1.png",
        "Assets/icons/proyecto14/foto2.png",
        "Assets/icons/proyecto14/foto3.jpg",
        "Assets/icons/proyecto14/foto4.png"
    ]
},

proyecto15: {
    title: "Cuenta de servicios",
    category: "Redes sociales",
    text: "Diseño de contenido para una marca de servicios. El objetivo fue comunicar beneficios, generar confianza visual y mantener una línea gráfica profesional.",
     images: [
        "Assets/icons/proyecto15/foto1.png",
        "Assets/icons/proyecto15/foto2.png",
        "Assets/icons/proyecto15/foto3.png",
        "Assets/icons/proyecto15/foto4.png"
    ]
},

proyecto16: {
    title: "Cuenta comercial",
    category: "Redes sociales",
    text: "Creación de piezas gráficas para una cuenta comercial. Se diseñaron posts, flyers digitales y contenido promocional para mejorar la presencia en redes.",
    images: [
        "Assets/icons/proyecto16/foto1.png",
        "Assets/icons/proyecto16/foto2.png",
        "Assets/icons/proyecto16/foto3.png",
        "Assets/icons/proyecto16/fotos4.png"
    ]
},

proyecto17: {
    title: "Cuenta institucional",
    category: "Redes sociales",
    text: "Proyecto enfocado en ordenar la comunicación visual de una cuenta institucional. Se trabajaron diseños más limpios, profesionales y alineados a la marca.",
    images: [
        "Assets/icons/proyecto17/foto1.png",
        "Assets/icons/proyecto17/foto2.png",
        "Assets/icons/proyecto17/foto3.png",
        "Assets/icons/proyecto17/foto4.png"
    ]
},
proyecto18: {
    title: "Identidad para emprendimiento",
    category: "Branding",
    text: "Proyecto de identidad visual para un emprendimiento. Se trabajó una línea gráfica más clara, colores, composición y piezas base para presentar la marca de forma más profesional."
},

proyecto19: {
    title: "Rebranding de marca",
    category: "Branding",
    text: "Renovación visual enfocada en modernizar la imagen de una marca. El objetivo fue unificar la comunicación gráfica y lograr una presencia más limpia, actual y coherente."
},
proyecto20: {
    title: "Flyer informativo",
    category: "Flyers",
    text: "Diseño de flyer informativo para comunicar datos importantes de manera clara, ordenada y visualmente atractiva. Se trabajó la jerarquía de texto, composición y legibilidad."
},

proyecto21: {
    title: "Flyer comercial",
    category: "Flyers",
    text: "Pieza gráfica enfocada en promocionar servicios, productos o beneficios de una marca. El objetivo fue captar atención rápidamente y comunicar el mensaje principal con claridad."
},
proyecto22: {
    title: "Nombre de la cuenta importante",
    category: "Redes sociales",
    text: "Proyecto trabajado para una cuenta importante de redes sociales. Se desarrollaron piezas visuales enfocadas en mejorar la presencia digital, mantener una línea gráfica coherente y comunicar mejor los servicios o productos de la marca.",
     images: [
        "Assets/icons/proyecto22/foto1.png",
        "Assets/icons/proyecto22/foto2.png",
        "Assets/icons/proyecto22/foto3.jpg",
        "Assets/icons/proyecto22/foto4.png"
    ]
},
};
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project");
            const project = projectsData[projectId];

            if (!project) {
                console.log("No existe información para este proyecto:", projectId);
                return;
            }

            modalTitle.textContent = project.title;
            modalCategory.textContent = project.category;
            modalText.textContent = project.text;
            modalGallery.innerHTML = "";

if (project.images) {
    project.images.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = project.title;
        img.classList.add("gallery-image");

        modalGallery.appendChild(img);
    });
}

            projectModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    closeModal.addEventListener("click", () => {
        projectModal.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    projectModal.addEventListener("click", (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            projectModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        projectModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

/* FILTROS DE PROYECTOS */
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (filter === "todos" || filter === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

});
    
