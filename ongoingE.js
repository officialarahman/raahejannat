function toggleContent(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    content.classList.toggle('open');
    arrow.classList.toggle('rotate');
}