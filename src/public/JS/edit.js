document.querySelectorAll('[data-selected]').forEach(e => {
    e.value = e.dataset.selected
});