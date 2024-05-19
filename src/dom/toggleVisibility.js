export default function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    element.classList.toggle('hidden');
}
