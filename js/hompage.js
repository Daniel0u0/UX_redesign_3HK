function filterPlans() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block'; // Show spinner
    setTimeout(() => {
      spinner.style.display = 'none'; // Hide after loading (simulated)
      // Add actual filter logic here (e.g., fetch plans from an API)
    }, 2000); // Simulate 2-second loading
  }