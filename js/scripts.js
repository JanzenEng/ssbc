function switchTab(page) {
    // Remove the active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add the active class to the clicked tab
    event.currentTarget.classList.add('active');

    // Redirect to the specified page
    window.location.href = page;
}
