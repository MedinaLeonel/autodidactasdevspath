# DevPath: Formación Técnica Superior Autodidacta

> Un currículum académico open-source de nivel universitario (12-18 meses) diseñado para formar Ingenieros de Software, no solo programadores.

Este proyecto implementa un plan de estudios riguroso que combina la excelencia pedagógica de **CS50 (Harvard)** con las materias fundamentales de una carrera de **Ingeniería en Sistemas (Algoritmos, Matemáticas, Redes, SSOO)**, todo en una plataforma web minimalista, gratuita y libre de distracciones.

## 🚀 Cómo usar este curso

La plataforma es una **Single Page Application (SPA) estática**. No requiere backend ni base de datos. Tu progreso se guarda localmente en tu navegador.

1.  **Iniciar**: Abre `index.html` en tu navegador.
    *   *Recomendación*: Usa un servidor local (ej. Live Server en VS Code o `npx serve`) para evitar bloqueos de seguridad de módulos JS (`CORS`).
2.  **Planificar**: Revisa el **Roadmap** para entender las fases temporales (Mes 1 al 18).
3.  **Estudiar**: Ve a la sección **Plan de Estudio**. Despliega cada materia para ver:
    *   Objetivos de aprendizaje.
    *   Temario detallado.
    *   Recursos (Libros, Cursos, Videos).
    *   Prácticas obligatorias.
4.  **Validar**: Completa el **Proyecto Integrador** de cada materia y márcala como "Aprobada" usando el checkbox ✅.

## 🛠 Guía Técnica para Contribuidores

El proyecto sigue una filosofía de **"Cero Dependencias, Máxima Legibilidad"**.

### Estructura de Archivos
*   `data/curriculum.js`: **El Cerebro**. Aquí reside todo el contenido académico (materias, recursos, fases). Es el único archivo que necesitas tocar para editar el curso.
*   `js/app.js`: **El Motor**. Maneja la lógica de renderizado, el estado de progreso (localStorage) y la interfaz de usuario.
*   `css/style.css`: **La Piel**. Sistema de diseño minimalista con variables CSS y soporte nativo para Modo Oscuro.
*   `*.html`: **El Esqueleto**. Archivos puramente semánticos, vacíos de contenido, que actúan como contenedores.

### Cómo agregar una nueva materia
1.  Abre `data/curriculum.js`.
2.  Agrega un nuevo objeto al array `curriculum`:
    ```javascript
    {
        id: "nueva-materia",
        title: "Nombre de la Materia",
        category: "Área de Estudio", // Debe coincidir con una de las 'sections'
        duration: "8 semanas",
        mandatory: true,
        description: "Breve descripción...",
        objectives: ["Objetivo 1", "Objetivo 2"],
        syllabus: ["Tema 1", "Tema 2..."],
        resources: [
            { type: "Curso", name: "Nombre Recurso", url: "https://..." }
        ],
        project: {
            title: "Nombre del Proyecto",
            description: "Qué se debe construir",
            deliverables: ["Repo GitHub", "Video Demo"]
        },
        validation: {
            method: "Cómo se aprueba",
            criteria: ["Criterio 1", "Criterio 2"]
        }
    }
    ```
3.  ¡Listo! La interfaz se actualizará automáticamente.

## ✅ Checklist Técnico de Funcionamiento
Si estás modificando el código, verifica esto antes de publicar:

- [ ] **Rutas Relativas**: Todos los imports usan `./` o `../` correctamente.
- [ ] **Módulos JS**: Los scripts se cargan con `type="module"`.
- [ ] **Persistencia**: El progreso se mantiene al recargar la página (`localStorage`).
- [ ] **Responsive**: El menú hamburguesa funciona en móvil y las tablas no rompen el layout.
- [ ] **Dark Mode**: Todos los textos son legibles en modo oscuro (especialmente badges de colores).
- [ ] **Consola Limpia**: No hay errores de JS al navegar entre páginas.

## 🎓 Checklist Pedagógico para el Estudiante
Para considerar una materia "Aprobada", debes cumplir con honestidad:

- [ ] **Teoría**: ¿Puedo explicar los conceptos clave sin mirar los apuntes?
- [ ] **Práctica**: ¿Completé todos los ejercicios obligatorios?
- [ ] **Proyecto**: ¿Construí el proyecto integrador desde cero (sin copiar/pegar)?
- [ ] **Code Review**: ¿Mi código sigue buenas prácticas (nombres claros, modularización)?
- [ ] **Enseñanza**: ¿Podría explicarle este tema a un compañero principiante?

---

© 2026 DevPath Project. 
*Código libre bajo licencia MIT. Contenido educativo propiedad de sus respectivos autores.*
