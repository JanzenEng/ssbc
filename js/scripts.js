function switchTab(page) {
    // Remove the active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add the active class to the clicked tab
    event.currentTarget.classList.add('active');

    // Redirect to the specified page
    window.location.href = page;
}

window.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar on button click
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });

    // Close sidebar if click outside
    document.addEventListener("click", (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.remove("show");
        }
    });
});
