let currentPage = 1;

document.getElementById("nextPage").addEventListener("click", function() {
    let page = document.getElementById("page" + currentPage);
    page.classList.remove("active");

    currentPage++;
    let nextPage = document.getElementById("page" + currentPage);
    if (nextPage) {
        nextPage.classList.add("active");
    } else {
        currentPage--;  // Stay on last page if there is no next page
    }
});

document.getElementById("prevPage").addEventListener("click", function() {
    let page = document.getElementById("page" + currentPage);
    page.classList.remove("active");

    currentPage--;
    let prevPage = document.getElementById("page" + currentPage);
    if (prevPage) {
        prevPage.classList.add("active");
    } else {
        currentPage++;  // Stay on first page if there is no previous page
    }
});

// Show the first page by default
document.getElementById("page1").classList.add("active");

// Function to check the inputted code
function checkCode() {
    const correctCode = "2214";
    const userCode = document.getElementById("codeInput").value;
    
    if (userCode === correctCode) {
        // Hide the landing page and show the scrapbook
        document.getElementById("landingPage").style.display = "none";
        document.getElementById("scrapbook").style.display = "block";
    } else {
        // Show an error message if the code is incorrect
        document.getElementById("error-message").style.display = "block";
    }
}
