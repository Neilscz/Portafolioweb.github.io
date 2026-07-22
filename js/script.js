document.addEventListener("DOMContentLoaded", () => {
    const projectsGrid = document.getElementById("projectsGrid") || document.querySelector(".projects-grid");

    const projectModal = document.getElementById("projectModal");
    const closeModal = document.getElementById("closeModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalText = document.getElementById("modalText");
    const modalGallery = document.getElementById("modalGallery");
    const modalLink = document.getElementById("modalLink");

    const projectsData = {
        proyecto1: {
            title: "Nury Ripoll Spa",
            category: "Redes sociales / Branding",
            filter: "redes",
            cover: "Assets/icons/proyecto1/cover.png",
            shortText: "Rebranding, contenido para redes sociales y materiales corporativos.",
            text: "Nury Ripoll Spa necesitaba renovar completamente su presencia digital y física para proyectar una imagen más profesional y coherente en Facebook, Instagram y materiales impresos. Desarrollé el rebranding completo de la marca, incluyendo nombre, logotipo y línea gráfica, además del diseño de pancartas, stands publicitarios, hojas membretadas y contenido para redes sociales. Durante el período del 13 de junio de 2025 al 30 de enero de 2026, el proyecto ayudó a fortalecer el posicionamiento de la marca, mejorar su presentación visual y apoyar la captación de nuevos clientes.",
            link: "https://www.instagram.com/nury.ripoll/",
            images: [
                "Assets/icons/proyecto1/foto1.JPG",
                "Assets/icons/proyecto1/foto2.png",
                "Assets/icons/proyecto1/foto3.png",
                "Assets/icons/proyecto1/foto4.png"
            ]
        },

        proyecto2: {
            title: "AG Insurance",
            category: "Redes sociales / Branding",
            filter: "redes",
            cover: "Assets/icons/proyecto2/cover1.png",
            shortText: "Branding y contenido digital para una agencia de seguros.",
            text: "AG Insurance necesitaba construir una identidad visual desde cero para promocionar sus servicios y fortalecer su presencia en redes sociales. Desarrollé su branding, línea gráfica y contenido gráfico, estableciendo una imagen profesional y coherente para la comunicación de la aseguradora. La satisfacción con el servicio permitió que posteriormente se me confiaran otras cuentas relacionadas con nuevos proyectos.",
            link: "https://www.instagram.com/aginsurance__/",
            images: [
                "Assets/icons/proyecto2/foto1.PNG",
                "Assets/icons/proyecto2/foto2.png",
                "Assets/icons/proyecto2/foto3.png",
                "Assets/icons/proyecto2/foto4.png"
            ]
        },

        proyecto3: {
            title: "SkyDreams Global Travel",
            category: "Redes sociales / Branding",
            filter: "redes",
            cover: "Assets/icons/proyecto3/cover.jpeg",
            shortText: "Rebranding y promoción digital para una agencia de viajes.",
            text: "SkyDreams Global Travel necesitaba renovar su imagen y presentar su catálogo de viajes, promociones y servicios de una forma más atractiva. Desarrollé una nueva identidad gráfica y contenido para Facebook e Instagram, orientado a mejorar la presentación visual de sus ofertas. Del 15 de mayo de 2024 al 19 de marzo de 2026, el proyecto contribuyó a generar mayor interés, consultas y actividad en sus redes sociales.",
            link: "https://www.instagram.com/skydreamsviajes/",
            images: [
                "Assets/icons/proyecto3/foto1.PNG",
                "Assets/icons/proyecto3/foto2.png",
                "Assets/icons/proyecto3/foto3.png",
                "Assets/icons/proyecto3/foto4.png"
            ]
        },

        proyecto4: {
            title: "Aye Global Traveling",
            category: "Redes sociales / Diseño publicitario",
            filter: "redes",
            cover: "Assets/icons/proyecto4/cover.png",
            shortText: "Contenido digital y publicidad para viajes y eventos.",
            text: "Aye Global Traveling buscaba ampliar su audiencia y promocionar su catálogo de viajes y eventos mediante una comunicación visual atractiva. Diseñé contenido para Facebook, Instagram y TikTok, además de pancartas y stands publicitarios con un estilo llamativo, limpio y enfocado en la promoción de sus servicios. Del 22 de diciembre de 2025 al 1 de mayo de 2026, los reels y piezas promocionales ayudaron a incrementar el alcance y la visibilidad de la marca.",
            link: "https://www.instagram.com/ayeglobaltravel/",
            images: [
                "Assets/icons/proyecto4/foto1.PNG",
                "Assets/icons/proyecto4/foto2.png",
                "Assets/icons/proyecto4/foto3.png",
                "Assets/icons/proyecto4/foto4.jpg"
            ]
        },

        proyecto5: {
            title: "Asegurándote GT",
            category: "Redes sociales / Identidad visual",
            filter: "redes",
            cover: "Assets/icons/proyecto5/cover.png",
            shortText: "Gestión de contenido para una agencia independiente de seguros.",
            text: "Asegurándote GT buscaba llegar a nuevos clientes y mantener una presencia activa, profesional y confiable en Facebook. Actualmente gestiono su contenido y desarrollo una identidad gráfica consistente para comunicar sus servicios de forma clara, educativa y visualmente ordenada. El proyecto se enfoca en mantener actualizada la página, fortalecer el reconocimiento de la agencia y aumentar progresivamente su alcance.",
            link: "https://www.facebook.com/Asegurandotegt",
            images: [
                "Assets/icons/proyecto5/foto1.PNG",
                "Assets/icons/proyecto5/foto2.png",
                "Assets/icons/proyecto5/foto3.png",
                "Assets/icons/proyecto5/foto4.png"
            ]
        },

        proyecto6: {
            title: "Serproan",
            category: "Redes sociales / Branding",
            filter: "redes",
            cover: "Assets/icons/proyecto6/cover.png",
            shortText: "Branding y promoción digital para servicios profesionales.",
            text: "Serproan necesitaba construir una identidad visual desde cero para promocionar sus servicios legales, atraer nuevos clientes y aumentar las visitas a su oficina. Desarrollé su branding y contenido para Facebook, Instagram y TikTok, incluyendo piezas promocionales y material gráfico para conferencias virtuales. El proyecto fortaleció su presentación profesional en redes sociales y cumplió satisfactoriamente con los objetivos de comunicación de la marca.",
            link: "https://www.instagram.com/p/DS8gTSHgNyj/",
            images: [
                "Assets/icons/proyecto6/foto1.PNG",
                "Assets/icons/proyecto6/foto2.png",
                "Assets/icons/proyecto6/foto3.png",
                "Assets/icons/proyecto6/foto4.png"
            ]
        },

        proyecto7: {
            title: "Sistema gestor de registros",
            category: "Programación / C#",
            filter: "programacion",
            cover: "Assets/icons/proyecto7/cover.png",
            shortText: "Sistema de escritorio en C# para administrar registros con archivos TXT.",
            text: "Sistema de escritorio desarrollado como proyecto final universitario, orientado a la creación, almacenamiento y administración de registros mediante archivos de texto. El objetivo fue aplicar conocimientos de programación estructurada, lógica de sistemas y manejo de archivos sin utilizar una base de datos convencional. El sistema fue desarrollado en C# con .NET, utilizando archivos TXT como medio de almacenamiento persistente e integrando pseudocódigo, diagramas de flujo e interfaces funcionales.",
            link: "https://github.com/Mario-Moreiracz/gestor-de-registros",
            images: [
                "Assets/icons/proyecto7/foto1.png",
                "Assets/icons/proyecto7/foto2.png",
                "Assets/icons/proyecto7/foto3.png",
                "Assets/icons/proyecto7/foto4.png"
            ]
        },

        proyecto8: {
            title: "Sitio web con Jekyll",
            category: "Programación / Web",
            filter: "programacion",
            cover: "Assets/icons/proyecto8/cover.png",
            shortText: "Sitio web estático creado con Jekyll, Ruby y GitHub Pages.",
            text: "Sitio web desarrollado como proyecto final universitario desde un entorno Linux ejecutado en Windows. El proyecto se enfocó en el uso de generadores de sitios estáticos, control de versiones, manejo de terminal y publicación mediante GitHub Pages. Se trabajó con Jekyll, Ruby, Git y GitHub, permitiendo adquirir experiencia práctica en configuración de frameworks, repositorios remotos y despliegue web.",
            link: "https://mario-moreiracz.github.io/Jekyll-Examenfinal/",
            images: [
                "Assets/icons/proyecto8/foto1.png",
                "Assets/icons/proyecto8/foto2.png",
                "Assets/icons/proyecto8/foto3.png",
                "Assets/icons/proyecto8/foto4.png"
            ]
        },

        proyecto9: {
            title: "Portafolio web personal",
            category: "Programación / Diseño web",
            filter: "programacion",
            cover: "Assets/icons/proyecto9/cover.png",
            shortText: "Portafolio web para presentar proyectos profesionales y universitarios.",
            text: "Diseño y desarrollo de un portafolio web personal creado para presentar proyectos profesionales, universitarios y trabajos recientes dentro de currículums, propuestas comerciales y procesos de selección. El sitio fue conceptualizado desde el diseño visual y desarrollado con HTML5, CSS3 y JavaScript, integrando secciones de presentación personal, herramientas, categorías de proyectos, tarjetas interactivas, contenido multimedia y métodos de contacto.",
            link: "https://neilscz.github.io/Portafolioweb.github.io/",
            images: [
                "Assets/icons/proyecto9/foto1.png",
                "Assets/icons/proyecto9/foto2.png",
                "Assets/icons/proyecto9/foto3.png",
                "Assets/icons/proyecto9/foto4.png"
            ]
        },

        proyecto10: {
            title: "Green Fits",
            category: "Branding / Diseño editorial",
            filter: "branding",
            cover: "Assets/icons/proyecto10/cover.png",
            shortText: "Branding integral para una cadena de restaurantes saludables.",
            text: "Green Fits fue un proyecto integral de construcción de marca para una cadena de restaurantes enfocada en comida saludable. El trabajo inició desde la conceptualización del nombre y la identidad visual, extendiéndose hacia menús, flyers, trípticos, materiales promocionales y piezas comerciales. La marca logró establecer una identidad visual definida y adaptable a distintos formatos, apoyando su presentación en escuelas, establecimientos y centros comerciales en México. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto10/foto1.png",
                "Assets/icons/proyecto10/foto2.png",
                "Assets/icons/proyecto10/foto3.png",
                "Assets/icons/proyecto10/foto4.png"
            ]
        },

        proyecto11: {
            title: "Lucca 10",
            category: "Branding / Rebranding",
            filter: "branding",
            cover: "Assets/icons/proyecto11/cover.png",
            shortText: "Rediseño de identidad visual y menús para restaurante italiano.",
            text: "Proyecto de rediseño de identidad visual para un restaurante especializado en comida italiana y pizzas. El objetivo fue modernizar la imagen de la marca y actualizar el diseño de sus menús, conservando la esencia del restaurante pero con una presentación más actual, coherente y profesional. La propuesta fue aprobada e implementada dentro del establecimiento, convirtiéndose en la base visual utilizada para unificar su comunicación.",
            link: "https://tecfood.tec.mx/es/ciudad-de-mexico/luccadiez",
            images: [
                "Assets/icons/proyecto11/foto1.png",
                "Assets/icons/proyecto11/foto2.png",
                "Assets/icons/proyecto11/foto3.png",
                "Assets/icons/proyecto11/foto4.png"
            ]
        },

        proyecto12: {
            title: "Gamos",
            category: "Flyers / Diseño deportivo",
            filter: "flyers",
            cover: "Assets/icons/proyecto12/cover.png",
            shortText: "Flyers deportivos y contenido visual para equipo de fútbol americano.",
            text: "Desarrollo de piezas gráficas y contenido para redes sociales de Gamos, equipo de fútbol americano con presencia en Facebook y actividades deportivas en Cuemanco, México. Se diseñaron flyers para partidos, eventos, promociones y calendarios de temporada, además de piezas visuales para su área de cafetería. El contenido permitió mejorar la presentación de sus eventos y mantener una comunicación más organizada con jugadores, seguidores y asistentes.",
            link: "https://www.facebook.com/profile.php?id=100048134152144",
            images: [
                "Assets/icons/proyecto12/foto1.png",
                "Assets/icons/proyecto12/foto2.png",
                "Assets/icons/proyecto12/foto3.png",
                "Assets/icons/proyecto12/foto4.png"
            ]
        },

        proyecto13: {
            title: "Federación Nacional de Hockey",
            category: "Flyers / Diseño deportivo",
            filter: "flyers",
            cover: "Assets/icons/proyecto13/cover.png",
            shortText: "Contenido gráfico para eventos y partidos de hockey sobre hielo.",
            text: "Desarrollo de contenido gráfico y apoyo visual para las redes sociales de la Federación Nacional de Hockey sobre Hielo de México. Se diseñaron piezas para anunciar eventos, fechas de partidos, enfrentamientos y participación de equipos. También se desarrollaron identidades visuales específicas para algunos eventos, acompañando gráficamente distintas etapas de competencia y facilitando la comunicación con jugadores, equipos y aficionados. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto13/foto1.png",
                "Assets/icons/proyecto13/foto2.png",
                "Assets/icons/proyecto13/foto3.png",
                "Assets/icons/proyecto13/foto4.png"
            ]
        },

        proyecto14: {
            title: "DentaLeón",
            category: "Redes sociales / Rebranding",
            filter: "redes",
            cover: "Assets/icons/proyecto14/cover.png",
            shortText: "Rebranding y contenido semanal para servicios odontológicos.",
            text: "DentaLeón necesitaba renovar la presentación de sus servicios odontológicos y proyectar una imagen más profesional en redes sociales. Realicé un rebranding visual y desarrollé contenido semanal para Facebook, Instagram y TikTok, manteniendo una comunicación gráfica constante y ordenada. El proyecto permitió conservar activa la página, mejorar la organización del contenido y fortalecer su presencia digital.",
            link: "https://www.instagram.com/cdeo_alejandraalvarez/",
            images: [
                "Assets/icons/proyecto14/foto1.PNG",
                "Assets/icons/proyecto14/foto2.png",
                "Assets/icons/proyecto14/foto3.jpg",
                "Assets/icons/proyecto14/foto4.png"
            ]
        },

        proyecto15: {
            title: "Dra. Estefany BR",
            category: "Redes sociales / Branding",
            filter: "redes",
            cover: "Assets/icons/proyecto15/cover.png",
            shortText: "Identidad visual y contenido audiovisual para una clínica dental.",
            text: "La Dra. Estefany BR necesitaba desarrollar su marca desde cero y mantener una presencia constante en redes sociales para atraer nuevos pacientes. Creé su logotipo, identidad gráfica y contenido para Facebook, Instagram y TikTok, incluyendo reels y videos promocionales. Del 14 de octubre de 2025 al 1 de mayo de 2026, el contenido generó mayor visibilidad, interacción con el público e interés por visitar la clínica.",
            link: "https://www.instagram.com/dra.estefanybr/",
            images: [
                "Assets/icons/proyecto15/foto1.PNG",
                "Assets/icons/proyecto15/foto2.png",
                "Assets/icons/proyecto15/foto3.png",
                "Assets/icons/proyecto15/foto4.png"
            ]
        },

        proyecto16: {
            title: "Metic Studio Dental",
            category: "Redes sociales / Rebranding",
            filter: "redes",
            cover: "Assets/icons/proyecto16/cover.png",
            shortText: "Renovación visual y contenido para un estudio dental.",
            text: "Metic Studio Dental buscaba renovar su imagen y posicionarse de manera más profesional en Instagram. Realicé una actualización de su identidad visual y desarrollé contenido constante para mantener activo, organizado y visualmente coherente su feed. Del 28 de octubre de 2025 al 13 de abril de 2026, el proyecto permitió fortalecer la presentación digital del estudio y ampliar la exposición de sus servicios.",
            link: "https://www.instagram.com/metic.studiodent/",
            images: [
                "Assets/icons/proyecto16/foto1.PNG",
                "Assets/icons/proyecto16/foto2.png",
                "Assets/icons/proyecto16/foto3.png",
                "Assets/icons/proyecto16/foto4.png"
            ]
        },

        proyecto17: {
            title: "Diablo Narvarte",
            category: "Redes sociales / Diseño publicitario",
            filter: "redes",
            cover: "Assets/icons/proyecto17/cover.PNG",
            shortText: "Contenido, menús y publicidad para una heladería.",
            text: "Diablo Narvarte buscaba promocionar sus productos y atraer más público a su sucursal mediante redes sociales y materiales publicitarios. Desarrollé contenido para Instagram y TikTok, además de piezas gráficas, pancartas y un menú diseñado desde cero, respetando su identidad visual. El trabajo permitió mantener un flujo constante de contenido, generar interacción con el público y fortalecer la visibilidad de la sucursal.",
            link: "https://www.instagram.com/diablo_narvarte/",
            images: [
                "Assets/icons/proyecto17/foto1.PNG",
                "Assets/icons/proyecto17/foto2.png",
                "Assets/icons/proyecto17/foto3.png",
                "Assets/icons/proyecto17/foto4.png"
            ]
        },

        proyecto18: {
            title: "Onori",
            category: "Branding / Dirección de arte",
            filter: "branding",
            cover: "Assets/icons/proyecto18/cover.png",
            shortText: "Propuesta de branding para un nuevo concepto de restaurante.",
            text: "Onori fue una propuesta de branding desarrollada desde cero para un nuevo concepto de restaurante. El proyecto incluyó exploración conceptual, diseño de logotipo, selección tipográfica, paleta cromática, aplicaciones de marca y manual de identidad. El resultado fue una propuesta integral que permitió visualizar el concepto del restaurante y establecer lineamientos claros para futuras aplicaciones en espacios físicos, medios digitales y materiales publicitarios. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto18/foto1.png",
                "Assets/icons/proyecto18/foto2.png",
                "Assets/icons/proyecto18/foto3.png",
                "Assets/icons/proyecto18/foto4.png"
            ]
        },

        proyecto19: {
            title: "Noir Coffee",
            category: "Branding / Diseño minimalista",
            filter: "branding",
            cover: "Assets/icons/proyecto19/cover.png",
            shortText: "Construcción de marca para una cafetería de estética minimalista.",
            text: "Proyecto de construcción de marca para una cafetería conceptualizada bajo una estética minimalista, moderna y elegante. Se trabajó el branding completo desde cero, incluyendo logotipo, paleta de colores, tipografías, elementos gráficos, aplicaciones de marca y manual de identidad. La propuesta permitió establecer una base visual profesional para futuras aplicaciones en empaques, espacios físicos, publicidad y plataformas digitales. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto19/foto1.png",
                "Assets/icons/proyecto19/foto2.png",
                "Assets/icons/proyecto19/foto3.png",
                "Assets/icons/proyecto19/foto4.png"
            ]
        },

        proyecto20: {
            title: "50 Friends",
            category: "Flyers / Diseño gráfico",
            filter: "flyers",
            cover: "Assets/icons/proyecto20/cover.png",
            shortText: "Piezas gráficas y adaptación visual para restaurante italiano.",
            text: "Desarrollo de piezas gráficas específicas para 50 Friends, restaurante especializado en comida italiana. El trabajo consistió en actualizar elementos visuales puntuales y adaptar determinadas secciones de su página web, respetando la identidad de marca previamente establecida. Las piezas desarrolladas conservaron la coherencia visual del restaurante y respondieron a necesidades específicas sin alterar la identidad reconocida por sus clientes. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto20/foto1.png",
                "Assets/icons/proyecto20/foto2.png",
                "Assets/icons/proyecto20/foto3.png",
                "Assets/icons/proyecto20/foto4.png"
            ]
        },

        proyecto21: {
            title: "Proyectos diversos",
            category: "Flyers / Colaboraciones",
            filter: "flyers",
            cover: "Assets/icons/proyecto21/cover.png",
            shortText: "Recopilación de piezas gráficas para negocios y emprendimientos.",
            text: "Recopilación de piezas gráficas y trabajos realizados para pequeños negocios, emprendimientos y clientes con necesidades visuales específicas. Se desarrollaron diseños para redes sociales, viniles publicitarios, flyers, materiales impresos y propuestas de líneas gráficas. Cada pieza fue adaptada al presupuesto, público objetivo, identidad y requerimientos particulares de cada negocio, ampliando la experiencia en adaptación de estilos y soluciones visuales para medios digitales e impresos. Material complementario disponible bajo solicitud profesional.",
            link: "",
            images: [
                "Assets/icons/proyecto21/foto1.png",
                "Assets/icons/proyecto21/foto2.png",
                "Assets/icons/proyecto21/foto3.png",
                "Assets/icons/proyecto21/foto4.jpeg"
            ]
        },

        proyecto22: {
            title: "Imperio de la Lucha Libre",
            category: "Redes sociales / Branding deportivo",
            filter: "redes",
            cover: "Assets/icons/proyecto22/cover.png",
            shortText: "Branding, carteleras y promoción para eventos de lucha libre.",
            text: "Imperio de la Lucha Libre necesitaba construir desde cero la identidad de una promotora dirigida por la familia Canek de México. Desarrollé su branding, línea gráfica, presentación de luchadores y múltiples carteleras con un estilo moderno para promocionar sus eventos. Del 20 de agosto de 2025 al 23 de enero de 2026, el contenido mantuvo activo el feed y ayudó a generar alcance, visualizaciones e interés por sus funciones.",
            link: "https://www.instagram.com/imperio_dela_luchalibre/",
            images: [
                "Assets/icons/proyecto22/foto1.PNG",
                "Assets/icons/proyecto22/foto2.png",
                "Assets/icons/proyecto22/foto3.jpg",
                "Assets/icons/proyecto22/foto4.png"
            ]
        }
    };

    function renderProjects() {
        projectsGrid.innerHTML = "";

        Object.keys(projectsData).forEach(projectId => {
            const project = projectsData[projectId];

            const card = document.createElement("article");
            card.classList.add("project-card");
            card.setAttribute("data-category", project.filter);
            card.setAttribute("data-project", projectId);

            card.innerHTML = `
                <div class="project-image">
                    ${project.cover ? `<img src="${project.cover}" alt="${project.title}">` : ""}
                </div>

                <div class="project-info">
                    <span>${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.shortText}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                openProjectModal(project);
            });

            projectsGrid.appendChild(card);
        });
    }

    function openProjectModal(project) {
        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category;
        modalText.textContent = project.text;

        if (project.link) {
            modalLink.href = project.link;
            modalLink.style.display = "inline-flex";
        } else {
            modalLink.href = "#";
            modalLink.style.display = "none";
        }

        modalGallery.innerHTML = "";

        if (project.images && project.images.length > 0) {
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
    }

    function closeProjectModal() {
        projectModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    function setupFilters() {
        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filter = button.getAttribute("data-filter");
                const cards = document.querySelectorAll(".project-card");

                cards.forEach(card => {
                    const category = card.getAttribute("data-category");

                    if (filter === "todos" || filter === category) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    renderProjects();
    setupFilters();

    closeModal.addEventListener("click", closeProjectModal);

    projectModal.addEventListener("click", event => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeProjectModal();
        }
    });
});