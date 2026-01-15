/**
 * curriculum.js
 * Plan de Estudios Completo - Nivel Tecnicatura Universitaria
 * 
 * Estructura académica formal con materias completas.
 * Cada módulo representa una materia con:
 * - Objetivos de aprendizaje
 * - Temario detallado
 * - Recursos (videos, libros, cursos)
 * - Prácticas obligatorias
 * - Proyecto integrador
 * - Método de validación
 */

export const curriculum = [
    // ═══════════════════════════════════════════════════════════════
    // CICLO 1: FUNDAMENTOS MATEMÁTICOS Y COMPUTACIONALES (Meses 1-4)
    // ═══════════════════════════════════════════════════════════════

    {
        id: "mat-discreta",
        title: "Matemática Discreta",
        duration: "8 semanas",
        category: "Fundamentos Matemáticos",
        phase: 1,
        description: "Base matemática de la computación. Lógica, conjuntos, grafos y combinatoria aplicada a algoritmos.",

        objectives: [
            "Dominar lógica proposicional y de predicados para razonamiento formal",
            "Aplicar teoría de conjuntos y relaciones en modelado de datos",
            "Resolver problemas con grafos (árboles, caminos, conectividad)",
            "Utilizar inducción matemática para demostrar correctitud de algoritmos"
        ],

        syllabus: [
            "1. Lógica Proposicional y de Predicados",
            "   - Tablas de verdad, equivalencias lógicas",
            "   - Cuantificadores (∀, ∃)",
            "   - Inferencia y reglas de deducción",
            "",
            "2. Teoría de Conjuntos",
            "   - Operaciones (unión, intersección, diferencia)",
            "   - Producto cartesiano y relaciones",
            "   - Funciones y cardinalidad",
            "",
            "3. Teoría de Grafos",
            "   - Grafos dirigidos y no dirigidos",
            "   - Árboles y árboles binarios",
            "   - Caminos, ciclos y conectividad",
            "   - Aplicaciones: BFS, DFS conceptual",
            "",
            "4. Combinatoria y Probabilidad Básica",
            "   - Permutaciones y combinaciones",
            "   - Principio de inclusión-exclusión",
            "   - Probabilidad discreta aplicada",
            "",
            "5. Inducción Matemática",
            "   - Inducción simple y fuerte",
            "   - Aplicación a demostración de algoritmos"
        ],

        resources: [
            {
                type: "Libro Principal",
                name: "Rosen - Discrete Mathematics and Its Applications",
                url: "https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/M9780073383095.html"
            },
            {
                type: "Curso Online",
                name: "MIT 6.042J - Mathematics for Computer Science",
                url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/"
            },
            {
                type: "Video Playlist",
                name: "Trefor Bazett - Discrete Math",
                url: "https://www.youtube.com/playlist?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS"
            }
        ],

        practices: [
            "Ejercicios de lógica proposicional (100+ problemas)",
            "Modelado de problemas reales con grafos",
            "Demostraciones por inducción (algoritmos recursivos)",
            "Análisis combinatorio de complejidad algorítmica"
        ],

        project: {
            title: "Implementación de Algoritmos de Grafos",
            description: "Desarrollar en Python/C una biblioteca que implemente BFS, DFS, detección de ciclos y camino mínimo (Dijkstra). Incluir demostración matemática de correctitud.",
            deliverables: [
                "Código documentado con análisis de complejidad",
                "Informe con demostraciones matemáticas",
                "Suite de tests unitarios"
            ]
        },

        validation: {
            method: "Examen teórico + Defensa de proyecto",
            criteria: [
                "Resolución correcta de problemas lógicos y combinatorios",
                "Implementación correcta de algoritmos de grafos",
                "Capacidad de demostrar correctitud matemática"
            ]
        },

        mandatory: true
    },

    {
        id: "cs50x",
        title: "CS50x: Introducción a Ciencias de la Computación",
        duration: "12 semanas",
        category: "Fundamentos Computacionales",
        phase: 1,
        description: "Curso introductorio de Harvard. Pensamiento algorítmico, abstracción y resolución de problemas. Base innegociable del programa.",

        objectives: [
            "Pensar algorítmicamente y resolver problemas de forma estructurada",
            "Dominar gestión manual de memoria (C) y entender bajo nivel",
            "Implementar estructuras de datos fundamentales desde cero",
            "Transicionar entre lenguajes de bajo y alto nivel"
        ],

        syllabus: [
            "Week 0: Scratch - Pensamiento computacional",
            "Week 1: C - Sintaxis, tipos, operadores",
            "Week 2: Arrays - Memoria contigua, strings",
            "Week 3: Algoritmos - Búsqueda, ordenamiento, Big O",
            "Week 4: Memoria - Punteros, heap, stack, malloc/free",
            "Week 5: Estructuras de Datos - Linked lists, trees, hash tables",
            "Week 6: Python - Transición a alto nivel",
            "Week 7: SQL - Bases de datos relacionales",
            "Week 8: HTML, CSS, JavaScript - Fundamentos web",
            "Week 9: Flask - Aplicaciones web dinámicas",
            "Week 10: Proyecto Final"
        ],

        resources: [
            {
                type: "Curso Oficial",
                name: "CS50x 2024",
                url: "https://cs50.harvard.edu/x/"
            },
            {
                type: "Libro Complementario",
                name: "The C Programming Language (K&R)",
                url: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628"
            }
        ],

        practices: [
            "Problem Sets semanales (10 total)",
            "Labs de programación en C",
            "Debugging intensivo con valgrind y gdb"
        ],

        project: {
            title: "Final Project - Aplicación Web Completa",
            description: "Desarrollar una aplicación web original que integre backend (Flask/Django), base de datos y frontend interactivo.",
            deliverables: [
                "Código fuente en GitHub",
                "Video de demostración (2-3 min)",
                "Documentación técnica"
            ]
        },

        validation: {
            method: "Completar todos los Problem Sets + Proyecto Final",
            criteria: [
                "Código que pase todos los tests automatizados",
                "Proyecto funcional y original",
                "Certificado de CS50 (opcional pero recomendado)"
            ]
        },

        mandatory: true
    },

    {
        id: "git-terminal",
        title: "Control de Versiones y Entorno de Desarrollo",
        duration: "3 semanas",
        category: "Herramientas Profesionales",
        phase: 1,
        description: "Dominio de Git, terminal Unix/Linux y configuración de entorno profesional. Habilidad crítica para trabajo colaborativo.",

        objectives: [
            "Manejar Git con fluidez (branching, merging, rebasing)",
            "Dominar terminal Unix/Linux para productividad",
            "Configurar entorno de desarrollo profesional",
            "Colaborar en proyectos open source"
        ],

        syllabus: [
            "1. Git Fundamentals",
            "   - Init, add, commit, push, pull",
            "   - Branching strategies (Git Flow)",
            "   - Merge vs Rebase",
            "   - Resolución de conflictos",
            "",
            "2. Git Avanzado",
            "   - Interactive rebase",
            "   - Cherry-pick, stash",
            "   - Hooks y automatización",
            "   - GitHub Actions básico",
            "",
            "3. Terminal Unix/Linux",
            "   - Navegación y manipulación de archivos",
            "   - Pipes, redirección, grep, sed, awk",
            "   - Permisos y usuarios",
            "   - SSH y claves públicas",
            "",
            "4. Entorno de Desarrollo",
            "   - VS Code / Vim configuración",
            "   - Linters y formatters",
            "   - Debugging tools"
        ],

        resources: [
            {
                type: "Libro",
                name: "Pro Git Book (Scott Chacon)",
                url: "https://git-scm.com/book/en/v2"
            },
            {
                type: "Curso Interactivo",
                name: "Learn Git Branching",
                url: "https://learngitbranching.js.org/"
            },
            {
                type: "Tutorial",
                name: "The Missing Semester of Your CS Education (MIT)",
                url: "https://missing.csail.mit.edu/"
            }
        ],

        practices: [
            "Contribuir a un proyecto open source (PR real)",
            "Configurar dotfiles personales",
            "Resolver ejercicios de terminal (Linux Survival)"
        ],

        project: {
            title: "Portfolio en GitHub",
            description: "Crear un repositorio personal bien documentado con proyectos del curso, README profesional y GitHub Actions para CI.",
            deliverables: [
                "Repositorio público en GitHub",
                "README con badges y documentación",
                "Al menos 1 workflow de CI configurado"
            ]
        },

        validation: {
            method: "Revisión de repositorio + Contribución open source",
            criteria: [
                "Historial de commits limpio y descriptivo",
                "Uso correcto de branches",
                "Pull request aceptado en proyecto externo"
            ]
        },

        mandatory: true
    },

    // ═══════════════════════════════════════════════════════════════
    // CICLO 2: ALGORITMOS Y PARADIGMAS (Meses 5-8)
    // ═══════════════════════════════════════════════════════════════

    {
        id: "algoritmos-estructuras",
        title: "Algoritmos y Estructuras de Datos",
        duration: "10 semanas",
        category: "Algoritmos y Complejidad",
        phase: 2,
        description: "Estudio profundo de algoritmos clásicos, análisis de complejidad y estructuras de datos avanzadas. Nivel superior a CS50.",

        objectives: [
            "Analizar complejidad temporal y espacial (Big O, Theta, Omega)",
            "Implementar y optimizar algoritmos de ordenamiento y búsqueda",
            "Dominar estructuras de datos avanzadas (heaps, tries, grafos)",
            "Aplicar técnicas algorítmicas (divide & conquer, greedy, DP)"
        ],

        syllabus: [
            "1. Análisis de Complejidad",
            "   - Notación asintótica (O, Ω, Θ)",
            "   - Análisis de casos (mejor, peor, promedio)",
            "   - Recurrencias y Teorema Maestro",
            "",
            "2. Algoritmos de Ordenamiento",
            "   - Quicksort, Mergesort, Heapsort",
            "   - Counting sort, Radix sort",
            "   - Análisis comparativo",
            "",
            "3. Estructuras de Datos Avanzadas",
            "   - Heaps y Priority Queues",
            "   - Tries y árboles de búsqueda",
            "   - Grafos (representaciones, traversals)",
            "   - Union-Find (Disjoint Sets)",
            "",
            "4. Técnicas Algorítmicas",
            "   - Divide and Conquer",
            "   - Programación Dinámica (DP)",
            "   - Algoritmos Greedy",
            "   - Backtracking",
            "",
            "5. Algoritmos de Grafos",
            "   - BFS, DFS (aplicaciones)",
            "   - Dijkstra, Bellman-Ford",
            "   - Kruskal, Prim (MST)",
            "   - Topological Sort"
        ],

        resources: [
            {
                type: "Libro Principal",
                name: "Introduction to Algorithms (CLRS)",
                url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"
            },
            {
                type: "Curso",
                name: "Princeton Algorithms I & II (Coursera)",
                url: "https://www.coursera.org/learn/algorithms-part1"
            },
            {
                type: "Práctica",
                name: "LeetCode - Top Interview Questions",
                url: "https://leetcode.com/problemset/all/"
            }
        ],

        practices: [
            "Resolver 100+ problemas en LeetCode/HackerRank",
            "Implementar todas las estructuras desde cero",
            "Análisis de complejidad de código existente"
        ],

        project: {
            title: "Biblioteca de Algoritmos Documentada",
            description: "Implementar en C/Python una biblioteca completa de algoritmos y estructuras de datos con análisis de complejidad, tests y documentación técnica.",
            deliverables: [
                "Código con análisis Big O comentado",
                "Suite de tests con benchmarks",
                "Documentación técnica (LaTeX/Markdown)"
            ]
        },

        validation: {
            method: "Examen práctico + Proyecto",
            criteria: [
                "Implementación correcta de algoritmos clásicos",
                "Análisis de complejidad preciso",
                "Capacidad de elegir estructura óptima para problema dado"
            ]
        },

        mandatory: true
    },

    {
        id: "cs50p",
        title: "CS50P: Programación en Python",
        duration: "10 semanas",
        category: "Paradigmas de Programación",
        phase: 2,
        description: "Profundización en Python y Programación Orientada a Objetos. Testing, buenas prácticas y paradigma funcional.",

        objectives: [
            "Dominar Python idiomático y sus bibliotecas estándar",
            "Aplicar POO (clases, herencia, polimorfismo, composición)",
            "Escribir tests unitarios y practicar TDD",
            "Introducirse al paradigma funcional"
        ],

        syllabus: [
            "Week 0-2: Python Fundamentals",
            "Week 3-4: Programación Orientada a Objetos",
            "   - Clases y objetos",
            "   - Herencia y polimorfismo",
            "   - Métodos especiales (__init__, __str__, etc.)",
            "   - Composición vs Herencia",
            "",
            "Week 5-6: Testing y Calidad",
            "   - Pytest framework",
            "   - Test-Driven Development (TDD)",
            "   - Mocking y fixtures",
            "",
            "Week 7-8: Paradigma Funcional",
            "   - Funciones de orden superior",
            "   - Map, filter, reduce",
            "   - List comprehensions",
            "   - Decoradores",
            "",
            "Week 9-10: Buenas Prácticas",
            "   - PEP 8 y estilo",
            "   - Type hints",
            "   - Documentación (docstrings)",
            "   - Expresiones regulares"
        ],

        resources: [
            {
                type: "Curso Oficial",
                name: "CS50's Introduction to Programming with Python",
                url: "https://cs50.harvard.edu/python/"
            },
            {
                type: "Libro",
                name: "Fluent Python (Luciano Ramalho)",
                url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/"
            },
            {
                type: "Documentación",
                name: "Real Python Tutorials",
                url: "https://realpython.com/"
            }
        ],

        practices: [
            "Problem Sets de CS50P (10 total)",
            "Refactorizar código procedural a POO",
            "Escribir tests para proyectos anteriores"
        ],

        project: {
            title: "Sistema de Gestión con POO",
            description: "Desarrollar un sistema (biblioteca, inventario, etc.) aplicando POO, con arquitectura en capas, tests completos y documentación.",
            deliverables: [
                "Código con cobertura de tests >80%",
                "Diagramas UML de clases",
                "Documentación de API"
            ]
        },

        validation: {
            method: "Completar CS50P + Proyecto POO",
            criteria: [
                "Código que siga PEP 8",
                "Tests unitarios comprehensivos",
                "Uso correcto de POO (no procedural disfrazado)"
            ]
        },

        mandatory: true
    },

    {
        id: "bases-datos",
        title: "Bases de Datos Relacionales",
        duration: "6 semanas",
        category: "Gestión de Datos",
        phase: 2,
        description: "Diseño, normalización y optimización de bases de datos. Más allá del SQL básico de CS50.",

        objectives: [
            "Diseñar esquemas relacionales normalizados",
            "Optimizar consultas y usar índices eficientemente",
            "Entender transacciones y propiedades ACID",
            "Comparar diferentes RDBMS (PostgreSQL, MySQL, SQLite)"
        ],

        syllabus: [
            "1. Modelado de Datos",
            "   - Modelo Entidad-Relación (DER)",
            "   - Cardinalidad y relaciones",
            "   - Transformación DER → Relacional",
            "",
            "2. Normalización",
            "   - Dependencias funcionales",
            "   - 1FN, 2FN, 3FN, BCNF",
            "   - Desnormalización estratégica",
            "",
            "3. SQL Avanzado",
            "   - Joins complejos (self-join, outer join)",
            "   - Subconsultas y CTEs",
            "   - Window functions",
            "   - Stored procedures y triggers",
            "",
            "4. Optimización",
            "   - Índices (B-tree, Hash)",
            "   - EXPLAIN y análisis de queries",
            "   - Particionamiento",
            "",
            "5. Transacciones",
            "   - Propiedades ACID",
            "   - Niveles de aislamiento",
            "   - Deadlocks y manejo"
        ],

        resources: [
            {
                type: "Libro",
                name: "Database System Concepts (Silberschatz)",
                url: "https://www.db-book.com/"
            },
            {
                type: "Curso",
                name: "Stanford Databases (Coursera)",
                url: "https://www.coursera.org/learn/database-management"
            },
            {
                type: "Práctica",
                name: "SQLBolt - Interactive SQL Tutorial",
                url: "https://sqlbolt.com/"
            }
        ],

        practices: [
            "Diseñar esquemas para casos reales (e-commerce, red social)",
            "Optimizar queries lentas (ejercicios de performance)",
            "Implementar transacciones en aplicaciones"
        ],

        project: {
            title: "Sistema de Base de Datos Completo",
            description: "Diseñar e implementar una BD para un dominio complejo (ej: sistema hospitalario), con normalización, índices, triggers y documentación completa.",
            deliverables: [
                "Diagrama DER",
                "Scripts SQL de creación",
                "Queries optimizadas con EXPLAIN",
                "Informe de decisiones de diseño"
            ]
        },

        validation: {
            method: "Examen SQL + Proyecto de BD",
            criteria: [
                "Esquema correctamente normalizado",
                "Queries eficientes (uso correcto de índices)",
                "Manejo apropiado de transacciones"
            ]
        },

        mandatory: true
    },

    // ═══════════════════════════════════════════════════════════════
    // CICLO 3: DESARROLLO WEB Y SISTEMAS (Meses 9-12)
    // ═══════════════════════════════════════════════════════════════

    {
        id: "cs50w",
        title: "CS50W: Desarrollo Web Full Stack",
        duration: "12 semanas",
        category: "Desarrollo Web",
        phase: 3,
        description: "Desarrollo web moderno con Django/Flask, APIs REST, JavaScript ES6+ y arquitectura cliente-servidor.",

        objectives: [
            "Desarrollar aplicaciones web full stack con Django",
            "Diseñar e implementar APIs RESTful",
            "Dominar JavaScript moderno (ES6+, async/await)",
            "Implementar Single Page Applications (SPA)"
        ],

        syllabus: [
            "Week 0: HTML, CSS, Git",
            "Week 1-2: Python y Django (MVT)",
            "Week 3: SQL, Models, Migrations",
            "Week 4-5: JavaScript ES6+",
            "Week 6: User Interfaces (DOM, eventos)",
            "Week 7-8: Single Page Applications",
            "Week 9: Testing y CI/CD",
            "Week 10-12: Proyecto Final"
        ],

        resources: [
            {
                type: "Curso Oficial",
                name: "CS50's Web Programming with Python and JavaScript",
                url: "https://cs50.harvard.edu/web/"
            },
            {
                type: "Documentación",
                name: "Django Official Documentation",
                url: "https://docs.djangoproject.com/"
            },
            {
                type: "Libro",
                name: "Eloquent JavaScript (Marijn Haverbeke)",
                url: "https://eloquentjavascript.net/"
            }
        ],

        practices: [
            "Projects de CS50W (5 total)",
            "Desarrollar API REST completa",
            "Implementar autenticación y autorización"
        ],

        project: {
            title: "Aplicación Web Full Stack",
            description: "Desarrollar una aplicación web completa (red social, e-commerce, etc.) con backend Django, API REST, frontend interactivo y deploy.",
            deliverables: [
                "Código en GitHub con CI/CD",
                "Aplicación deployada (Heroku/Railway/Vercel)",
                "Documentación de API (Swagger/Postman)",
                "Video demo"
            ]
        },

        validation: {
            method: "Completar CS50W + Proyecto deployado",
            criteria: [
                "Aplicación funcional en producción",
                "API bien diseñada (RESTful)",
                "Frontend responsivo e interactivo"
            ]
        },

        mandatory: true
    },

    {
        id: "redes",
        title: "Redes de Computadoras",
        duration: "6 semanas",
        category: "Sistemas y Redes",
        phase: 3,
        description: "Fundamentos de redes, protocolos TCP/IP, HTTP y seguridad. Crítico para backend y DevOps.",

        objectives: [
            "Comprender el modelo TCP/IP y OSI",
            "Dominar HTTP/HTTPS y sus evoluciones",
            "Configurar redes básicas y debugging",
            "Aplicar principios de seguridad en redes"
        ],

        syllabus: [
            "1. Fundamentos de Redes",
            "   - Modelo OSI vs TCP/IP",
            "   - Direccionamiento IP (IPv4/IPv6)",
            "   - Subnetting y CIDR",
            "",
            "2. Protocolos de Transporte",
            "   - TCP vs UDP",
            "   - Three-way handshake",
            "   - Control de flujo y congestión",
            "",
            "3. Capa de Aplicación",
            "   - DNS (resolución de nombres)",
            "   - HTTP/1.1, HTTP/2, HTTP/3",
            "   - WebSockets",
            "",
            "4. Seguridad en Redes",
            "   - TLS/SSL",
            "   - Certificados digitales",
            "   - Firewalls y VPNs básico",
            "",
            "5. Herramientas de Debugging",
            "   - ping, traceroute, netstat",
            "   - Wireshark básico",
            "   - curl y análisis de headers"
        ],

        resources: [
            {
                type: "Libro",
                name: "Computer Networking: A Top-Down Approach (Kurose & Ross)",
                url: "https://www.pearson.com/en-us/subject-catalog/p/computer-networking/P200000003334"
            },
            {
                type: "Curso",
                name: "Networking Fundamentals (Cisco)",
                url: "https://www.netacad.com/courses/networking/networking-basics"
            },
            {
                type: "Documentación",
                name: "MDN Web Docs - HTTP",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP"
            }
        ],

        practices: [
            "Configurar red local con subnetting",
            "Analizar tráfico HTTP con Wireshark",
            "Implementar cliente HTTP desde cero (sockets)"
        ],

        project: {
            title: "Servidor HTTP Básico",
            description: "Implementar un servidor HTTP simple en Python/C que maneje requests GET/POST, sirva archivos estáticos y registre logs.",
            deliverables: [
                "Código del servidor",
                "Documentación del protocolo implementado",
                "Tests de funcionalidad"
            ]
        },

        validation: {
            method: "Examen teórico + Proyecto de servidor",
            criteria: [
                "Comprensión de TCP/IP y HTTP",
                "Servidor funcional que cumpla especificación",
                "Capacidad de debugging de problemas de red"
            ]
        },

        mandatory: true
    },

    {
        id: "sistemas-operativos",
        title: "Sistemas Operativos",
        duration: "8 semanas",
        category: "Sistemas y Redes",
        phase: 3,
        description: "Gestión de procesos, memoria, concurrencia y file systems. Entender qué pasa 'bajo el capó'.",

        objectives: [
            "Comprender gestión de procesos y scheduling",
            "Dominar conceptos de concurrencia y sincronización",
            "Entender gestión de memoria (paginación, segmentación)",
            "Conocer file systems y I/O"
        ],

        syllabus: [
            "1. Introducción a Sistemas Operativos",
            "   - Arquitectura de SO",
            "   - System calls",
            "   - Kernel vs User space",
            "",
            "2. Procesos y Threads",
            "   - Creación y terminación de procesos",
            "   - Context switching",
            "   - Threads vs Procesos",
            "   - Scheduling algorithms",
            "",
            "3. Concurrencia",
            "   - Race conditions",
            "   - Locks, semáforos, monitores",
            "   - Deadlocks (prevención y detección)",
            "   - Problemas clásicos (productor-consumidor, etc.)",
            "",
            "4. Gestión de Memoria",
            "   - Paginación y segmentación",
            "   - Virtual memory",
            "   - Page replacement algorithms",
            "",
            "5. File Systems",
            "   - Estructura de file systems",
            "   - Inodes y directorios",
            "   - I/O scheduling"
        ],

        resources: [
            {
                type: "Libro",
                name: "Operating Systems: Three Easy Pieces (OSTEP)",
                url: "https://pages.cs.wisc.edu/~remzi/OSTEP/"
            },
            {
                type: "Curso",
                name: "MIT 6.828 Operating System Engineering",
                url: "https://pdos.csail.mit.edu/6.828/"
            },
            {
                type: "Video",
                name: "Neso Academy - Operating Systems",
                url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"
            }
        ],

        practices: [
            "Implementar scheduling algorithms",
            "Resolver problemas de sincronización",
            "Simular gestión de memoria"
        ],

        project: {
            title: "Shell Básico (Bash-like)",
            description: "Implementar un shell simple en C que maneje comandos, pipes, redirección y procesos en background.",
            deliverables: [
                "Código del shell",
                "Documentación de features implementadas",
                "Informe sobre system calls utilizadas"
            ]
        },

        validation: {
            method: "Examen + Proyecto de shell",
            criteria: [
                "Comprensión de procesos y concurrencia",
                "Shell funcional con features básicas",
                "Manejo correcto de system calls"
            ]
        },

        mandatory: false // Opcional pero altamente recomendado
    },

    // ═══════════════════════════════════════════════════════════════
    // CICLO 4: INGENIERÍA DE SOFTWARE (Meses 13-15)
    // ═══════════════════════════════════════════════════════════════

    {
        id: "ingenieria-software",
        title: "Ingeniería de Software",
        duration: "8 semanas",
        category: "Ingeniería y Arquitectura",
        phase: 4,
        description: "Arquitectura de software, patrones de diseño, principios SOLID y Clean Architecture.",

        objectives: [
            "Aplicar patrones de diseño clásicos (GoF)",
            "Diseñar arquitecturas escalables y mantenibles",
            "Dominar principios SOLID",
            "Modelar sistemas con UML"
        ],

        syllabus: [
            "1. Principios de Diseño",
            "   - SOLID (SRP, OCP, LSP, ISP, DIP)",
            "   - DRY, KISS, YAGNI",
            "   - Separation of Concerns",
            "",
            "2. Patrones de Diseño (GoF)",
            "   - Creacionales: Singleton, Factory, Builder",
            "   - Estructurales: Adapter, Decorator, Facade",
            "   - Comportamiento: Observer, Strategy, Command",
            "",
            "3. Arquitecturas de Software",
            "   - Layered Architecture",
            "   - Hexagonal Architecture (Ports & Adapters)",
            "   - Clean Architecture",
            "   - Microservicios (introducción)",
            "",
            "4. Modelado UML",
            "   - Diagramas de clases",
            "   - Diagramas de secuencia",
            "   - Diagramas de casos de uso",
            "",
            "5. Testing y Calidad",
            "   - Pirámide de testing",
            "   - TDD y BDD",
            "   - Code review y refactoring"
        ],

        resources: [
            {
                type: "Libro",
                name: "Design Patterns: Elements of Reusable OO Software (GoF)",
                url: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612"
            },
            {
                type: "Libro",
                name: "Clean Architecture (Robert C. Martin)",
                url: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"
            },
            {
                type: "Web",
                name: "Refactoring.Guru - Design Patterns",
                url: "https://refactoring.guru/design-patterns"
            }
        ],

        practices: [
            "Refactorizar código legacy aplicando SOLID",
            "Implementar patrones de diseño en proyectos reales",
            "Diseñar arquitectura de sistema complejo"
        ],

        project: {
            title: "Refactoring de Aplicación Legacy",
            description: "Tomar una aplicación monolítica y refactorizarla aplicando Clean Architecture, patrones de diseño y principios SOLID. Documentar decisiones.",
            deliverables: [
                "Código refactorizado",
                "Diagramas UML (antes/después)",
                "Informe de decisiones arquitectónicas",
                "Tests de regresión"
            ]
        },

        validation: {
            method: "Proyecto + Defensa oral",
            criteria: [
                "Aplicación correcta de patrones",
                "Arquitectura desacoplada y testeable",
                "Capacidad de justificar decisiones de diseño"
            ]
        },

        mandatory: true
    },

    {
        id: "testing-qa",
        title: "Testing y Aseguramiento de Calidad",
        duration: "4 semanas",
        category: "Ingeniería y Arquitectura",
        phase: 4,
        description: "Testing exhaustivo: unitario, integración, E2E. TDD, cobertura y CI/CD.",

        objectives: [
            "Escribir tests unitarios efectivos",
            "Implementar tests de integración y E2E",
            "Practicar TDD (Test-Driven Development)",
            "Configurar pipelines de CI/CD"
        ],

        syllabus: [
            "1. Fundamentos de Testing",
            "   - Pirámide de testing",
            "   - Tests unitarios vs integración vs E2E",
            "   - Cobertura de código",
            "",
            "2. Testing Unitario",
            "   - Frameworks (pytest, Jest, JUnit)",
            "   - Mocking y stubs",
            "   - Fixtures y setup/teardown",
            "",
            "3. Test-Driven Development",
            "   - Ciclo Red-Green-Refactor",
            "   - Diseño guiado por tests",
            "",
            "4. Testing de Integración y E2E",
            "   - Tests de API (Postman, pytest)",
            "   - Tests E2E (Selenium, Playwright)",
            "",
            "5. CI/CD",
            "   - GitHub Actions",
            "   - Linters y formatters automáticos",
            "   - Deploy automatizado"
        ],

        resources: [
            {
                type: "Libro",
                name: "Test-Driven Development by Example (Kent Beck)",
                url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530"
            },
            {
                type: "Curso",
                name: "Testing JavaScript (Kent C. Dodds)",
                url: "https://testingjavascript.com/"
            },
            {
                type: "Documentación",
                name: "Pytest Documentation",
                url: "https://docs.pytest.org/"
            }
        ],

        practices: [
            "Escribir tests para proyectos anteriores",
            "Practicar TDD en katas de código",
            "Configurar CI/CD en GitHub Actions"
        ],

        project: {
            title: "Suite de Tests Completa",
            description: "Desarrollar una aplicación usando TDD estricto, con cobertura >90%, tests de integración, E2E y pipeline de CI/CD.",
            deliverables: [
                "Código con tests comprehensivos",
                "Reporte de cobertura",
                "Pipeline de CI/CD funcional"
            ]
        },

        validation: {
            method: "Revisión de código + Cobertura",
            criteria: [
                "Cobertura de tests >90%",
                "Tests bien estructurados y mantenibles",
                "CI/CD configurado correctamente"
            ]
        },

        mandatory: true
    },

    // ═══════════════════════════════════════════════════════════════
    // CICLO 5: PROYECTO FINAL E INTEGRACIÓN (Meses 16-18)
    // ═══════════════════════════════════════════════════════════════

    {
        id: "proyecto-final",
        title: "Proyecto Integrador Final",
        duration: "12 semanas",
        category: "Proyecto Final",
        phase: 5,
        description: "Desarrollo de una aplicación completa de nivel producción que integre todos los conocimientos adquiridos.",

        objectives: [
            "Desarrollar una aplicación full stack de nivel profesional",
            "Aplicar arquitectura limpia y buenas prácticas",
            "Deployar en entorno de producción real",
            "Documentar y presentar el proyecto"
        ],

        syllabus: [
            "Semanas 1-2: Definición y Diseño",
            "   - Definir alcance (MVP)",
            "   - Diseño de arquitectura",
            "   - Modelado de datos",
            "   - Wireframes/mockups",
            "",
            "Semanas 3-8: Desarrollo",
            "   - Backend con API REST",
            "   - Frontend interactivo",
            "   - Base de datos optimizada",
            "   - Tests comprehensivos",
            "",
            "Semanas 9-10: Deploy y Optimización",
            "   - Deploy en cloud (AWS/GCP/Azure/Railway)",
            "   - Configuración de dominio y HTTPS",
            "   - Monitoreo básico",
            "",
            "Semanas 11-12: Documentación y Presentación",
            "   - Documentación técnica completa",
            "   - README profesional",
            "   - Video demo",
            "   - Presentación oral"
        ],

        resources: [
            {
                type: "Guía",
                name: "The Twelve-Factor App",
                url: "https://12factor.net/"
            },
            {
                type: "Documentación",
                name: "AWS/Railway/Vercel Docs",
                url: "https://docs.railway.app/"
            }
        ],

        practices: [
            "Desarrollo iterativo con sprints",
            "Code reviews semanales",
            "Presentaciones de avance"
        ],

        project: {
            title: "Aplicación Full Stack en Producción",
            description: "Desarrollar una aplicación original (no tutorial) que resuelva un problema real, con arquitectura profesional, deployada y documentada.",
            deliverables: [
                "Aplicación deployada con dominio propio",
                "Repositorio en GitHub con README detallado",
                "Documentación técnica (arquitectura, API, DB)",
                "Video demo (5-10 min)",
                "Presentación oral (20 min + Q&A)"
            ]
        },

        validation: {
            method: "Defensa de proyecto ante tribunal",
            criteria: [
                "Funcionalidad completa y sin bugs críticos",
                "Código limpio y bien arquitecturado",
                "Aplicación deployada y accesible",
                "Documentación profesional",
                "Capacidad de defender decisiones técnicas"
            ]
        },

        mandatory: true
    },

    // ═══════════════════════════════════════════════════════════════
    // MATERIAS TRANSVERSALES
    // ═══════════════════════════════════════════════════════════════

    {
        id: "ingles-tecnico",
        title: "Inglés Técnico",
        duration: "Transversal (todo el programa)",
        category: "Habilidades Transversales",
        phase: 0, // Transversal
        description: "Lectura fluida de documentación, redacción técnica y comunicación en inglés.",

        objectives: [
            "Leer documentación oficial sin dificultad",
            "Escribir commits, issues y PRs en inglés",
            "Consumir contenido técnico (videos, blogs) en inglés",
            "Participar en comunidades internacionales"
        ],

        syllabus: [
            "1. Lectura Técnica",
            "   - Documentación oficial (MDN, Python docs, etc.)",
            "   - Papers académicos (introducción)",
            "   - Blogs técnicos (Medium, Dev.to)",
            "",
            "2. Escritura Técnica",
            "   - Commits descriptivos en inglés",
            "   - README y documentación",
            "   - Issues y Pull Requests",
            "",
            "3. Vocabulario Técnico",
            "   - Términos de programación",
            "   - Arquitectura y patrones",
            "   - DevOps y cloud"
        ],

        resources: [
            {
                type: "Práctica",
                name: "Leer toda la documentación oficial en inglés",
                url: "https://developer.mozilla.org/"
            },
            {
                type: "Comunidad",
                name: "Stack Overflow en inglés",
                url: "https://stackoverflow.com/"
            },
            {
                type: "Curso",
                name: "English for Developers (freeCodeCamp)",
                url: "https://www.freecodecamp.org/"
            }
        ],

        practices: [
            "Leer 1 artículo técnico en inglés por semana",
            "Escribir todos los commits en inglés",
            "Participar en foros internacionales"
        ],

        project: {
            title: "Documentación Completa en Inglés",
            description: "Escribir toda la documentación del proyecto final en inglés (README, API docs, arquitectura).",
            deliverables: [
                "README en inglés",
                "Documentación de API en inglés",
                "Comentarios de código en inglés"
            ]
        },

        validation: {
            method: "Revisión de documentación",
            criteria: [
                "Inglés técnico correcto",
                "Documentación clara y profesional"
            ]
        },

        mandatory: true
    }
];

