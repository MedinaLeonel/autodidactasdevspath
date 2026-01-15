/**
 * app.js
 * Lógica principal de la aplicación educativa.
 * 
 * RESPONSABILIDAD:
 * Este archivo actúa como el "Controlador" en un patrón MVC simple.
 * 1. Carga los datos académicos (Modelo) desde ../data/curriculum.js
 * 2. Gestiona el estado del progreso del estudiante (persistencia en navegador).
 * 3. Renderiza la interfaz de usuario (Vistas) en HTML dinámico.
 */

import { curriculum, sections, roadmap } from '../data/curriculum.js';

// Clave única para guardar el progreso en el navegador (localStorage)
const STORAGE_KEY = 'study_plan_progress_v1';

// ═══════════════════════════════════════════════════════════════
// 1. GESTIÓN DE ESTADO (PERSISTENCIA)
// ═══════════════════════════════════════════════════════════════

/**
 * Carga el estado de progreso desde localStorage.
 * Retorna un objeto donde las claves son IDs de materias y el valor es true/false.
 */
function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.error("Error cargando el progreso:", e);
        return {};
    }
}

/**
 * Guarda el estado actual en localStorage.
 * @param {Object} state - Objeto con el progreso actualizado.
 */
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Error guardando el progreso:", e);
    }
}

/**
 * Alterna el estado de una materia (Completada <-> Pendiente).
 * Se llama cuando el usuario hace clic en un checkbox.
 * @param {string} id - Identificador único de la materia (ej: 'cs50x').
 */
function toggleModuleCompletion(id) {
    const state = loadState();

    // Invertir el valor actual (si no existe, es false -> true)
    state[id] = !state[id];

    saveState(state);

    // Actualizar toda la interfaz para reflejar los cambios
    updateAllViews();
}

/**
 * Calcula el porcentaje total de avance en la carrera.
 * Regla: Solo cuentan las materias obligatorias (o todas, según diseño).
 * Aquí contamos todas las materias definidas en el currículum.
 */
function calculateTotalProgress() {
    const state = loadState();
    const totalModules = curriculum.length;

    // Contar cuántos módulos del currículum están marcados como true en el estado
    const completedModules = curriculum.filter(module => state[module.id]).length;

    if (totalModules === 0) return 0;

    return Math.round((completedModules / totalModules) * 100);
}

// ═══════════════════════════════════════════════════════════════
// 2. GENERADORES DE HTML (COMPONENTES)
// ═══════════════════════════════════════════════════════════════
// Estas funciones crean cadenas de HTML o elementos DOM.
// Mantenemos el HTML dentro de JS para concentrar la lógica de visualización.

/**
 * Crea el componente de "Accordion" (desplegable) para una materia.
 * Incluye toda la información académica y el checkbox de control.
 */
function createModuleComponent(module, isCompleted) {
    const container = document.createElement('div');

    // Clases dinámicas para estilo visual
    container.className = `module-accordion ${isCompleted ? 'completed' : ''}`;

    // Generar badges (etiquetas) CSS amigables
    const categoryClass = module.category.toLowerCase().replace(/\s+/g, '-');

    // Estructura interna del componente
    container.innerHTML = `
        <!-- ENCABEZADO (Siempre visible) -->
        <div class="accordion-header">
            <div class="accordion-title">
                <h3>${module.title}</h3>
                <div class="module-meta">
                    <span class="badge ${categoryClass}">${module.category}</span>
                    <span class="duration">⏱ ${module.duration}</span>
                </div>
            </div>
            <div class="accordion-toggle">
                <span class="toggle-icon">▼</span>
            </div>
        </div>

        <!-- CONTENIDO (Oculto por defecto) -->
        <div class="accordion-content">
            <div class="module-description">
                <p>${module.description}</p>
            </div>

            ${renderListSection('📋 Objetivos', module.objectives)}
            ${renderSyllabusSection(module.syllabus)}
            ${renderLinksSection(module.resources)}
            ${renderListSection('✏️ Prácticas', module.practices)}
            ${renderProjectSection(module.project)}
            ${renderValidationSection(module.validation)}

            <!-- PIE DEL COMPONENTE (Acciones) -->
            <div class="module-footer">
                <label class="progress-check">
                    <input type="checkbox" data-module-id="${module.id}" ${isCompleted ? 'checked' : ''}>
                    <span class="${isCompleted ? 'completed-text' : ''}">
                        ${isCompleted ? '✅ Materia Aprobada' : 'Marcar como aprobada'}
                    </span>
                </label>
                <span class="${module.mandatory ? 'mandatory-badge' : 'optional-badge'}">
                    ${module.mandatory ? 'Obligatoria' : 'Optativa'}
                </span>
            </div>
        </div>
    `;

    // Lógica de interacción local del componente

    // 1. Abrir/Cerrar Accordion
    const header = container.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        container.classList.toggle('active');
    });

    // 2. Manejar Checkbox (sin propagar clic al accordion)
    const checkbox = container.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (e) => {
        // Detener propagación para que no se abra/cierre el accordion al hacer click en el check
        e.stopPropagation();
        toggleModuleCompletion(module.id);
    });

    return container;
}

