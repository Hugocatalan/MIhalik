// Por ahora vacío, pero listo para funcionalidades futuras.
console.log("¡Bienvenido a nuestra web de servicios eléctricos!");
// Detectar la página actual y activar el botón correspondiente
const navItems = {
    "index.html": "nav-home",
    "quienes-somos.html": "nav-quienes",
    "presupuestos.html": "nav-presupuestos",
    "trabajos-realizados.html": "nav-trabajos"
  };
  
  // Obtener la página actual
  const currentPage = window.location.pathname.split("/").pop();
  const activeNav = navItems[currentPage];
  
  // Agregar clase 'active' al botón correspondiente
  if (activeNav) {
    const navLink = document.getElementById(activeNav);
    if (navLink) navLink.classList.add("active");
  }
  