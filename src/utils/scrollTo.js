const NAVBAR_OFFSET = 80;

export function smoothScrollTo(targetId) {
  const id = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}

export function handleNavClick(event, href, onComplete) {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  smoothScrollTo(href);
  onComplete?.();
}
