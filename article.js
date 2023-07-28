function updateHeaderHeight() {
    const header = document.querySelector('nav');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

// Run the function after the page has fully loaded
document.addEventListener('DOMContentLoaded', updateHeaderHeight);

// Also run the function when the window is resized
window.addEventListener('resize', updateHeaderHeight);
