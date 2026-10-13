// Minimal progressive enhancement — smooth-scroll is handled by CSS,
// this just closes/handles any future interactive bits without dependencies.
document.addEventListener('DOMContentLoaded', () => {
  // Highlight the current section's nav link on scroll (nice-to-have, non-essential).
  const sections = document.querySelectorAll('main .section, .hero');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (!sections.length || !navLinks.length) return;

  const byId = new Map();
  navLinks.forEach(link => {
    const id = link.getAttribute('href').replace('#', '');
    byId.set(id, link);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = byId.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.style.color = '');
        link.style.color = '#ffffff';
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(section => { if (section.id) observer.observe(section); });
});
