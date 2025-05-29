document.getElementById('confirmDelete').addEventListener('change', function() {
    document.getElementById('confirmDeleteBtn').disabled = !this.checked;
});
        
// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-mdb-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new mdb.Tooltip(tooltipTriggerEl);
    });
});