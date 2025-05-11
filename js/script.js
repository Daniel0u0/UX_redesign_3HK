document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (if needed)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Location Pagination
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    const locationPage1 = document.getElementById('location-page-1');
    const locationPage2 = document.getElementById('location-page-2');
    
    let currentPage = 1;
    const totalPages = 2;
    
    function updatePagination() {
        // Update active page indicator
        if (currentPage === 1) {
            page1.classList.add('active');
            page2.classList.remove('active');
            locationPage1.style.display = 'block';
            locationPage2.style.display = 'none';
        } else {
            page1.classList.remove('active');
            page2.classList.add('active');
            locationPage1.style.display = 'none';
            locationPage2.style.display = 'block';
        }
        
        // Update button states
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        
        console.log(`Switched to location page ${currentPage}`);
    }
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        
        nextButton.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
        
        // Initialize pagination
        updatePagination();
    }
    
    // Phone Catalog Filter
    const filterOptions = document.querySelectorAll('.filter-option');
    
    if (filterOptions.length) {
        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                filterOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                // Here you would normally filter the phone catalog
                // This is a placeholder for actual filtering functionality
                console.log(`Filtered by: ${this.textContent}`);
            });
        });
    }
    
    // Expand buttons in phone catalog
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    if (expandButtons.length) {
        expandButtons.forEach(button => {
            button.addEventListener('click', function() {
                const catalogItem = this.closest('.catalog-item');
                catalogItem.classList.toggle('expanded');
                this.textContent = catalogItem.classList.contains('expanded') ? '-' : '+';
                
                // Here you would normally show/hide additional content
                console.log(`Toggled expansion for: ${catalogItem.querySelector('h3').textContent}`);
            });
        });
    }
});