// -- Helpers de renderizado para mantener limpio createModuleComponent --

function renderListSection(title, items) {
    if (!items || items.length === 0) return '';
    return `
        <div class="module-section">
            <h4>${title}</h4>
            <ul class="standard-list">
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderSyllabusSection(syllabus) {
    if (!syllabus || syllabus.length === 0) return '';
    return `
        <div class="module-section">
            <h4>📚 Temario Detallado</h4>
            <div class="syllabus-content">
                ${syllabus.map(line => {
        // Si la línea empieza con número (ej: "1. Introducción"), la ponemos en negrita
        if (line.match(/^\d+\./)) return `<div class="syllabus-topic"><strong>${line}</strong></div>`;
        if (line.trim() === '') return '<div class="syllabus-spacer"></div>';
        return `<div class="syllabus-subtopic">${line}</div>`;
    }).join('')}
            </div>
        </div>
    `;
}

function renderLinksSection(resources) {
    if (!resources || resources.length === 0) return '';
    return `
        <div class="module-section">
            <h4>🔗 Recursos de Estudio</h4>
            <ul class="resources-list">
                ${resources.map(res => {
        // Soporta tanto strings simples como objetos {type, name, url}
        if (typeof res === 'string') return `<li><a href="${res}" target="_blank">${res}</a></li>`;
        return `<li><strong>${res.type}:</strong> <a href="${res.url}" target="_blank">${res.name}</a></li>`;
    }).join('')}
            </ul>
        </div>
    `;
}

function renderProjectSection(project) {
    if (!project) return '';
    return `
        <div class="module-section project-section">
            <h4>🚀 Proyecto Integrador</h4>
            <p><strong>${project.title}</strong></p>
            <p>${project.description}</p>
            ${project.deliverables ? `
                <div class="deliverables-box">
                    <strong>Entregables:</strong>
                    <ul>${project.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderValidationSection(validation) {
    if (!validation) return '';
    return `
        <div class="module-section validation-section">
            <h4>⚖️ Evaluación</h4>
            <p><strong>Método:</strong> ${validation.method}</p>
            ${validation.criteria ? `
                <ul>${validation.criteria.map(c => `<li>${c}</li>`).join('')}</ul>
            ` : ''}
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// 3. LOGICA DE VISTAS (PÁGINAS)
// ═══════════════════════════════════════════════════════════════

/**
 * Renderiza la página "Plan de Estudios" (plan.html).
 * Agrupa las materias por categorías definidas en 'sections'.
 */
function renderPlanPage() {
    const container = document.getElementById('plan-grid');
    if (!container) return; // No estamos en plan.html

    container.innerHTML = '';
    const state = loadState();

    // Iteramos por cada sección definida en el currículum (orden lógico)
    sections.forEach(sectionName => {
        // Encontrar todas las materias de esta sección
        const sectionModules = curriculum.filter(m => m.category === sectionName);

        if (sectionModules.length === 0) return;

        // Crear contenedor de la sección
        const sectionContainer = document.createElement('section');
        sectionContainer.className = 'curriculum-section';
        sectionContainer.innerHTML = `<h2 class="section-title">${sectionName}</h2>`;

        // Añadir cada materia a la sección
        sectionModules.forEach(module => {
            const isCompleted = !!state[module.id]; // Convertir a boolean
            sectionContainer.appendChild(createModuleComponent(module, isCompleted));
        });

        container.appendChild(sectionContainer);
    });
}

/**
 * Renderiza la página "Roadmap" (roadmap.html).
 * Muestra las fases temporales (Mes 1-4, etc).
 */
function renderRoadmapPage() {
    const container = document.getElementById('roadmap-timeline');
    if (!container) return; // No estamos en roadmap.html

    container.innerHTML = '';
    const state = loadState();

    roadmap.forEach(phase => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        // Calcular progreso específico de esta fase
        const phaseModules = curriculum.filter(m => phase.modules.includes(m.id));
        const doneCount = phaseModules.filter(m => state[m.id]).length;
        const progressPct = phaseModules.length ? Math.round((doneCount / phaseModules.length) * 100) : 0;

        item.innerHTML = `
            <div class="phase-header">
                <span class="badge phase-badge">Fase ${phase.phase}</span>
                <h3>${phase.title}</h3>
                <div class="phase-meta">
                    <span>📅 ${phase.duration}</span>
                    <span class="progress-indicator" style="color: ${progressPct === 100 ? 'var(--success-color)' : ''}">
                        ${progressPct}% completado
                    </span>
                </div>
            </div>
            
            <p class="phase-description">${phase.description}</p>
            
            <div class="phase-modules-list">
                <h4>Materias en esta fase:</h4>
                ${phaseModules.map(m => `
                    <div class="roadmap-module-item ${state[m.id] ? 'completed' : ''}">
                        <span class="status-icon">${state[m.id] ? '✅' : '○'}</span>
                        <div class="module-info">
                            <strong>${m.title}</strong>
                            <small>${m.duration}</small>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${phase.parallel && phase.parallel.length > 0 ? `
                <div class="parallel-tip">
                    <strong>💡 Consejo:</strong> Puedes cursar simultáneamente: 
                    ${phase.parallel.map(id => {
            const m = curriculum.find(mod => mod.id === id);
            return m ? m.title : id;
        }).join(', ')}
                </div>
            ` : ''}

            <div class="milestone-box">
                <strong>🎯 Hito de Fase:</strong> ${phase.milestone}
            </div>
        `;

        container.appendChild(item);
    });
}

/**
 * Renderiza la página "Proyectos" (projects.html).
 * Muestra solo los proyectos integradores de cada materia.
 */
function renderProjectsPage() {
    const container = document.getElementById('projects-list');
    if (!container) return; // No estamos en projects.html

    container.innerHTML = '';

    // Filtramos solo las materias que tienen un proyecto definido
    const projectModules = curriculum.filter(m => m.project);

    projectModules.forEach(module => {
        const item = document.createElement('div');
        item.className = 'timeline-item project-item';

        const badgeClass = module.category.toLowerCase().replace(/\s+/g, '-');

        item.innerHTML = `
            <div class="project-header">
                <h3>${module.project.title}</h3>
                <div class="project-tags">
                    <span class="badge ${badgeClass}">${module.category}</span>
                </div>
            </div>
            
            <p class="project-description">${module.project.description}</p>
            
            ${module.project.deliverables ? `
                <div class="deliverables-container">
                    <strong>📦 Entregables Requeridos:</strong>
                    <ul>
                        ${module.project.deliverables.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="project-footer">
                <small>Parte de la materia: <strong>${module.title}</strong></small>
            </div>
        `;

        container.appendChild(item);
    });
}

/**
 * Actualiza la barra de progreso global en el header (si existe).
 */
function renderGlobalProgress() {
    const bar = document.getElementById('global-progress');
    const text = document.getElementById('progress-text');

    if (bar && text) {
        const pct = calculateTotalProgress();
        bar.style.width = `${pct}%`;
        bar.style.backgroundColor = 'var(--accent-color)';
        text.textContent = `${pct}% Completado`;
    }
}

// ═══════════════════════════════════════════════════════════════
// 5. INTERFAZ DE USUARIO GLOBAL (MENU & THEME)
// ═══════════════════════════════════════════════════════════════

function initGlobalUI() {
    // A. MENU HAMBURGUESA
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            // Bloquear scroll del body si está abierto
            if (isActive) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = '';
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // B. MODO OSCURO (THEME TOGGLE)
    const themeBtn = document.getElementById('theme-toggle');
    // Leer preferencia guardada
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Aplicar tema inicial
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeBtn) themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// 6. CONTROLADOR PRINCIPAL
// ═══════════════════════════════════════════════════════════════

/**
 * Función maestra que refresca todas las vistas de la aplicación.
 * Se llama al inicio y cada vez que cambia el estado.
 */
function updateAllViews() {
    renderPlanPage();
    renderRoadmapPage();
    renderProjectsPage();
    renderGlobalProgress();
}

// ═══════════════════════════════════════════════════════════════
// 7. INICIALIZACIÓN (ENTRY POINT)
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    console.log("DevPath App Iniciada 🚀");

    // 1. Cargar UI común (Header/Nav)
    initGlobalUI();

    // 2. Renderizar vistas específicas según la página en la que estemos
    updateAllViews();
});
