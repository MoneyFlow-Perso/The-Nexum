const routeInfo = {
  home: { title: "OVERVIEW" },
  "brand-intelligence": { title: "BRAND INTELLIGENCE", heading: "Brand Intelligence", desc: "The foundation for consistent creative output, built from approved brand knowledge." },
  "creative-director": { title: "CREATIVE DIRECTOR", heading: "Creative Director", desc: "A collaborative space for campaign ideas, audience thinking and creative direction." },
  "quick-campaign": { title: "QUICK CAMPAIGN", heading: "Quick Campaign", desc: "Turn a garment photo and a few choices into a structured campaign brief." },
  "visual-studio": { title: "VISUAL STUDIO", heading: "Visual Studio", desc: "Develop original banners, editorial concepts and production-ready visual prompts." },
  "video-studio": { title: "VIDEO STUDIO", heading: "Video Studio", desc: "Build short-form hooks, shot lists, motion prompts and commercial-audio direction." },
  "content-studio": { title: "CONTENT STUDIO", heading: "Content Studio", desc: "Create tailored content for Instagram, Facebook, TikTok and Pinterest." },
  "growth-studio": { title: "GROWTH STUDIO", heading: "Growth Studio", desc: "Develop paid-ad angles, A/B tests, cross-sell concepts and campaign rollouts." },
  "campaign-library": { title: "CAMPAIGN LIBRARY", heading: "Campaign Library", desc: "Organize and revisit campaign briefs, copy, prompts and approved assets." },
  "umbrage-connection": { title: "UMBRAGE CONNECTION", heading: "UmBrage Connection", desc: "A future controlled, read-only connection for selected approved business information." }
};

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

function renderRoute() {
  const route = (location.hash || "#home").slice(1);
  const info = routeInfo[route] || routeInfo.home;
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.route === (routeInfo[route] ? route : "home"));
  });
  document.getElementById("crumb").textContent = info.title;
  document.getElementById("page-home").classList.toggle("active", route === "home" || !routeInfo[route]);
  document.getElementById("page-placeholder").classList.toggle("active", route !== "home" && !!routeInfo[route]);
  if (route !== "home" && routeInfo[route]) {
    document.getElementById("page-kicker").textContent = info.title;
    document.getElementById("page-title").textContent = info.heading;
    document.getElementById("page-description").textContent = info.desc;
  }
  sidebar.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", renderRoute);
menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
document.addEventListener("click", (event) => {
  if (window.innerWidth <= 760 && sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});
renderRoute();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
