import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenisInstance() {
  return lenisInstance;
}

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset: -64,
      lerp: 0.12,
    });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { lerp: 0.12 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}