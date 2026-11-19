(() => {
  const sidebar = document.getElementById("sidebar");
  const mobileMenu = document.getElementById("mobileMenu");
  const workspaceButton = document.getElementById("workspaceButton");
  const workspaceMenu = document.getElementById("workspaceMenu");
  const toast = document.getElementById("toast");
  const dialog = document.getElementById("projectDialog");
  const currentSection = document.getElementById("currentSection");

  const labels = {
    overview:"Overview","brand-library":"Brand Library","product-studio":"Product Studio",
    "model-casting":"Model & Casting","creative-studio":"Creative Studio","visual-studio":"Visual Studio",
    "video-studio":"Video Studio","campaign-manager":"Campaign Manager","social-publishing":"Social Publishing",
    "ads-growth":"Ads & Growth","performance-lab":"Performance Lab","asset-library":"Asset Library",
    approvals:"Review & Approvals",automation:"Automation Center",settings:"Settings & Permissions"
  };

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function navigate(page) {
    const label = labels[page] || "Overview";
    currentSection.textContent = label;
    document.querySelectorAll("[data-page]").forEach(link => {
      link.classList.toggle("active", link.dataset.page === page);
    });
    if (page !== "overview") {
      showToast(label + " is mapped in the foundation. Its functional module is scheduled for a later milestone.");
    }
    sidebar.classList.remove("open");
    workspaceMenu.hidden = true;
  }

  document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener("click", () => navigate(link.dataset.page));
  });
  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.go));
  });

  mobileMenu.addEventListener("click", () => sidebar.classList.toggle("open"));
  workspaceButton.addEventListener("click", () => {
    workspaceMenu.hidden = !workspaceMenu.hidden;
    workspaceButton.setAttribute("aria-expanded", String(!workspaceMenu.hidden));
  });

  document.getElementById("newProjectButton").addEventListener("click", () => dialog.showModal());

  document.addEventListener("click", event => {
    if (!workspaceMenu.hidden && !workspaceMenu.contains(event.target) && !workspaceButton.contains(event.target)) {
      workspaceMenu.hidden = true;
      workspaceButton.setAttribute("aria-expanded", "false");
    }
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }
})();