const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const quoteForm = document.querySelector("#quoteForm");
const year = document.querySelector("#year");

const WHATSAPP_NUMBER = "18099797867";

if (year) year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 15);
});

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const message = [
    "Hola CABINSA, quiero solicitar una evaluación para mi proyecto.",
    "",
    `Nombre: ${data.get("name")}`,
    `Teléfono: ${data.get("phone")}`,
    `Servicio: ${data.get("service")}`,
    `Ubicación: ${data.get("location") || "No especificada"}`,
    "",
    `Detalles: ${data.get("details")}`
  ].join("\n");

  if (!WHATSAPP_NUMBER) {
    alert("Mensaje preparado:\n\n" + message + "\n\nPara activar WhatsApp directo, agrega el número en js/app.js.");
    return;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
