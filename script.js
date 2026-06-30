
// ---- Data ----
const SKILLS = [
  "SQL", "C++", "HTML", "CSS", "Javascript", "Tableau", "Microsoft Office Suite", "Quickbooks"
];

const PROJECTS = [
  { name: "PMI-LA Project Management Case Challenge", 
   summary: "Project Management", 
   stack: ["Access", "Agile", "Gantt Charts"], 
   year: "2025", 
   glyph: "◆", 
   highlights: [
  "Completed a 4-week PMI simulation guiding a project from initiation through closeout",
  "Built risk assessments and performance dashboards to track schedule and cost trends",
  "Presented recommendations with a 4-person team"]},
];

// ---- Tab switching ----
const navButtons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");
const crumb = document.getElementById("crumb");

function showTab(id) {
  navButtons.forEach((b) => b.classList.toggle("active", b.dataset.tab === id));
  panels.forEach((p) => p.classList.toggle("active", p.dataset.panel === id));
  const label = document.querySelector(`.nav-btn[data-tab="${id}"]`)?.textContent.trim();
  if (label) crumb.textContent = label;
  document.querySelector(".main")?.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));
document.querySelectorAll("[data-jump]").forEach((el) => {
  el.addEventListener("click", () => showTab(el.dataset.jump));
});

// ---- Populate skills ----
const skillRow = document.getElementById("skill-row");
if (skillRow) {
  SKILLS.forEach((s) => {
    const span = document.createElement("span");
    span.className = "skill";
    span.textContent = s;
    skillRow.appendChild(span);
  });
}

// ---- Populate projects ----
const projectsGrid = document.getElementById("projects-grid");
if (projectsGrid) {
  PROJECTS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project";
    card.innerHTML = `
      <div class="project-banner">${p.glyph}</div>
      <div class="project-head">
        <h3 class="project-title">${p.name}</h3>
        <span class="project-year">${p.year}</span>
      </div>
      <p class="project-summary">${p.summary}</p>
      <ul class="project-highlights">${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>

      <div class="tag-row">${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
    `;
    projectsGrid.appendChild(card);
  });
}
