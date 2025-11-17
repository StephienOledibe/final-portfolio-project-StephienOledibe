// -------------------- Theme Toggle --------------------
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// -------------------- Inspirational Quote API --------------------
(async () => {
  const el = document.getElementById('quote');
  if (!el) return;
  try {
    // Fetch a random inspirational quote
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    el.textContent = `"${data.content}" — ${data.author}`;
  } catch {
    el.textContent = 'Could not load quote. Stay inspired!';
  }
})();

// -------------------- Projects Card Animation --------------------
const cards = document.querySelectorAll('.card');
if (cards.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => observer.observe(card));
}
