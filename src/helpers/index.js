export function switchLock(isOpen) {
  const body = document.body;
  isOpen ? (body.classList.add("m-lock")) : (body.classList.remove("m-lock"));
}