/**
 * Secciones del currículum para organización temporal
 */
export const sections = [
    "Fundamentos Matemáticos",
    "Fundamentos Computacionales",
    "Herramientas Profesionales",
    "Algoritmos y Complejidad",
    "Paradigmas de Programación",
    "Gestión de Datos",
    "Desarrollo Web",
    "Sistemas y Redes",
    "Ingeniería y Arquitectura",
    "Proyecto Final",
    "Habilidades Transversales"
];

/**
 * Roadmap temporal sugerido (12-18 meses)
 */
export const roadmap = [
    {
        phase: 1,
        title: "Fase 1: Fundamentos (Meses 1-4)",
        duration: "4 meses",
        description: "Bases matemáticas y computacionales. Pensamiento algorítmico y herramientas profesionales.",
        modules: ["mat-discreta", "cs50x", "git-terminal"],
        parallel: ["mat-discreta", "git-terminal"], // Se pueden cursar en paralelo
        milestone: "Examen integrador de fundamentos + Portfolio en GitHub"
    },
    {
        phase: 2,
        title: "Fase 2: Algoritmos y Paradigmas (Meses 5-8)",
        duration: "4 meses",
        description: "Profundización en algoritmos, estructuras de datos, POO y bases de datos.",
        modules: ["algoritmos-estructuras", "cs50p", "bases-datos"],
        parallel: ["cs50p", "bases-datos"],
        milestone: "Biblioteca de algoritmos + Sistema con POO + BD normalizada"
    },
    {
        phase: 3,
        title: "Fase 3: Desarrollo Web y Sistemas (Meses 9-12)",
        duration: "4 meses",
        description: "Full stack development, redes y sistemas operativos.",
        modules: ["cs50w", "redes", "sistemas-operativos"],
        parallel: ["redes", "sistemas-operativos"], // SO es opcional
        milestone: "Aplicación web deployada + Servidor HTTP + Shell básico"
    },
    {
        phase: 4,
        title: "Fase 4: Ingeniería de Software (Meses 13-15)",
        duration: "3 meses",
        description: "Arquitectura, patrones de diseño, testing y calidad de software.",
        modules: ["ingenieria-software", "testing-qa"],
        parallel: [],
        milestone: "Refactoring de aplicación legacy + Suite de tests completa"
    },
    {
        phase: 5,
        title: "Fase 5: Proyecto Final (Meses 16-18)",
        duration: "3 meses",
        description: "Integración de todos los conocimientos en un proyecto de nivel producción.",
        modules: ["proyecto-final"],
        parallel: [],
        milestone: "Aplicación full stack deployada + Defensa de proyecto"
    }
];
